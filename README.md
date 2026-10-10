# Wang Qibo — Personal Technical Portfolio

A small, static portfolio for GitHub Pages. It uses plain HTML, CSS, and JavaScript; there is no build step or backend.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Update the content

- Edit `index.html` to update the introduction, project descriptions, focus areas, and contact details.
- To add a project, duplicate a `.project-card` block in `index.html`, set its `data-project` key, and add the same key and public repository URL to `projectLinks` in `assets/main.js`.
- Keep a project URL empty in `assets/main.js` to hide its repository link until it is ready to share.
- Update colors, spacing, typography, and mobile breakpoints in `assets/styles.css`.
- Replace the GitHub profile URL in `index.html` if your account changes. Add an email or other contact method only when you want it public.

## Publish

This repository already serves its root directory through GitHub Pages. Push updates to the `main` branch to publish them automatically. The site is available at <https://godjupit.github.io>.

## Project structure

```text
.
├── assets/
│   ├── favicon.svg
│   ├── main.js
│   └── styles.css
├── index.html
└── README.md
```
