# Tong Wu — restored 3D portfolio

Restored from C:/Projects/portfolio/threejs-portfolio on October 20, 2026. The original source directory is unchanged.

## Run locally

Use Node.js 20 or later:

    npm ci
    npm run dev -- --host 127.0.0.1 --port 4179

## Build

    npm run build
    npm run preview -- --host 127.0.0.1 --port 4179

Source is in src/, and original models, textures, audio and images are in public/. Keep these as ordinary tracked files when restoring GitHub; do not commit node_modules or a nested repository/gitlink.

Recovery fixes: restored complete source and local assets; made project cards single-column on small screens; corrected the email-copy target; replaced the unconfigured tutorial EmailJS integration with an explicit email-draft action using the address displayed in the original local page; fixed the Contact anchor; removed an expired internship sentence and corrected the globe label.

Existing project descriptions and external links were retained and should be reviewed before public publication. Contact opens a local email client and does not send messages from a server. Google fonts and globe imagery still require network access.

## Engineering fixes

The hero no longer registers OrbitControls: wheel, pinch and drag cannot zoom the camera or trap page scrolling. It uses a fixed camera and renders only while the hero is visible, with a pixel-ratio cap and reduced-motion support. A local static poster remains visible during loading and when WebGL is unavailable; scene errors expose a retry action. Audio loads only after an explicit click.

The optimized homepage model is public/models/hero-optimized.glb. Reproduce it with `node scripts/optimize-model.mjs` after npm ci. Original model retained for provenance. The About/globe code loads when approaching its section. Project links point to known repositories, tutorial testimonials and unrelated demo descriptions were removed, and the old ongoing job date is labeled as historical source information. Work-history claims remain user-supplied historical content, not independently verified employment records.

The GitHub Actions build runs npm ci and npm run build. Commit source, lockfile and public assets as normal files; exclude dependencies and generated dist. The site remains a local preview until deployment is requested.
