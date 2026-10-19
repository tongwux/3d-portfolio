# 3D Portfolio — Setup in Progress

An early repository for a Three.js portfolio experiment.

**Current status:** incomplete source export. The published snapshot is not yet a reproducible portfolio application.

## Present in the repository

- Root `package.json` declaring Three.js `^0.173.0`.
- Package lockfile and tracked dependency files in `node_modules/`.
- A `threejs-portfolio` gitlink referencing commit `c1eff6316a6f1becc11ec98662d27c61879552b5`.

## Missing or unverified

- The gitlink does not include application source in a normal clone.
- No `.gitmodules` file provides a URL for restoring it as a submodule.
- The root package has no development, build, or test scripts.
- Scene interaction, animation, responsive behavior, and a live demo cannot be verified from this snapshot.
- No specific mock interaction can be documented without the application source.

## Inspect locally

```sh
git clone https://github.com/tongwux/3d-portfolio.git
cd 3d-portfolio
git ls-files --stage threejs-portfolio
```

This downloads the published snapshot only. Installing Three.js does not restore the missing application, and `npm run dev` is not defined. No working application launch command is currently documented.

## Planned repair — not implemented

1. Restore the original application source as ordinary tracked files, or configure an accessible submodule.
2. Remove installed dependencies from version control and add ignore rules.
3. Define development/build scripts and document a tested runtime.
4. Add an actual screenshot, live preview, and implementation notes once the application is reproducible.
5. Add build validation before presenting it as a finished portfolio project.

## Scope

The current files show project setup rather than a completed 3D experience. Third-party Three.js files retain their own license terms; this README grants no additional license.
