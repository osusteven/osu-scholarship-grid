# Ohio State 2027 Scholarship Grid

Interactive projection of Ohio State's 2027 scholarship roster, laid out like the Eleven Warriors scholarship grid. Click a player to mark him as leaving (NFL draft or portal); position, class and overall totals update.

No build step or dependencies. Plain HTML, CSS and JavaScript.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page layout, header, legend, notes |
| `styles.css` | Styling (light and dark mode) |
| `data.js` | Roster data. Edit this to update players |
| `app.js` | Builds the table and handles clicks and totals |

## Editing the roster (`data.js`)

`G` holds one row per position. Each row has five lists, in order:
Fifth-Years, Seniors, Juniors, Sophomores, Freshmen.

Name prefixes:

- `*Name` = 2027 commit (green)
- `!Name` = leaving by default (red, crossed off, not counted)
- no prefix = returning

`DONE` lists players out of eligibility after 2026. They show crossed off in the first column and are never counted.

## Run locally

Open `index.html` in a browser.

## Publish on GitHub Pages

1. Create a new repo and push these files to the root of the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**, and save.
4. The site goes live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

```bash
git init
git add .
git commit -m "Ohio State 2027 scholarship grid"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
