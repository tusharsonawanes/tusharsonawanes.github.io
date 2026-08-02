/**
 * SITE DATA — edit this file to change content anywhere on the site.
 * Do not touch layout/CSS files to update text, stats, projects, or quotes.
 *
 * To add a new project card: add an object to PROJECTS below, then duplicate
 * /projects/_template.html to build its case-study page (see README.md).
 */

const SITE_DATA = {
  person: {
    name: "Tushar Sanjiv Sonawane",
    role: "Senior Scrum Master · Enterprise Agile Delivery",
    location: "Nashik–Pune, India (open to Mumbai)",
    email: "tushar.sonawane@example.com", // TODO: replace with real address
    linkedin: "https://www.linkedin.com/in/tushar-sonawane", // TODO: replace with real URL
    resumeFile: "assets/resume/Tushar_Sonawane_Resume.pdf", // TODO: add real PDF here
  },

  breadcrumb: ["Tribe", "Domain", "Value Stream", "Team"],

  hero: {
    eyebrow: "Digital Touchpoint Analytics · Deutsche Telekom Data Tribe",
    heading: "I turn scaled agile theory into shipped, measurable delivery.",
    sub:
      "Senior Scrum Master leading four teams inside a Tribe → Domain → Value Stream → Team model at T-Systems ICT, delivering Mein Magenta App and MagentaTV. PSM I & SAFe POPM certified.",
    ctaPrimary: { label: "View my work", href: "#work" },
    ctaSecondary: { label: "Download resume", href: "assets/resume/Tushar_Sonawane_Resume.pdf" },
    photoCaption: "T-Systems ICT India · Deutsche Telekom Data Tribe",
    // Badges shown directly under the hero photo. Swap `icon` for your
    // official digital badge image (downloaded from your certification
    // account) any time — just drop the file into assets/images/badges/
    // and update the path here. No other code needs to change.
    certBadges: [
      { name: "PSM I", org: "Scrum.org", icon: "assets/images/badges/psm1.svg" },
      { name: "SAFe POPM", org: "Scaled Agile", icon: "assets/images/badges/safe-popm.svg" },
    ],
  },

  stats: [
    { value: "7.3+", label: "Years in Agile delivery" },
    { value: "4", label: "Teams led concurrently" },
    { value: "2", label: "Certifications — PSM I, SAFe POPM" },
    { value: "1", label: "Enterprise value stream owned end-to-end" },
  ],

  projects: [
    {
      id: "data-lineage-tracker",
      title: "Data Lineage Tracker",
      category: "Data & Analytics",
      tag: "MicroStrategy · SQL",
      summary:
        "An interactive tool mapping how metrics flow from source tables through transformations into executive dashboards, cutting time spent tracing broken reports.",
      thumb: "assets/images/projects/data-lineage.svg",
      href: "projects/data-lineage-tracker.html",
    },
    {
      id: "ado-migration",
      title: "Jira → Azure DevOps Migration",
      category: "Delivery Architecture",
      tag: "Jira · Azure DevOps",
      summary:
        "Architected the work-item hierarchy, board structure, and migration runbook to move four teams off Jira onto Azure DevOps with zero delivery downtime.",
      thumb: "assets/images/projects/ado-migration.svg",
      href: "projects/ado-migration.html",
    },
    {
      id: "agile-operating-model",
      title: "Enterprise Agile Operating Model",
      category: "Agile Transformation",
      tag: "SAFe · Spotify Model",
      summary:
        "Designed a Tribe → Domain → Value Stream → Team operating model, tailored from Spotify-style principles, to align four squads to one product outcome.",
      thumb: "assets/images/projects/operating-model.svg",
      href: "projects/agile-operating-model.html",
    },
    {
      id: "confluence-table-transformer",
      title: "Confluence Table Transformer",
      category: "Tooling & Automation",
      tag: "Confluence · Power Automate",
      summary:
        "A capacity-reporting utility that reshapes raw Confluence tables into sprint-ready capacity views automatically, removing a manual weekly task.",
      thumb: "assets/images/projects/table-transformer.svg",
      href: "projects/confluence-table-transformer.html",
    },
    {
      id: "executive-dashboards",
      title: "Executive Delivery Dashboards",
      category: "Reporting",
      tag: "MicroStrategy · Power Automate",
      summary:
        "A single-pane view of velocity, predictability, and flow metrics across four teams, built for leadership review without manual slide updates.",
      thumb: "assets/images/projects/dashboards.svg",
      href: "projects/executive-dashboards.html",
    },
  ],

  skills: [
    "Jira", "Confluence", "Azure DevOps", "GitLab",
    "MicroStrategy", "SQL", "Power Automate", "SAFe", "Scrum",
  ],

  impact: [
    {
      value: "4",
      label: "Teams under active delivery ownership",
      detail: "Concurrent Scrum Master responsibility across the Digital Touchpoint Analytics value stream.",
    },
    {
      value: "0",
      label: "Delivery-halting incidents during the ADO migration",
      detail: "Full board and work-item migration completed without a missed sprint.",
    },
    {
      value: "Weekly →\nAutomated",
      label: "Capacity reporting cycle time",
      detail: "Manual Confluence table rework replaced by a repeatable transformer.",
    },
  ],

  testimonials: [
    {
      quote:
        "Tushar brings structure to ambiguity. He reads a delivery problem quickly and knows exactly which lever — process, tooling, or people — will move it.",
      name: "Placeholder Name",
      role: "Placeholder Role",
      company: "Deutsche Telekom",
    },
    {
      quote:
        "One of the few Scrum Masters who can also speak the language of data and tooling. That combination changed how our value stream reports upward.",
      name: "Placeholder Name",
      role: "Placeholder Role",
      company: "T-Systems ICT India",
    },
    {
      quote:
        "Calm under pressure, precise in facilitation, and honest about risk. Exactly what a four-team value stream needs at scale.",
      name: "Placeholder Name",
      role: "Placeholder Role",
      company: "Deutsche Telekom",
    },
  ],

  about: {
    bio:
      "I lead Agile delivery for four teams inside Deutsche Telekom's Data Tribe, within the Digital Touchpoint Analytics value stream powering the Mein Magenta App and MagentaTV. My work sits at the intersection of Scrum facilitation, delivery tooling, and reporting — I'm as comfortable running a retro as I am rebuilding a Jira-to-ADO migration plan or a MicroStrategy dashboard.",
    bioSecondary:
      "Before specializing as a Senior Scrum Master, I spent years across Agile delivery roles, building toward the structural, systems-level view I bring to teams today: how a Tribe's operating model, its tooling, and its reporting all have to align for delivery to actually scale.",
    certifications: [
      { name: "Professional Scrum Master I (PSM I)", org: "Scrum.org" },
      { name: "SAFe Product Owner / Product Manager (POPM)", org: "Scaled Agile, Inc." },
    ],
    trajectory: [
      { period: "Current", title: "Senior Scrum Master", org: "T-Systems ICT India Pvt. Ltd. · Deutsche Telekom Data Tribe" },
      { period: "~4 yrs", title: "Senior Scrum Master track", org: "Enterprise Agile delivery, Digital Touchpoint Analytics" },
      { period: "~7.3 yrs total", title: "Agile delivery experience", org: "Progressive delivery & facilitation roles" },
    ],
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Impact", href: "#impact" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
