# Tushar Sonawane — Portfolio Site

Plain HTML/CSS/JS, no framework, no build step. Deploys to GitLab Pages via
`.gitlab-ci.yml`, which just copies the site into a `public/` folder.

**Why no static site generator:** the site is five pages and one shared
design system — a generator (Hugo/Eleventy) would add a build step and a
templating layer for very little payoff at this size. If the site grows
past ~15 pages, revisit that tradeoff.

## Folder structure

```
index.html                     ← home page (data-driven sections)
projects/
  _template.html                ← duplicate this to add a new case study
  data-lineage-tracker.html
  ado-migration.html
  agile-operating-model.html
  confluence-table-transformer.html
  executive-dashboards.html
assets/
  css/style.css                 ← design system + all styles
  js/site-data.js               ← ALL editable content lives here
  js/main.js                    ← theme toggle, rendering, scroll reveal, carousel
  images/                       ← headshot, project thumbnails, OG image
  resume/                       ← put your resume PDF here
.gitlab-ci.yml                  ← GitLab Pages deploy config
```

## Editing content

Almost everything on the **home page** (stats, project cards, skills,
impact metrics, testimonials, about text, contact links) is defined in
**`assets/js/site-data.js`**. Edit that file only — you don't need to
touch HTML or CSS to:

- Add/remove a stat, skill tag, or testimonial
- Update your bio, certifications, or career trajectory
- Change the resume file path, email, or LinkedIn URL

### Adding a new project card + case study page

1. Add an entry to the `projects` array in `assets/js/site-data.js`
   (this makes the card appear on the home page).
2. Copy `projects/_template.html` to `projects/your-project-slug.html`
   and fill in the bracketed placeholders.
3. Point the `href` in your new data-file entry at that file.

### Images

- Drop real project screenshots into `assets/images/projects/` (16:10
  ratio works best) and replace the SVG placeholder paths in
  `site-data.js`.
- Recommended thumbnail size: 1200×750px, compressed (WebP or optimized
  JPG), under ~150KB each so the site stays fast.
- Replace `assets/images/og-image.jpg` with a dedicated 1200×630px image
  for link previews (currently reuses the headshot).
- Add your resume PDF at `assets/resume/Tushar_Sonawane_Resume.pdf`
  (or update the path in `site-data.js` → `person.resumeFile`).

### Testimonials

The three testimonial cards are placeholders. Replace `quote`, `name`,
`role`, and `company` in `site-data.js` once you have sign-off from real
colleagues, then delete the "placeholder" note in `index.html` (search
for `placeholder-note`).

## Deploying to GitLab Pages

```bash
# 1. Create a new blank project on gitlab.com (no README/license)

# 2. From this folder:
cd site
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://gitlab.com/<your-username>/<your-project>.git
git push -u origin main

# 3. GitLab Pages deploys automatically via .gitlab-ci.yml on push to main.
#    Check progress: your project → Build → Pipelines
#    Once it succeeds: your project → Deploy → Pages for the live URL
#    (typically https://<your-username>.gitlab.io/<your-project>)

# 4. Optional: Settings → Pages → add a custom domain
```

Every subsequent `git push` to `main` redeploys automatically.
