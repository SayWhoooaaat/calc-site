# framstad.org

Erlend Framstad's personal site: a few things built for fun over the years, and a short about page.
Plain HTML, one stylesheet (`style.css`) and one small script (`site.js`, for the light/dark
toggle). No build step, no frameworks.

## Preview locally

Double-click `index.html` in the project folder. It opens in your browser and all links and
images work from the folder. The only thing that doesn't work this way is the embedded
YouTube player (YouTube blocks it on local files), so the play button opens YouTube instead.

For a preview that behaves exactly like the live site, start a small web server in this folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 and press Ctrl+C in the terminal to stop it.
VS Code's "Live Server" extension also works.

## Publishing

The site is hosted on GitHub Pages from the `main` branch of
`SayWhoooaaat/calc-site`, with the custom domain in `CNAME`.
**Anything pushed to `main` goes live on framstad.org within a minute or two.**
Work on another branch and merge to `main` when you're happy with it.

## Adding a project

1. Copy one of the folders in `projects/` and edit its `index.html`.
2. Put images in `img/` as `.webp`, around 1400 px on the long side.
3. Add an entry at the top of the list in the root `index.html` (newest first), and update the
   newer/older links at the bottom of the neighbouring project pages.

Links and image paths are relative (`../../img/...`), so pages work both on the live site
and when opened straight from the folder.
