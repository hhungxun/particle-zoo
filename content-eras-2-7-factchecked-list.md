# Eras 2-7 Fact-Checked Content List

Purpose: implementation checklist for the next prompt. This is not a figures/diagrams plan. Visuals are intentionally deferred.

Status key:
- `ready`: content can be implemented after copy-editing.
- `correct before implementation`: factual or bibliographic correction needed.
- `story unverified`: anecdote can be kept only if marked unverified or softened.

## Global Corrections

- Do not import or implement figures/diagrams yet. Ignore `visual` assignments from the planning file for now.
- Add an optional `summary` field for any event whose first narrative paragraph is not a good collapsed-card summary.
- Fix typo in Fermi narrative: `waspoint-like` -> `was point-like`.
- Treat equations as modern explanatory notation when they are not exactly the historical paper's notation.
- Avoid saying "direct evidence for the Z boson" for 1973 neutral currents. Say "indirect evidence for the neutral weak current / Z-mediated interaction"; direct W/Z observation is 1983.
- Treat "verified: true" in the planning file as provisional unless citation details below are marked ready.
- Keep unverifiable quotations as `verified: false` or rephrase as "often told/reported".

## Era 2: Forces and Phantoms (1934-1947)

### 1. Fermi's Theory of Beta Decay

- Event id: `fermi-1934`
- Status: `ready` with copy edits.
- Year label: `1934`
- Discipline: `theory`
- Core facts to keep:
  - Fermi built the first quantitative beta-decay theory from Pauli's neutrino hypothesis.
  - The contact four-fermion weak interaction is the low-energy ancestor of later electroweak theory.
  - Published in `Nuovo Cimento` and `Zeitschrift fur Physik`; Nature rejection story is historically standard but exact wording should remain unverified.
- Corrections:
  - Fix `waspoint-like`.
  - Mark the displayed Lagrangian as modernized schematic notation, not Fermi's exact 1934 V-A form.
- Citation:
  - Fermi, E. "Tentativo di una teoria dei raggi beta." `Nuovo Cimento` 11, 1-19 (1934), DOI `10.1007/BF02959820`.
- Anecdote:
  - `story unverified`: exact Nature rejection wording.

### 2. Yukawa Predicts the Meson

- Event id: `yukawa-1935`
- Status: `ready`; anecdote remains unverified.
- Year label: `1935`
- Discipline: `theory`
- Core facts to keep:
  - Yukawa connected force range to mediator mass and predicted a nuclear-force meson of order 200 electron masses.
  - The muon was initially mistaken for this particle; the pion later resolved the confusion.
- Citation:
  - Yukawa, H. "On the Interaction of Elementary Particles." `Proceedings of the Physico-Mathematical Society of Japan` 17, 48-57 (1935).
- Anecdote:
  - `story unverified`: Lake Biwa story.

### 3. The Muon Discovered

- Event id: `muon-1937`
- Status: `ready` with softened wording.
- Year label: `1937`
- Discipline: `experiment`
- Core facts to keep:
  - Anderson and Neddermeyer published evidence for penetrating cosmic-ray particles with mass between electron and proton.
  - Conversi, Pancini, and Piccioni showed the cosmic-ray meson did not interact strongly like Yukawa's nuclear-force meson.
  - The muon is a second-generation charged lepton, not a nuclear-force mediator.
- Corrections:
  - Avoid implying the muon mass was already known precisely as 106 MeV in the first discovery paper; use "later measured near 105.7 MeV".
- Citation:
  - Neddermeyer, S.H. and Anderson, C.D. "Note on the Nature of Cosmic Ray Particles." `Physical Review` 51, 884-886 (1937), DOI `10.1103/PhysRev.51.884`.
- Anecdote:
  - `story unverified`: Rabi's "Who ordered that?" exact wording and occasion.

### 4. The Real Pion Found

- Event id: `pion-1947`
- Status: `ready`.
- Year label: `1947`
- Discipline: `experiment`
- Core facts to keep:
  - Bristol emulsion work separated the pion from the muon.
  - Charged pion decay chain established the heavier pion decaying to the muon plus a neutrino.
  - Powell received the 1950 Nobel Prize; Lattes and Occhialini did not.
- Corrections:
  - Use `pi+ -> mu+ + nu_mu` as the simplified decay; for `pi-`, use the antiparticles.
- Citations:
  - Lattes, C.M.G., Occhialini, G.P.S., and Powell, C.F. "Observations on the Tracks of Slow Mesons in Photographic Emulsions." `Nature` 160, 453-456 (1947), DOI `10.1038/160453a0`.
  - Lattes, C.M.G., Occhialini, G.P.S., and Powell, C.F. "Observations on the Tracks of Slow Mesons in Photographic Emulsions. Part II." `Nature` 160, 486-492 (1947).

## Era 3: The Particle Zoo (1947-1961)

### 5. Discovery of Strange Particles

- Event id: `strange-particles-1947`
- Status: `ready`.
- Year label: `1947-1953`
- Discipline: `experiment`
- Core facts to keep:
  - Rochester and Butler's V-particle events began the strange-particle era.
  - Strange particles are produced strongly but decay weakly, motivating a new quantum number.
  - Associated production and strangeness conservation/violation explain the lifetime puzzle phenomenologically.
- Citation:
  - Rochester, G.D. and Butler, C.C. "Evidence for the Existence of New Unstable Elementary Particles." `Nature` 160, 855-857 (1947), DOI `10.1038/160855a0`.

### 6. The Strangeness Scheme

- Event id: `nishijima-gellmann-1953`
- Status: `correct before implementation`.
- Year label: `1953-1954`
- Discipline: `theory`
- Core facts to keep:
  - Gell-Mann and Nishijima independently developed the classification that became the Gell-Mann-Nishijima relation.
  - Use `Q = I_3 + (B + S)/2`.
  - Strangeness is conserved in strong/electromagnetic interactions and violated in weak decays.
- Corrections:
  - Nishijima citation in the planning file appears wrong. Replace with `Some Remarks on the Even-odd Rule`, `Progress of Theoretical Physics` 12, 107-108 (1954), DOI `10.1143/PTP.12.107`, or verify whether a 1953 Nakano-Nishijima citation is preferred for the specific historical claim.
  - Keep Gell-Mann 1953 citation.
- Citation:
  - Gell-Mann, M. "Isotopic Spin and New Unstable Particles." `Physical Review` 92, 833-834 (1953), DOI `10.1103/PhysRev.92.833`.
- Anecdote:
  - `story unverified`: "curiosity" and eta-charge naming details.

### 7. Direct Detection of the Neutrino

- Event id: `reines-cowan-1956`
- Status: `ready`.
- Year label: `1956`
- Discipline: `experiment`
- Core facts to keep:
  - Savannah River reactor antineutrinos were detected by inverse beta decay.
  - Prompt positron annihilation gammas plus delayed neutron-capture gammas gave the signature.
  - Pauli telegram/champagne story is well attested in Reines's Nobel lecture, but keep quotation exact only if sourced.
- Citation:
  - Cowan, C.L. et al. "Detection of the Free Neutrino: A Confirmation." `Science` 124, 103-104 (1956), DOI `10.1126/science.124.3212.103`.

### 8. Parity Not Conserved in Weak Interactions

- Event id: `lee-yang-1956`
- Status: `correct before implementation`.
- Year label: `1956`
- Discipline: `theory`
- Core facts to keep:
  - Lee and Yang showed parity conservation had not actually been tested in weak interactions.
  - They proposed experimental tests, including beta-decay angular-distribution tests like Wu's.
- Corrections:
  - The tau-theta puzzle involved the charged kaon, today `K+`, not `K0`.
  - Replace "Wu's cobalt-60 experiment, which was already underway when the paper came out" with "Wu soon carried out one of the proposed tests" unless a source confirms it was already underway.
  - The statement "weak force couples only to left-handed particles and right-handed antiparticles" is modern V-A language; keep it in `whyItMattered`, not as the direct 1956 result.
- Citation:
  - Lee, T.D. and Yang, C.N. "Question of Parity Conservation in Weak Interactions." `Physical Review` 104, 254-258 (1956), DOI `10.1103/PhysRev.104.254`.
- Anecdote:
  - `story unverified`: Chinese restaurant lunch story.

### 9. Wu's Experiment Confirms Parity Violation

- Event id: `wu-1957`
- Status: `ready` with wording correction.
- Year label: `Jan 1957`
- Discipline: `experiment`
- Core facts to keep:
  - Wu led the cobalt-60 beta-decay experiment at the National Bureau of Standards.
  - Polarized cobalt-60 nuclei emitted beta electrons asymmetrically, demonstrating parity violation.
  - Lee and Yang received the 1957 Nobel Prize; Wu was excluded.
- Corrections:
  - Avoid saying the Wu experiment alone measured "100% asymmetry"; say it showed a large asymmetry and established nonconservation of parity. Maximal parity violation is a later V-A/chirality interpretation.
  - Public/received date: paper received by `Physical Review` on January 15, 1957.
- Citation:
  - Wu, C.S., Ambler, E., Hayward, R.W., Hoppes, D.D., and Hudson, R.P. "Experimental Test of Parity Conservation in Beta Decay." `Physical Review` 105, 1413-1415 (1957), DOI `10.1103/PhysRev.105.1413`.

### 10. Neutrinos Are Left-Handed

- Event id: `goldhaber-1958`
- Status: `correct before implementation`.
- Year label: `1958` or `1957-1958`
- Discipline: `experiment`
- Core facts to keep:
  - Goldhaber, Grodzins, and Sunyar measured neutrino helicity using electron capture and gamma-ray circular polarization.
  - Result: neutrino has negative helicity, consistent with left-handed neutrinos.
- Corrections:
  - Replace the planning citation. The primary paper is `Helicity of Neutrinos`, not `Evidence for Circular Polarization of Bremsstrahlung Produced by Beta Decay`.
  - Use `Physical Review` 109, 1015-1017 (1958), DOI `10.1103/PhysRev.109.1015`.
  - If keeping the event year as 1957, clarify that the experiment was performed in 1957 and published in 1958.
- Anecdote:
  - `story unverified`: seminar-lunch/off-the-shelf equipment wording.

### 11. Electroweak Unification Proposed

- Event id: `glashow-1961`
- Status: `ready`.
- Year label: `1961`
- Discipline: `theory`
- Core facts to keep:
  - Glashow proposed an `SU(2) x U(1)` electroweak gauge structure before the Higgs mechanism and GIM mechanism completed the model.
  - The paper identified photon mixing and massive intermediate vector bosons but did not solve gauge-boson mass generation.
- Citation:
  - Glashow, S.L. "Partial-symmetries of weak interactions." `Nuclear Physics` 22, 579-588 (1961), DOI `10.1016/0029-5582(61)90469-2`.

## Era 4: Order from Chaos (1961-1973)

### 12. The Eightfold Way

- Event id: `eightfold-way-1961`
- Status: `ready` with citation correction.
- Year label: `1961`
- Discipline: `theory`
- Core facts to keep:
  - Gell-Mann and Ne'eman independently organized hadrons with flavor `SU(3)`.
  - The decuplet predicted the `Omega-` hyperon.
- Corrections:
  - Gell-Mann's report should be cited as Caltech Synchrotron Laboratory Report `CTSL-20` (1961), not primarily `SLAC-PUB-0141`.
  - The predicted Omega mass is usually given around `1672 MeV`; avoid the planning file's exact `1685 MeV` unless a direct source is added.
- Citations:
  - Gell-Mann, M. "The Eightfold Way: A Theory of Strong Interaction Symmetry." Caltech Synchrotron Laboratory Report `CTSL-20` (1961).
  - Ne'eman, Y. "Derivation of Strong Interactions from a Gauge Invariance." `Nuclear Physics` 26, 222-229 (1961).

### 13. Discovery of the Omega Minus

- Event id: `omega-minus-1964`
- Status: `ready` with mass wording correction.
- Year label: `1964`
- Discipline: `experiment`
- Core facts to keep:
  - Brookhaven observed a hyperon with strangeness `-3`, confirming the decuplet pattern.
  - One clean bubble-chamber event was historically enough when combined with kinematic constraints.
- Corrections:
  - Use measured mass `1686 +/- 12 MeV`.
  - Avoid saying the theoretical prediction was exactly `1685 MeV`; use "very close to the predicted value, around 1.67 GeV."
- Citation:
  - Barnes, V.E. et al. "Observation of a Hyperon with Strangeness Minus Three." `Physical Review Letters` 12, 204-206 (1964), DOI `10.1103/PhysRevLett.12.204`.
- Anecdote:
  - `story unverified`: "needle in a haystack" and Gell-Mann quote.

### 14. Gell-Mann and Zweig Propose Quarks

- Event id: `quarks-1964`
- Status: `ready` with wording correction.
- Year label: `1964`
- Discipline: `theory`
- Core facts to keep:
  - Gell-Mann's quarks and Zweig's aces explained `SU(3)` multiplets as composites.
  - Fractional electric charge and the `Delta++` Pauli problem delayed acceptance.
- Corrections:
  - Do not say confinement was "proven" decades later. Say it is strongly supported by QCD/lattice calculations and phenomenology, but a rigorous analytic proof remains open.
- Citations:
  - Gell-Mann, M. "A Schematic Model of Baryons and Mesons." `Physics Letters` 8, 214-215 (1964), DOI `10.1016/S0031-9163(64)92001-3`.
  - Zweig, G. "An SU(3) Model for Strong Interaction Symmetry and Its Breaking." CERN preprints `TH-401` and `TH-412` (1964).

### 15. CP Violation Discovered

- Event id: `cp-violation-1964`
- Status: `ready`.
- Year label: `1964`
- Discipline: `experiment`
- Core facts to keep:
  - CP violation was observed in neutral kaon decays through the rare two-pion decay of the long-lived neutral kaon.
  - The effect is small but nonzero, unlike maximal parity violation.
- Citation:
  - Christenson, J.H., Cronin, J.W., Fitch, V.L., and Turlay, R. "Evidence for the 2pi Decay of the K2^0 Meson." `Physical Review Letters` 13, 138-140 (1964), DOI `10.1103/PhysRevLett.13.138`.

### 16. The Higgs Mechanism

- Event id: `higgs-1964`
- Status: `ready` with nuance.
- Year label: `1964`
- Discipline: `theory`
- Core facts to keep:
  - Brout-Englert, Higgs, and Guralnik-Hagen-Kibble independently showed how gauge bosons can become massive through spontaneous symmetry breaking.
  - Higgs's PRL explicitly pointed to a physical scalar excitation.
- Corrections:
  - Be precise that Higgs had an earlier short Physics Letters paper and a separate rejected/revised submission; the final PRL added the scalar-boson implication.
- Citations:
  - Englert, F. and Brout, R. "Broken Symmetry and the Mass of Gauge Vector Mesons." `Physical Review Letters` 13, 321-323 (1964), DOI `10.1103/PhysRevLett.13.321`.
  - Higgs, P.W. "Broken Symmetries and the Masses of Gauge Bosons." `Physical Review Letters` 13, 508-509 (1964), DOI `10.1103/PhysRevLett.13.508`.
  - Guralnik, G.S., Hagen, C.R., and Kibble, T.W.B. "Global Conservation Laws and Massless Particles." `Physical Review Letters` 13, 585-587 (1964), DOI `10.1103/PhysRevLett.13.585`.

### 17. Greenberg Proposes Color

- Event id: `color-1964`
- Status: `ready` with copy edit.
- Year label: `1964-1965`
- Discipline: `theory`
- Core facts to keep:
  - Greenberg's parafermi theory and Han-Nambu's three-triplet model introduced the extra degree of freedom later called color.
  - Color solves the Pauli problem for baryons and becomes the `SU(3)_color` gauge charge of QCD.
- Corrections:
  - Fix typo `three-trriplet` -> `three-triplet`.
  - Avoid implying Han-Nambu's integer-charge model is identical to modern fractional-charge QCD; say it anticipated the threefold degree of freedom.
- Citations:
  - Greenberg, O.W. "Spin and Unitary-Spin Independence in a Parafermi Theory of Baryons and Mesons." `Physical Review Letters` 13, 598-602 (1964), DOI `10.1103/PhysRevLett.13.598`.
  - Han, M.Y. and Nambu, Y. "Three-Triplet Model with Integer Charges for Quarks." `Physical Review` 139, B1006-B1010 (1965), DOI `10.1103/PhysRev.139.B1006`.

### 18. The Electroweak Lagrangian

- Event id: `weinberg-1967`
- Status: `ready`.
- Year label: `1967`
- Discipline: `theory`
- Core facts to keep:
  - Weinberg's `A Model of Leptons` used `SU(2)_L x U(1)_Y` plus the Higgs mechanism to generate W/Z masses and leave the photon massless.
  - Salam independently presented a related model in 1968 lectures.
  - Renormalizability proof made the model central after 1971.
- Citation:
  - Weinberg, S. "A Model of Leptons." `Physical Review Letters` 19, 1264-1266 (1967), DOI `10.1103/PhysRevLett.19.1264`.

### 19. Deep Inelastic Scattering Reveals Point-Like Constituents

- Event id: `partons-1969`
- Status: `correct before implementation`.
- Year label: `1968-1969`
- Discipline: `experiment`
- Core facts to keep:
  - SLAC-MIT electron-proton scattering found Bjorken scaling, evidence for point-like constituents.
  - Feynman's partons were later identified with quarks and gluons in QCD.
- Corrections:
  - Replace "structure functions were flat" with "structure functions showed approximate scaling in Bjorken x."
  - Remove or verify the claim that raw data were recorded on photographic plates and scanned by hand; this is doubtful for the SLAC-MIT spectrometer experiment.
- Citation:
  - Bloom, E.D. et al. "High-Energy Inelastic e-p Scattering at 6 degrees and 10 degrees." `Physical Review Letters` 23, 930-934 (1969), DOI `10.1103/PhysRevLett.23.930`.

### 20. Renormalizability Proven

- Event id: `thoofft-veltman-1971`
- Status: `correct before implementation`.
- Year label: `1971-1972`
- Discipline: `theory`
- Core facts to keep:
  - 't Hooft proved renormalizability of Yang-Mills theories, including spontaneously broken massive cases; Veltman's methods/tools were central.
  - This made the Weinberg-Salam model calculable and predictive.
- Corrections:
  - Replace `'t Hooft-Fujikawa gauge` with `'t Hooft gauge` or `R_xi gauge`. Fujikawa is associated with path-integral anomalies, not this gauge choice.
  - Consider including Veltman's later/unpublished role carefully; the two cited papers are by 't Hooft.
- Citations:
  - 't Hooft, G. "Renormalization of Massless Yang-Mills Fields." `Nuclear Physics B` 33, 173-199 (1971), DOI `10.1016/0550-3213(71)90395-6`.
  - 't Hooft, G. "Renormalizable Lagrangians for Massive Yang-Mills Fields." `Nuclear Physics B` 35, 167-188 (1971), DOI `10.1016/0550-3213(71)90360-7`.

### 21. Kobayashi-Maskawa Matrix and the Third Generation

- Event id: `km-1973`
- Status: `ready` with wording correction.
- Year label: `1973`
- Discipline: `theory`
- Core facts to keep:
  - Three generations allow an irreducible complex phase in the quark mixing matrix.
  - This explained how CP violation can enter the Standard Model and implied a third quark generation.
- Corrections:
  - Replace "beyond the four then known" wording. In 1973 only `u`, `d`, and `s` were established; charm was theoretically motivated but not discovered. Say "beyond the then-established light quarks and the already hypothesized charm."
- Citation:
  - Kobayashi, M. and Maskawa, T. "CP-Violation in the Renormalizable Theory of Weak Interaction." `Progress of Theoretical Physics` 49, 652-657 (1973), DOI `10.1143/PTP.49.652`.
- Anecdote:
  - `story unverified`: Maskawa Nobel phone-call/prank detail.

### 22. Asymptotic Freedom and the Birth of QCD

- Event id: `qcd-1973`
- Status: `ready`.
- Year label: `1973`
- Discipline: `theory`
- Core facts to keep:
  - Gross-Wilczek and Politzer independently found the negative beta function for non-Abelian gauge theories.
  - QCD explains why quarks behave nearly free at short distances and remain confined at long distances.
- Corrections:
  - Keep "not too many fermions" condition; the one-loop expression in the planning file is appropriate for `SU(3)` with `n_f <= 16`.
- Citations:
  - Gross, D.J. and Wilczek, F. "Ultraviolet Behavior of Non-Abelian Gauge Theories." `Physical Review Letters` 30, 1343-1346 (1973), DOI `10.1103/PhysRevLett.30.1343`.
  - Politzer, H.D. "Reliable Perturbative Results for Strong Interactions?" `Physical Review Letters` 30, 1346-1349 (1973), DOI `10.1103/PhysRevLett.30.1346`.

### 23. Neutral Currents Discovered at CERN

- Event id: `neutral-currents-1973`
- Status: `correct before implementation`.
- Year label: `1973`
- Discipline: `experiment`
- Core facts to keep:
  - Gargamelle observed neutrino interactions without outgoing charged leptons.
  - This confirmed weak neutral currents, a major success of electroweak theory.
- Corrections:
  - Say "evidence for the neutral weak current and the electroweak gauge structure," not "direct evidence for the Z boson's existence."
  - Keep neutron-background controversy but avoid overdramatizing "risk of retraction" unless sourced.
- Citations:
  - Hasert, F.J. et al. "Search for Elastic Muon-Neutrino Electron Scattering." `Physics Letters B` 46, 121-124 (1973), DOI `10.1016/0370-2693(73)90926-3`.
  - Hasert, F.J. et al. "Observation of Neutrino-Like Interactions Without Muon or Electron in the Gargamelle Neutrino Experiment." `Physics Letters B` 46, 138-140 (1973), DOI `10.1016/0370-2693(73)90999-7`.

## Era 5: The November Revolution and Confirmation (1974-1983)

### 24. The November Revolution

- Event id: `jpsi-1974`
- Status: `ready` with minor scale wording.
- Year label: `Nov 1974`
- Discipline: `experiment`
- Core facts to keep:
  - BNL and SLAC announced the same narrow resonance at about 3.1 GeV.
  - `J/psi` is charmonium, confirming charm and supporting the GIM mechanism/QCD picture.
- Corrections:
  - The width contrast is better described as "hundreds to thousands of times narrower than typical strong resonances at comparable mass," not simply "a hundred times longer."
- Citations:
  - Aubert, J.J. et al. "Experimental Observation of a Heavy Particle J." `Physical Review Letters` 33, 1404-1406 (1974), DOI `10.1103/PhysRevLett.33.1404`.
  - Augustin, J.-E. et al. "Discovery of a Narrow Resonance in e+e- Annihilation." `Physical Review Letters` 33, 1406-1408 (1974), DOI `10.1103/PhysRevLett.33.1406`.

### 25. The Tau Lepton Discovered

- Event id: `tau-1975`
- Status: `correct before implementation`.
- Year label: `1975`
- Discipline: `experiment`
- Core facts to keep:
  - Perl's SLAC-LBL collaboration observed anomalous `e mu + missing energy` events consistent with tau-pair production.
  - The tau was the first discovered third-generation fermion.
- Corrections:
  - Tau mass is about `1.777 GeV`, roughly `17` times the muon mass, not "roughly twice the muon's mass."
  - Use "about 3477 times the electron mass" or "about 3500 times the electron mass."
- Citation:
  - Perl, M.L. et al. "Evidence for Anomalous Lepton Production in e+e- Annihilation." `Physical Review Letters` 35, 1489-1492 (1975), DOI `10.1103/PhysRevLett.35.1489`.

### 26. The Bottom Quark Discovered

- Event id: `upsilon-1977`
- Status: `ready`; anecdote unverified.
- Year label: `1977`
- Discipline: `experiment`
- Core facts to keep:
  - Fermilab E288 observed a dimuon resonance near 9.5 GeV, the upsilon/bottomonium state.
  - This established the bottom quark and strengthened the expectation of a sixth quark.
- Citation:
  - Herb, S.W. et al. "Observation of a Dimuon Resonance at 9.5 GeV in 400-GeV Proton-Nucleus Collisions." `Physical Review Letters` 39, 252-255 (1977), DOI `10.1103/PhysRevLett.39.252`.
- Anecdote:
  - `story unverified`: Lederman quote and upsilon naming explanation.

### 27. The Gluon Discovered

- Event id: `gluon-1979`
- Status: `ready` with citation note.
- Year label: `1979`
- Discipline: `experiment`
- Core facts to keep:
  - Three-jet events at PETRA provided direct evidence for hard gluon radiation.
  - TASSO, MARK J, PLUTO, and JADE all contributed.
- Corrections:
  - In implementation, say "direct evidence for the gluon" rather than an isolated single-particle direct observation.
  - Verify companion publication details before listing MARK J/PLUTO/JADE pages; the TASSO citation is sufficient if only one primary paper is shown.
- Citation:
  - Brandelik, R. et al. "Evidence for Planar Events in e+e- Annihilation at High Energies." `Physics Letters B` 86, 243-249 (1979), DOI `10.1016/0370-2693(79)90852-X`.
- Anecdote:
  - `story unverified`: John Ellis napkin story.

### 28. The W and Z Bosons Discovered

- Event id: `wz-1983`
- Status: `ready`.
- Year label: `1983`
- Discipline: `experiment`
- Core facts to keep:
  - CERN converted the SPS into a proton-antiproton collider using stochastic cooling.
  - UA1 and UA2 observed W and Z events in 1983.
  - Rubbia and van der Meer shared the 1984 Nobel Prize.
- Corrections:
  - It is fine to mention early `Z` candidate masses around 95 GeV in the UA1 paper title, but use modern reference mass `91.2 GeV` in equations/explanatory summary.
- Citations:
  - Arnison, G. et al. "Experimental Observation of Isolated Large Transverse Energy Electrons with Associated Missing Energy at sqrt(s) = 540 GeV." `Physics Letters B` 122, 103-116 (1983), DOI `10.1016/0370-2693(83)91177-2`.
  - Arnison, G. et al. "Experimental Observation of Lepton Pairs of Invariant Mass Around 95 GeV/c^2 at the CERN SppS Collider." `Physics Letters B` 126, 398-410 (1983), DOI `10.1016/0370-2693(83)90188-0`.
  - Banner, M. et al. "Observation of Single Isolated Electrons of High Transverse Momentum in Events with Missing Transverse Energy at the CERN SppS Collider." `Physics Letters B` 122, 476-485 (1983).

## Era 6: Completing the Standard Model (1995-2012)

### 29. The Top Quark Discovered

- Event id: `top-1995`
- Status: `ready`.
- Year label: `1995`
- Discipline: `experiment`
- Core facts to keep:
  - CDF and D0 jointly announced top-quark discovery at Fermilab on March 2, 1995.
  - Top mass near 173 GeV makes it exceptionally heavy and prevents hadronization before decay.
- Corrections:
  - If comparing to gold, say "comparable to the mass of a gold nucleus/atom" to avoid sounding chemically literal.
- Citations:
  - Abe, F. et al. "Observation of Top Quark Production in pbar p Collisions with the Collider Detector at Fermilab." `Physical Review Letters` 74, 2626-2631 (1995), DOI `10.1103/PhysRevLett.74.2626`.
  - Abachi, S. et al. "Observation of the Top Quark." `Physical Review Letters` 74, 2632-2637 (1995), DOI `10.1103/PhysRevLett.74.2632`.

### 30. Neutrino Oscillations Observed

- Event id: `neutrino-oscillations-1998`
- Status: `ready` with nuance.
- Year label: `1998`
- Discipline: `experiment`
- Core facts to keep:
  - Super-Kamiokande observed an atmospheric muon-neutrino zenith-angle deficit.
  - Oscillation implies nonzero neutrino masses and lepton mixing, beyond the minimal Standard Model.
- Corrections:
  - Say "one of the first decisive pieces of evidence for physics beyond the minimal Standard Model" rather than "the first laboratory evidence" if avoiding disputes with solar-neutrino history.
  - The observed channel was primarily `nu_mu` disappearance, interpreted dominantly as `nu_mu -> nu_tau`; tau appearance was not directly observed here.
- Citation:
  - Fukuda, Y. et al. "Evidence for Oscillation of Atmospheric Neutrinos." `Physical Review Letters` 81, 1562-1567 (1998), DOI `10.1103/PhysRevLett.81.1562`.

### 31. Direct Detection of the Tau Neutrino

- Event id: `tau-neutrino-2000`
- Status: `ready`.
- Year label: `2000`
- Discipline: `experiment`
- Core facts to keep:
  - DONUT announced first direct evidence for tau-neutrino interactions in July 2000.
  - The initial result was based on four candidate events; final later analyses found more, but the 2001 paper reports four.
  - The paper was published in 2001; event can be dated to the 2000 announcement.
- Citation:
  - Kodama, K. et al. "Observation of Tau Neutrino Interactions." `Physics Letters B` 504, 218-224 (2001), DOI `10.1016/S0370-2693(01)00307-0`.

### 32. The Higgs Boson Discovered

- Event id: `higgs-2012`
- Status: `correct before implementation`.
- Year label: `Jul 2012`
- Discipline: `experiment`
- Core facts to keep:
  - ATLAS and CMS announced a new boson near 125-126 GeV on July 4, 2012.
  - Both experiments independently reached discovery-level significance through combined channels.
  - Peter Higgs and Francois Englert received the 2013 Nobel Prize; Brout had died in 2011.
- Corrections:
  - Replace "LEP and Tevatron data had excluded a Higgs below 114 GeV and above 200 GeV" with a more accurate statement: LEP excluded below about 114.4 GeV; Tevatron and LHC had excluded substantial mass ranges, leaving a low-mass window around 115-130 GeV by late 2011/early 2012.
  - Do not say `gamma gamma`, `ZZ*`, and `WW*` each individually reached 5 sigma. The discovery significance came from combinations of channels in each experiment.
  - Use ASCII `Francois Englert` in code/content unless the file already standardizes accents.
- Citations:
  - ATLAS Collaboration. "Observation of a New Particle in the Search for the Standard Model Higgs Boson with the ATLAS Detector at the LHC." `Physics Letters B` 716, 1-29 (2012), DOI `10.1016/j.physletb.2012.08.020`.
  - CMS Collaboration. "Observation of a New Boson at a Mass of 125 GeV with the CMS Experiment at the LHC." `Physics Letters B` 716, 30-61 (2012), DOI `10.1016/j.physletb.2012.08.021`.

## Era 7: Coda - What's Left

### 33. The Standard Model Is Complete and Incomplete

- Event id: `open-questions`
- Status: `correct before implementation`.
- Year label: `2012-`
- Discipline: `both`
- Core facts to keep:
  - The Standard Model has found all predicted elementary particles, but it is incomplete.
  - Open problems include neutrino mass, dark matter, matter-antimatter asymmetry, strong CP, hierarchy/naturalness, family structure, and gravity.
- Corrections:
  - Replace "ordinary matter is 17% of the matter-energy content" with "ordinary baryonic matter is about 5% of total cosmic energy density." The `17%` number is approximately baryonic matter as a share of total matter, not matter-energy.
  - Replace "every coupling has been measured" with "many couplings have been measured, some very precisely; the Higgs self-coupling and several Higgs/Yukawa couplings remain weakly constrained or indirectly constrained."
  - Use current cosmology split approximately: dark energy `~68%`, dark matter `~27%`, baryonic matter `~5%`.
  - Keep `19 free parameters` only if referring to the minimal Standard Model without neutrino masses. With neutrino masses/mixing, the parameter count increases.
- Citation:
  - Synthesis event; cite PDG Review of Particle Physics or a project-level bibliography rather than one paper.

## Source Links Consulted

- APS, Goldhaber-Grodzins-Sunyar, "Helicity of Neutrinos": https://journals.aps.org/pr/abstract/10.1103/PhysRev.109.1015
- OSTI, Gell-Mann 1953 citation and DOI: https://www.osti.gov/biblio/4403282
- Oxford Academic, Nishijima "Some Remarks on the Even-odd Rule": https://academic.oup.com/ptp/article/12/1/107/1897250
- APS, Wu experiment paper: https://journals.aps.org/pr/abstract/10.1103/PhysRev.105.1413
- ScienceDirect, Glashow 1961 citation: https://www.sciencedirect.com/science/article/pii/0029558261904692
- CERN, Higgs 2012 paper submission/significance update: https://home.web.cern.ch/about/updates/2012/08/atlas-and-cms-submit-higgs-search-papers
- ATLAS, July 2012 Higgs search update: https://atlas-public.web.cern.ch/updates/press-statement/latest-results-atlas-higgs-search
- Fermilab, key discoveries/top quark/tau neutrino notes: https://www.fnal.gov/pub/science/particle-physics/key-discoveries.html
- Fermilab, DONUT tau neutrino announcement: https://news.fnal.gov/2000/07/physicists-find-first-direct-evidence-tau-neutrino-fermilab/
- CERN/IP Paris historical note on Gargamelle neutral currents: https://www.ip-paris.fr/index.php/en/news/weak-neutral-currents-cerns-first-major-discovery-50-years-ago
- Caltech/Zweig reprint containing Gell-Mann CTSL-20 reference: https://ncatlab.org/nlab/files/ZweigQuarkModel1980.pdf

