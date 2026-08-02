# Tushar Sonawane — Portfolio Site

Plain HTML/CSS/JS, no framework, no build step. Deploys to GitLab Pages via
`.gitlab-ci.yml`, which just copies the site into a `public/` folder.

**Why no static site generator:** the site is a handful of pages and one shared
design system — a generator (Hugo/Eleventy) would add a build step and a
templating layer for very little payoff at this size. If the site grows
past ~15 pages, revisit that tradeoff.

## Folder structure

```
index.html                       ← home page (data-driven sections)
projects/
  _template.html                  ← duplicate this to add a new case study
  data-lineage-tracker.html
  capacity-calculator.html
  jira-quality-gates.html
  portfolio-knowledge-hub.html
  valuestream-performance-tracker.html
  jira-automation.html
pages/
  certifications.html             ← Technical + Project Management certs
  awards.html                     ← Awards & Achievements
  beyond-delivery.html            ← Speaking/facilitation + personal pursuits
assets/
  css/style.css                   ← design system + all styles
  js/site-data.js                 ← ALL editable content lives here
  js/main.js                      ← theme toggle, rendering, scroll reveal, carousel
  images/                         ← headshot, project thumbnails, badges, OG image
  resume/                         ← put your resume PDF here
.gitlab-ci.yml                    ← GitLab Pages deploy config
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
- Replace `assets/images/headshot.jpg` with your real photo (any size —
  it gets cropped automatically). The crop is controlled in
  `assets/css/style.css` under `.photo-frame` (`aspect-ratio`) and
  `.photo-frame img` (`object-position`, e.g. `center 18%` biases the
  crop toward the top of the frame, away from empty floor/ceiling
  space). Adjust those two values to reframe any photo you swap in.

### Contact icons (under the hero photo)

The row under the photo (LinkedIn / Email / WhatsApp) is driven entirely
by `person` in `site-data.js`:

- `person.linkedin` — your full LinkedIn profile URL
- `person.email` — opens the visitor's default mail app addressed to you
- `person.whatsapp` — country code + number, digits only, no `+` or
  spaces (e.g. `919876543210` for an Indian number `+91 98765 43210`)

Update those three values and all three icons work immediately — no
other file needs to change. (Certification badges are parked for now;
ask if you want them added back later.)

### Hidden homepage sections

Testimonials, About, and Contact are currently removed from `index.html`
(and from the nav) at your request. The data for them (`testimonials`,
`about`) is still sitting in `site-data.js` and the render logic for them
is still in `main.js` — nothing was deleted, just unplugged — so you can
bring any of them back later by re-adding the corresponding `<section>`
block (see git history / ask for it again) without touching JS.

### Certifications / Awards / Beyond Delivery — the "active" pattern

All three new pages (`pages/certifications.html`, `pages/awards.html`,
`pages/beyond-delivery.html`) work the same way: every entry in
`site-data.js` has an `active: true/false` flag, and only `active: true`
entries render on the live page. This lets you pre-fill placeholder
slots (e.g. 5 empty "Technical Certification" rows) without any of them
showing up until you've actually filled in the real name/issuer/brief
and flipped `active` to `true`. To publish one: fill in its fields,
set `active: true`, and drop its image into the matching folder
(`assets/images/certs/`, `assets/images/awards/`, or
`assets/images/beyond/`). If every entry in a group is inactive, the
page shows a plain "coming soon" message instead of an empty gap.

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
