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
    email: "tushar-sonawane@outlook.com", // TODO: replace with real address
    linkedin: "https://www.linkedin.com/in/tusharsonawanes", // TODO: replace with real URL
    whatsapp: "+917620942068", // TODO: replace with real number, country code + number, no + or spaces (e.g. India: 91XXXXXXXXXX)
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
  },

  // Used to auto-calculate the "Years in Agile delivery" stat below —
  // update this one date if your start date ever needs correcting, and
  // the number on the homepage recalculates itself on every page load.
  experienceStartDate: "2019-04-22",

  stats: [
    { computed: "experienceYears", label: "Years in Agile delivery" },
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
      id: "capacity-calculator",
      title: "Dynamic Capacity Calculator",
      category: "Delivery Planning",
      tag: "Jira API · Live Data",
      summary:
        "Live-refreshing Expected vs Actual capacity charts across five teams, pulled directly from Jira, used to sanity-check SAFe PI quarterly planning before it's locked in.",
      thumb: "assets/images/projects/capacity-calculator.svg",
      href: "projects/capacity-calculator.html",
    },
    {
      id: "jira-quality-gates",
      title: "Jira Quality Gates",
      category: "Data Quality",
      tag: "Jira · JQL",
      summary:
        "A set of automated checks that surface data-quality issues across every level of the Jira hierarchy, before bad data reaches a leadership report.",
      thumb: "assets/images/projects/quality-gates.svg",
      href: "projects/jira-quality-gates.html",
    },
    {
      id: "portfolio-knowledge-hub",
      title: "Multi-Portfolio Knowledge Hub",
      category: "Enablement",
      tag: "Confluence · Jira Macros",
      summary:
        "A Portfolio → Program → Domain → Squad knowledge base covering team and product documentation, member/demographic analytics, hiring workflow, and skills evaluation — all live off Jira and Confluence.",
      thumb: "assets/images/projects/knowledge-hub.svg",
      href: "projects/portfolio-knowledge-hub.html",
    },
    {
      id: "valuestream-performance-tracker",
      title: "Value Stream (Multi-Team) Performance Tracker",
      category: "Reporting",
      tag: "MicroStrategy · SQL",
      summary:
        "A single reporting layer that rolls up velocity, spillover, and capacity utilization across five teams in one value stream, replacing five separate team-level views.",
      thumb: "assets/images/projects/valuestream-tracker.jpg",
      href: "projects/valuestream-performance-tracker.html",
    },
    {
      id: "jira-automation",
      title: "Jira Automation",
      category: "Delivery Tooling",
      tag: "Jira Automation · JQL",
      summary:
        "The skill I lean on most: a library of Jira automation rules — domain-wide governance rules plus team-specific rule sets — replacing manual board admin with consistent, rule-driven workflows.",
      thumb: "assets/images/projects/jira-automation.svg",
      href: "projects/jira-automation.html",
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

  // ---------------------------------------------------------------------
  // IMPORTANT — image paths below (certifications, awards, beyondDelivery)
  // must start with "../assets/..." NOT "assets/...".
  // Why: these three pages live inside /pages/, one folder deeper than the
  // site root, so a path without "../" resolves to a URL like
  // pages/assets/images/... which doesn't exist → broken image / 404.
  // (Project thumbnails above this comment are the opposite: those render
  // only on the root index.html, so they correctly do NOT have "../".)
  // ---------------------------------------------------------------------

  // ---------------------------------------------------------------------
  // CERTIFICATIONS PAGE — only items with active:true are shown. Fill in
  // real details and flip active to true whenever you're ready to publish
  // one. `image` should point at a photo/scan of the certificate/badge.
  // ---------------------------------------------------------------------
  certifications: {
    technical: [
      { name: "TBD — Technical Certification", issuer: "Issuing body", brief: "Add a one-line summary of what this certifies and why it matters to your delivery work.", image: "../assets/images/certs/placeholder.svg", active: false },
      { name: "TBD — Technical Certification", issuer: "Issuing body", brief: "Add a one-line summary of what this certifies and why it matters to your delivery work.", image: "../assets/images/certs/placeholder.svg", active: false },
      { name: "TBD — Technical Certification", issuer: "Issuing body", brief: "Add a one-line summary of what this certifies and why it matters to your delivery work.", image: "../assets/images/certs/placeholder.svg", active: false },
      { name: "TBD — Technical Certification", issuer: "Issuing body", brief: "Add a one-line summary of what this certifies and why it matters to your delivery work.", image: "../assets/images/certs/placeholder.svg", active: false },
      { name: "TBD — Technical Certification", issuer: "Issuing body", brief: "Add a one-line summary of what this certifies and why it matters to your delivery work.", image: "../assets/images/certs/placeholder.svg", active: false },
    ],
    projectManagement: [
    //  { name: "Professional Scrum Master I (PSM I)", issuer: "Scrum.org", brief: "Validates core Scrum theory and practice — accountabilities, events, and artifacts applied correctly in real delivery.", image: "../assets/images/badges/psm1.svg", active: true },
      { name: "SAFe Product Owner / Product Manager (POPM)", issuer: "Scaled Agile, Inc.", brief: "Product ownership and management at scale — backlog strategy, PI planning, and value-stream alignment under SAFe.", image: "../assets/images/badges/safe-popm.svg", active: true },
      { name: "TBD — PM Certification", issuer: "Issuing body", brief: "Add a one-line summary of what this certifies and why it matters to your delivery work.", image: "../assets/images/certs/placeholder.svg", active: false },
      { name: "TBD — PM Certification", issuer: "Issuing body", brief: "Add a one-line summary of what this certifies and why it matters to your delivery work.", image: "../assets/images/certs/placeholder.svg", active: false },
      { name: "TBD — PM Certification", issuer: "Issuing body", brief: "Add a one-line summary of what this certifies and why it matters to your delivery work.", image: "../assets/images/certs/placeholder.svg", active: false },
    ],
  },

  // ---------------------------------------------------------------------
  // AWARDS & ACHIEVEMENTS PAGE — same active-flag pattern as above.
  // ---------------------------------------------------------------------
  awards: [
    { title: "Delight Our Customers", org: "T-Systems India ICT Pvt. Ltd.", year: "2025", description: "Leading Agile Delivery for 5 Globally Distributed teams alongwith contributing to the Indian Portfolio.", image: "../assets/images/awards/award5.jpg", active: true },
    { title: "Delight Our Customers", org: "T-Systems India ICT Pvt. Ltd.", year: "2023", description: "Serving in a Dual Role as the Product Owner cum. Agile Master for SmartVoice Platform", image: "../assets/images/awards/award4.jpg", active: true },
    { title: "Customer Hero 2022", org: "ESDS Software Solution Pvt. Ltd.", year: "2022", description: "Handling additional project management responsibilities alongwith development tasks.", image: "../assets/images/awards/award3.jpg", active: true },
    { title: "Rising Star 2020", org: "ESDS Software Solution Pvt. Ltd.", year: "2020", description: "Single handedly led end-to-end development of eNlight Meet - A Video Conferencing SaaS offering.", image: "../assets/images/awards/award2.jpg", active: true },
    { title: "Rising Star 2019", org: "ESDS Software Solution Pvt. Ltd.", year: "2019", description: "Sustainable contributions to eNlight Cloud through detailed research papers and scalable solutions.", image: "../assets/images/awards/award1.jpg", active: true },
  ],

  // ---------------------------------------------------------------------
  // BEYOND DELIVERY PAGE — speaking/facilitation work + personal pursuits.
  // Same active-flag pattern.
  // ---------------------------------------------------------------------
  beyondDelivery: {
    speaking: [
      { title: "Building Tomorrow", context: "Expert talk at k.K.Wagh Polytechnic, Nashik", description: "Sharing Industrial Insights on the Process of Innovation Development & Technology Readiness Level (TRL).", image: "../assets/images/beyond/beyond1.jpg", active: true },
      { title: "Unlocking Insights", context: "Interviewing Claudia Nemat (Deutsche Telekom Board Member)", description: "Interviewing Claudia unlocked key insights, strategic initiatives taken by telekom in various usecases", image: "../assets/images/beyond/beyond2.jpeg", active: true },
    ],
    personal: [
      { title: "Motorcycle riding", context: "Personal pursuit", description: "My meditation", image: "../assets/images/beyond/beyond1_1.jpg", active: true },
      { title: "Swimming", context: "Personal pursuit", description: "Add a short line about swimming — how often, competitively or for fitness, etc.", image: "../assets/images/beyond/placeholder.svg", active: false },
    ],
  },

  // NOTE: this array is documentation only — actual nav links are hardcoded
  // per-page (with correct relative paths) in each HTML file's <header>.
  nav: [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Impact", href: "#impact" },
    { label: "Certifications", href: "pages/certifications.html" },
    { label: "Awards", href: "pages/awards.html" },
    { label: "Beyond Delivery", href: "pages/beyond-delivery.html" },
  ],
};
