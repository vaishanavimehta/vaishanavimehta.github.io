# vaishnavimehta.github.io

Personal website for Vaishnavi Mehta — AI researcher and behavioural scientist.

## Stack

Plain HTML, CSS, and vanilla JS. No build step, no framework, no dependencies beyond two Google Fonts. Deployable directly to GitHub Pages.

## Structure

```
index.html          main page
css/style.css       all styles
js/main.js          cursor, magnetic effect, scroll reveal
```

## Deploying to GitHub Pages

1. Create a repo named `vaishnavimehta.github.io` (or any name, then enable Pages in settings).
2. Push this folder's contents to the `main` branch.
3. Go to **Settings → Pages → Source → Deploy from branch → main / root**.
4. Site will be live at `https://vaishnavimehta.github.io` within a minute.

## Customising

- **Bio and project text** — edit directly in `index.html`. All placeholder content is clearly marked.
- **Accent colour** — change `--accent` in `css/style.css` (currently a warm amber `#b8763a`).
- **Photo** — replace the `.portrait-placeholder` div with an `<img>` tag pointing to your photo file.
- **Contact links** — update the `href` attributes in the contact section and the display text.
- **Pills / skills** — add or remove `<span class="pill">` elements in the about section.
- **Projects** — copy an existing `.project-item` block and edit the title, description, tag, and year.

## Fonts

- **Instrument Serif** (display / headings) — loaded from Google Fonts
- **DM Mono** (body / labels) — loaded from Google Fonts

Both load via `<link>` in the `<head>`. No self-hosting needed unless you want offline support.
