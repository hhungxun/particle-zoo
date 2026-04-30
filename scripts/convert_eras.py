#!/usr/bin/env python3
"""Transcribe Eras 4-7 from content-planning-eras-2-7.md into timeline.ts fragments."""

import re

def escape_single_quotes(s):
    """Escape single quotes for TypeScript single-quoted strings."""
    return s.replace("'", "\\'")

def extract_events(text):
    """Extract event blocks from markdown."""
    # Split by event headers
    pattern = r'### Event: ([^\n]+)\n'
    parts = re.split(pattern, text)
    events = []
    for i in range(1, len(parts), 2):
        event_id = parts[i].strip()
        content = parts[i+1]
        events.append((event_id, content))
    return events

def parse_field(block, key):
    """Extract a field value from markdown block."""
    # Match - **key:** value (to end of line or next field)
    pattern = rf'- \*\*{re.escape(key)}:\*\*\s*(.*?)(?=\n- \*\*|\n---|\Z)'
    m = re.search(pattern, block, re.DOTALL)
    if not m:
        return None
    val = m.group(1).strip()
    # Remove backtick wrappers if present
    if val.startswith('`') and val.endswith('`'):
        val = val[1:-1]
    return val

def parse_list_field(block, key):
    """Extract a list field like discoverers or particles."""
    val = parse_field(block, key)
    if val is None:
        return None
    # If it's wrapped in backticks with list syntax, extract the inner content
    if val.startswith('`') and val.endswith('`'):
        val = val[1:-1]
    return val

def parse_papers(block):
    """Extract paper or papers from block."""
    # Check if there's a papers section with multiple papers
    papers = []
    # Match individual paper entries
    paper_pattern = r'- \*\*authors:\*\*\s*(.*?)\n\s*- \*\*title:\*\*\s*(.*?)\n\s*- \*\*journal:\*\*\s*(.*?)\n(?:\s*- \*\*volume:\*\*\s*(.*?)\n)?(?:\s*- \*\*pages:\*\*\s*(.*?)\n)?\s*- \*\*year:\*\*\s*(\d+)(?:\n\s*- \*\*doi:\*\*\s*(.*?)\n)?(?:\s*- \*\*abstractParaphrase:\*\*\s*(.*?)\n)?(?:\s*- \*\*notes:\*\*\s*(.*?)\n)?(?:\s*- \*\*verified:\*\*\s*(true|false)\n)?'
    
    for m in re.finditer(paper_pattern, block, re.DOTALL):
        paper = {
            'authors': m.group(1).strip(),
            'title': m.group(2).strip(),
            'journal': m.group(3).strip(),
            'year': int(m.group(6)),
        }
        if m.group(4): paper['volume'] = m.group(4).strip()
        if m.group(5): paper['pages'] = m.group(5).strip()
        if m.group(7): paper['doi'] = m.group(7).strip()
        if m.group(8): paper['abstractParaphrase'] = m.group(8).strip()
        if m.group(9): paper['notes'] = m.group(9).strip()
        if m.group(10): paper['verified'] = m.group(10).strip() == 'true'
        papers.append(paper)
    
    return papers

def parse_anecdote(block):
    """Extract anecdote from block."""
    pattern = r'- \*\*anecdote:\*\*\n\s*- \*\*text:\*\*\s*(.*?)\n\s*- \*\*source:\*\*\s*(.*?)\n\s*- \*\*verified:\*\*\s*(true|false)'
    m = re.search(pattern, block, re.DOTALL)
    if not m:
        return None
    return {
        'text': m.group(1).strip(),
        'source': m.group(2).strip(),
        'verified': m.group(3).strip() == 'true',
    }

def parse_narrative(block):
    """Extract narrative paragraphs from block."""
    # Find the narrative field and extract its paragraphs
    pattern = r'- \*\*narrative:\*\*\n((?:\s+.*\n)+)'
    m = re.search(pattern, block)
    if not m:
        return []
    content = m.group(1)
    # Split into paragraphs — each paragraph is a non-empty line with indentation
    paragraphs = []
    for line in content.split('\n'):
        stripped = line.strip()
        if stripped and not stripped.startswith('- '):
            paragraphs.append(stripped)
    return paragraphs

def format_ts_string(s):
    return "'" + escape_single_quotes(s) + "'"

def format_ts_array(arr):
    if not arr:
        return '[]'
    items = [format_ts_string(s) for s in arr]
    return '[' + ', '.join(items) + ']'

def format_paper(paper, indent='        '):
    lines = []
    for k, v in paper.items():
        if k == 'year':
            lines.append(f"{indent}{k}: {v},")
        elif k == 'verified':
            lines.append(f"{indent}{k}: {'true' if v else 'false'},")
        else:
            lines.append(f"{indent}{k}: {format_ts_string(v)},")
    return '\n'.join(lines)

def format_event(event_id, block):
    year = int(parse_field(block, 'year'))
    year_label = parse_field(block, 'yearLabel')
    headline = parse_field(block, 'headline')
    short_title = parse_field(block, 'shortTitle')
    discipline = parse_field(block, 'discipline')
    
    # discoverers
    discoverers_str = parse_field(block, 'discoverers')
    discoverers = []
    if discoverers_str:
        # Parse "Name (Affiliation), Name (Affiliation)"
        # or "Name (Affiliation) and Name (Affiliation)"
        # or "Name (Affiliation), Name (Affiliation), Name (Affiliation)"
        parts = re.split(r',\s+(?![^()]*\))', discoverers_str)
        for part in parts:
            part = part.strip()
            if part.lower().startswith('and '):
                part = part[4:]
            m = re.match(r'(.+?)\s*\(([^)]+)\)', part)
            if m:
                discoverers.append({'name': m.group(1).strip(), 'affiliation': m.group(2).strip()})
            else:
                discoverers.append({'name': part, 'affiliation': ''})
    
    narrative = parse_narrative(block)
    why_it_mattered = parse_field(block, 'whyItMattered')
    papers = parse_papers(block)
    anecdote = parse_anecdote(block)
    visual = parse_field(block, 'visual')
    equations = parse_field(block, 'equationsLatex')
    particles = parse_field(block, 'particles')
    
    lines = []
    lines.append('      {')
    lines.append(f"        id: {format_ts_string(event_id)},")
    lines.append(f"        year: {year},")
    lines.append(f"        yearLabel: {format_ts_string(year_label)},")
    lines.append(f"        headline: {format_ts_string(headline)},")
    lines.append(f"        shortTitle: {format_ts_string(short_title)},")
    lines.append(f"        discipline: {format_ts_string(discipline)},")
    
    if discoverers:
        lines.append('        discoverers: [')
        for d in discoverers:
            lines.append(f"          {{ name: {format_ts_string(d['name'])}, affiliation: {format_ts_string(d['affiliation'])} }},")
        lines.append('        ],')
    
    if narrative:
        lines.append('        narrative: [')
        for para in narrative:
            lines.append(f"          {format_ts_string(para)},")
        lines.append('        ],')
    
    if why_it_mattered:
        lines.append(f"        whyItMattered: {format_ts_string(why_it_mattered)},")
    
    if papers:
        if len(papers) == 1:
            lines.append('        paper: {')
            lines.append(format_paper(papers[0], '          '))
            lines.append('        },')
        else:
            lines.append('        papers: [')
            for p in papers:
                lines.append('          {')
                lines.append(format_paper(p, '            '))
                lines.append('          },')
            lines.append('        ],')
    
    if anecdote:
        lines.append('        anecdote: {')
        lines.append(f"          text: {format_ts_string(anecdote['text'])},")
        lines.append(f"          source: {format_ts_string(anecdote['source'])},")
        lines.append(f"          verified: {'true' if anecdote['verified'] else 'false'},")
        lines.append('        },')
    
    if visual and visual != 'none':
        lines.append(f"        visual: {format_ts_string(visual)},")
    
    if equations:
        # equations might be wrapped in backticks, parse as Python literal
        try:
            eqs = eval(equations)
            if eqs:
                lines.append(f"        equationsLatex: {format_ts_array(eqs)},")
        except:
            pass
    
    if particles:
        try:
            parts = eval(particles)
            if parts:
                lines.append(f"        particles: {format_ts_array(parts)},")
        except:
            pass
    
    lines.append('      },')
    return '\n'.join(lines)

def format_era(era_num, title, year_range, start_year, end_year, accent, bg_tint, blurb, events_text):
    lines = []
    lines.append('  {')
    lines.append(f"    id: 'era-{era_num}',")
    lines.append(f"    number: {era_num},")
    lines.append(f"    title: {format_ts_string(title)},")
    lines.append(f"    yearRange: {format_ts_string(year_range)},")
    lines.append(f"    startYear: {start_year},")
    lines.append(f"    endYear: {end_year},")
    lines.append(f"    accent: '{accent}',")
    lines.append(f"    bgTint: '{bg_tint}',")
    lines.append(f"    blurb: {format_ts_string(blurb)},")
    lines.append('    events: [')
    
    events = extract_events(events_text)
    for event_id, block in events:
        lines.append(format_event(event_id, block))
    
    lines.append('    ],')
    lines.append('  },')
    return '\n'.join(lines)

# Read the markdown file
with open('content-planning-eras-2-7.md', 'r') as f:
    md = f.read()

# Define era boundaries and metadata
era_specs = [
    {
        'num': 4,
        'title': 'Order from Chaos',
        'year_range': '1961–1973',
        'start': 1961,
        'end': 1973,
        'accent': '#5a4a6e',
        'bgTint': '#f0eef4',
        'blurb': "Symmetries, quarks, and the gauge principle began to impose order on the chaos. By 1973 the Standard Model was complete on paper — but most of its particles had not yet been seen.",
    },
    {
        'num': 5,
        'title': 'The November Revolution and Confirmation',
        'year_range': '1974–1983',
        'start': 1974,
        'end': 1983,
        'accent': '#6e4a5a',
        'bgTint': '#f4eef0',
        'blurb': "The J/ψ in November 1974 opened the era of heavy quarks. The tau, the bottom quark, the gluon, and finally the W and Z confirmed the Standard Model piece by piece.",
    },
    {
        'num': 6,
        'title': 'Completing the Standard Model',
        'year_range': '1995–2012',
        'start': 1995,
        'end': 2012,
        'accent': '#4a6e5a',
        'bgTint': '#eef4f0',
        'blurb': "The top quark closed the fermion roster in 1995. Neutrino masses cracked the model in 1998. The Higgs boson, found in 2012, completed the particle content.",
    },
    {
        'num': 7,
        'title': "Coda — What's Left",
        'year_range': '2012–',
        'start': 2012,
        'end': 2012,
        'accent': '#4a5a6e',
        'bgTint': '#eef0f4',
        'blurb': "The Standard Model is complete and it is not enough. Dark matter, dark energy, neutrino mass, and gravity remain outside its frame. The next era has not yet begun.",
    },
]

# Split markdown into era sections
sections = re.split(r'## Era \d+:', md)
# sections[0] is header, sections[1] is Era 2, sections[2] is Era 3, etc.

output = []
for spec in era_specs:
    idx = spec['num'] - 1  # Era 4 is at index 3 (since sections[1]=Era2, [2]=Era3, [3]=Era4)
    if idx < len(sections):
        era_text = sections[idx]
        output.append(format_era(
            spec['num'], spec['title'], spec['year_range'],
            spec['start'], spec['end'], spec['accent'], spec['bgTint'],
            spec['blurb'], era_text
        ))

with open('src/data/timeline_eras_4_7.ts', 'w') as f:
    f.write('\n'.join(output))

print("Wrote src/data/timeline_eras_4_7.ts")
