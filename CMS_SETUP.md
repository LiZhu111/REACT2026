# Content Management Setup

This project now includes a Decap CMS admin entry for editing website content through a browser.

## Admin URL

After deployment, the admin page will be available at:

```text
https://lizhu111.github.io/REACT2026/admin/
```

## Editable Content

The CMS edits JSON files in `src/content/`.

- `editable.en.json` and `editable.zh.json`: homepage, about, opportunities, and footer text
- `members.en.json` and `members.zh.json`: group member profiles
- `research.en.json` and `research.zh.json`: research items

The full design configuration remains in:

- `site.en.json`
- `site.zh.json`

This keeps visual styling separate from customer-editable copy.

## GitHub Authentication

The admin configuration uses the GitHub backend:

```yaml
backend:
  name: github
  repo: LiZhu111/REACT2026
  branch: main
```

For production use on GitHub Pages, Decap CMS needs a GitHub OAuth authentication flow. The customer must also have permission to commit to this repository, or the OAuth flow must commit through an approved integration.

## Local Editing

The config includes:

```yaml
local_backend: true
```

This allows local CMS testing when running a compatible Decap local backend proxy.

## Deployment Flow

When content is saved in the CMS:

1. Decap CMS commits JSON changes to GitHub.
2. GitHub Actions runs the build.
3. The generated `dist/` output is deployed to the `gh-pages` branch.
4. GitHub Pages serves the updated static site.

The workflow is defined in:

```text
.github/workflows/deploy.yml
```

Manual deployment is still available if needed:

```bash
npm run build
npm run deploy
```

## GitHub Pages Settings

In the repository settings, make sure GitHub Pages is configured to publish from:

```text
Branch: gh-pages
Folder: / (root)
```
