# Python script to rebuild timeline.ts with all eras populated
# Run from project root: python3 scripts/build_timeline.py

import re

with open('src/data/timeline.ts', 'r') as f:
    lines = f.readlines()

# Keep header + Era 1 + Era 2 (lines 1-604, 0-indexed 0-603)
# Line 604 is the closing brace of Era 2
header = ''.join(lines[:604])

print(f"Header: {len(header)} chars, {len(lines[:604])} lines")
print("Building complete timeline...")

# We'll construct the rest via a separate script
with open('src/data/timeline_header.ts', 'w') as f:
    f.write(header)

print("Wrote header to timeline_header.ts")
