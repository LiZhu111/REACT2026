# Ling Zhu Astronomy Website

Official website for the Galaxy Structure and Dynamics Group led by Dr. Ling Zhu at Shanghai Astronomical Observatory, Chinese Academy of Sciences.

The site is built with React, Vite, Tailwind CSS, and Decap CMS. It supports English and Chinese content, responsive layouts, animated sections, research highlights, member profiles, recruitment information, and editable site content through an admin page.

## Live Sites

- GitHub repository: https://github.com/zhu0402/LingZhu_Astronomy
- GitHub Pages: https://zhu0402.github.io/LingZhu_Astronomy/
- Netlify: configure a Netlify site from this repository for CMS editing and automatic deployment.

## Features

- Bilingual English and Chinese site content
- Editable content through Decap CMS
- Research items with image previews and optional image captions
- Member profiles with photos, bios, research directions, and CV links
- Opportunities section with email contact
- Editable footer brand text, address, links, and copyright
- Responsive desktop, tablet, and mobile layouts
- GitHub Pages deployment support
- Netlify deployment support with Git Gateway CMS

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Decap CMS
- Netlify Identity and Git Gateway
- GitHub Pages

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- Git

Vite 7 requires a recent Node.js version. Upgrade Node if the local dev server or build command fails because of an old Node version.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/zhu0402/LingZhu_Astronomy.git
cd LingZhu_Astronomy
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

The local site usually runs at:

```text
http://127.0.0.1:5173/REACT2026/
```

## Local CMS Editing

Run the Vite dev server in one terminal:

```bash
npm run dev
```

Run the Decap CMS local backend in a second terminal:

```bash
npx decap-server
```

Open the local admin page:

```text
http://127.0.0.1:5173/REACT2026/admin/
```

Local CMS edits update JSON files in the project. They do not publish the live site until the changes are committed and pushed.

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Builds the production site into `dist/`.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

```bash
npm run deploy
```

Deploys the current `dist/` output to GitHub Pages with `gh-pages`.

## Project Structure

```text
public/
  admin/
    config.yml
    index.html
  assets/
    members/
    research/

src/
  components/
    About.jsx
    Footer.jsx
    Hero.jsx
    Member.jsx
    MemberCard.jsx
    Navbar.jsx
    Opportunities.jsx
    Research.jsx
    ResearchItem.jsx
    ScrollReveal.jsx
  content/
    editable.en.json
    editable.zh.json
    members.en.json
    members.zh.json
    research.en.json
    research.zh.json
    site.en.json
    site.zh.json
  hooks/
    useTranslation.js
  App.jsx
  main.jsx
  index.css
```

## Content Management

Editable content is stored in `src/content/`.

- `editable.en.json` and `editable.zh.json`: hero, about, opportunities, and footer text
- `members.en.json` and `members.zh.json`: member profiles
- `research.en.json` and `research.zh.json`: research items, images, links, and image captions
- `site.en.json` and `site.zh.json`: base content and default configuration

The CMS configuration is stored in:

```text
public/admin/config.yml
```

## Netlify CMS Setup

For a new Netlify account or site:

1. Import this GitHub repository:
   ```text
   zhu0402/LingZhu_Astronomy
   ```
2. Set the build settings:
   ```text
   Branch: main
   Build command: npm run build
   Publish directory: dist
   ```
3. Enable Netlify Identity.
4. Enable Git Gateway.
5. Invite editor accounts in Netlify Identity.
6. Open the admin page:
   ```text
   https://your-netlify-domain.netlify.app/admin/
   ```

When editors save changes in `/admin/`, Decap CMS commits the changes to GitHub. Netlify then rebuilds the live site from the latest `main` branch.

## GitHub Pages Deployment

The project supports GitHub Pages under:

```text
https://zhu0402.github.io/LingZhu_Astronomy/
```

The Vite base path is configured for GitHub Pages when `GITHUB_PAGES=true`.

Build for GitHub Pages:

```bash
GITHUB_PAGES=true npm run build
```

On Windows PowerShell:

```powershell
$env:GITHUB_PAGES='true'
npm run build
Remove-Item Env:\GITHUB_PAGES
```

Publish the build:

```bash
npx gh-pages -d dist -r https://github.com/zhu0402/LingZhu_Astronomy.git -b gh-pages
```

## Notes

- GitHub Pages can host the static site.
- The `/admin/` editing workflow requires Netlify Identity and Git Gateway.
- Netlify builds use root-relative paths automatically because `NETLIFY` is available in the build environment.
- GitHub Pages builds use `/LingZhu_Astronomy/` as the base path.

## Contact

- Email: lzhu@shao.ac.cn
- Institution: Shanghai Astronomical Observatory, Chinese Academy of Sciences
- Address: 80 Nandan Road, Xuhui District, Shanghai 200030, China

## License

Copyright 2026 Galaxy Structure and Dynamics Group. All rights reserved.
