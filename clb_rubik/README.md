# Rubik 3D

Standalone GitHub Pages tool at `/clb_rubik/`. It intentionally adds no link to the club or home page.

## Scope
- Exact integer sticker-state engine for 2×2–5×5, Three.js animation with SVG fallback when WebGL is unavailable.
- 50 prepared cases synchronized with the source teaching material; 363 checked frames.
- One continuous prepared 4×4 walkthrough: 15 stages, 125 moves and 126 states. It starts with 16/24 center stickers correctly placed, but no completed centers or paired edges. This is not a generic 4×4 solver.
- 3×3 two-phase solver using cube.js in a local worker. Every solution is independently replayed before display.
- Keyboard/buttons, orbit/pinch camera, timeline/groups, local progress and target comparison.

## Rebuild UI
`cd source && npm install && npm run build`. Dependencies are pinned. The readable engine and reduction predicates are in the parent directory. No build is required for GitHub Pages.

## Data
`cases.json` and `walkthrough4.json` store immutable sticker colors/home identities and compact position/normal/tangent arrays. Numeric ID is the fixed array index. Apply moves from the exact supplied initial state; do not substitute a generic inverse-algorithm case. Frame strings use URFDLB order. Source SHA256 values preserve provenance.

## Verified
26 automated tests: moves/inverses, all canonical and compact frames, real solver replay, stage predicates, selected-piece locations, source hashes. Browser interaction checks covered play/pause, step/group/seek, prepared state loading, checkpoint comparison, final solve, and a 375px content viewport.

## Limits
Cloud-browser WebGL was unavailable, so observed rendering used Three.js SVG fallback. Physical touchscreen/TV and GPU WebGL still require device testing. No arbitrary sticker-color import, camera recognition, general 4×4 solver, WCA random-state scrambler, or complete support for non-cubic puzzles. A first load needs network access; this is not a guaranteed offline PWA.

MIT licenses for Three.js and cube.js are retained in vendor/.
