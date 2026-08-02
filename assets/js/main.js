(function () {
  "use strict";

  /* ---------- theme toggle ---------- */
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initial = stored || (prefersLight ? "light" : "dark");
  root.setAttribute("data-theme", initial);

  function setToggleIcon(btn, theme) {
    if (!btn) return;
    btn.innerHTML =
      theme === "dark"
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>';
  }

  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector("[data-theme-toggle]");
    setToggleIcon(toggleBtn, initial);
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        setToggleIcon(toggleBtn, next);
      });
    }

    /* ---------- mobile nav ---------- */
    const navToggle = document.querySelector("[data-nav-toggle]");
    const navLinks = document.querySelector("[data-nav-links]");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("is-open");
      });
      navLinks.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => navLinks.classList.remove("is-open"))
      );
    }

    renderData();
    initScrollReveal();
    initTestimonials();
  });

  /* ---------- data-driven rendering ---------- */
  function renderData() {
    if (typeof SITE_DATA === "undefined") return;
    const d = SITE_DATA;

    // Breadcrumb
    document.querySelectorAll("[data-breadcrumb]").forEach((el) => {
      el.innerHTML = d.breadcrumb
        .map((n) => `<span class="node">${n}</span>`)
        .join('<span class="sep">/</span>');
    });

    // Hero
    const heroEyebrow = document.querySelector("[data-hero-eyebrow]");
    if (heroEyebrow) heroEyebrow.textContent = d.hero.eyebrow;
    const heroHeading = document.querySelector("[data-hero-heading]");
    if (heroHeading) heroHeading.textContent = d.hero.heading;
    const heroSub = document.querySelector("[data-hero-sub]");
    if (heroSub) heroSub.textContent = d.hero.sub;
    const ctaPrimary = document.querySelector("[data-cta-primary]");
    if (ctaPrimary) { ctaPrimary.textContent = d.hero.ctaPrimary.label; ctaPrimary.href = d.hero.ctaPrimary.href; }
    const ctaSecondary = document.querySelector("[data-cta-secondary]");
    if (ctaSecondary) { ctaSecondary.textContent = d.hero.ctaSecondary.label; ctaSecondary.href = d.hero.ctaSecondary.href; }
    const photoCaption = document.querySelector("[data-photo-caption]");
    if (photoCaption) photoCaption.textContent = d.hero.photoCaption;
    const certBadgeRow = document.querySelector("[data-hero-cert-badges]");
    if (certBadgeRow && d.hero.certBadges) {
      certBadgeRow.innerHTML = d.hero.certBadges
        .map(
          (b) => `
        <div class="cert-badge">
          <img src="${b.icon}" alt="${b.name} certification badge" loading="lazy">
          <div class="cert-badge-text"><span class="cert-badge-name">${b.name}</span><span class="cert-badge-org">${b.org}</span></div>
        </div>`
        )
        .join("");
    }

    // Stats
    const statRow = document.querySelector("[data-stat-row]");
    if (statRow) {
      statRow.innerHTML = d.stats
        .map(
          (s) => `<div class="stat"><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div></div>`
        )
        .join("");
    }

    // Projects
    const grid = document.querySelector("[data-project-grid]");
    if (grid) {
      grid.innerHTML = d.projects
        .map(
          (p, i) => `
        <a class="project-card reveal" href="${p.href}" style="transition-delay:${i * 60}ms">
          <div class="project-thumb"><img src="${p.thumb}" alt="${p.title} thumbnail" loading="lazy"></div>
          <div class="project-body">
            <span class="project-category">${p.category}</span>
            <h3>${p.title}</h3>
            <p>${p.summary}</p>
            <div class="project-tag">${p.tag}</div>
            <div class="project-link-row"><span class="btn-ghost">Read case study →</span></div>
          </div>
        </a>`
        )
        .join("");
    }

    // Skills
    const skillStrip = document.querySelector("[data-skill-strip]");
    if (skillStrip) {
      skillStrip.innerHTML = d.skills.map((s) => `<span class="skill-tag">${s}</span>`).join("");
    }

    // Impact
    const impactGrid = document.querySelector("[data-impact-grid]");
    if (impactGrid) {
      impactGrid.innerHTML = d.impact
        .map(
          (i) => `
        <div class="impact-card reveal">
          <div class="impact-value">${i.value}</div>
          <div class="impact-label">${i.label}</div>
          <div class="impact-detail">${i.detail}</div>
        </div>`
        )
        .join("");
    }

    // Testimonials
    const slides = document.querySelector("[data-testimonial-slides]");
    if (slides) {
      slides.innerHTML = d.testimonials
        .map(
          (t) => `
        <div class="testimonial-slide">
          <blockquote>&ldquo;${t.quote}&rdquo;</blockquote>
          <div class="testimonial-meta"><strong>${t.name}</strong> — ${t.role}, ${t.company}</div>
        </div>`
        )
        .join("");
    }

    // About
    const bio1 = document.querySelector("[data-about-bio-1]");
    if (bio1) bio1.textContent = d.about.bio;
    const bio2 = document.querySelector("[data-about-bio-2]");
    if (bio2) bio2.textContent = d.about.bioSecondary;
    const certList = document.querySelector("[data-cert-list]");
    if (certList) {
      certList.innerHTML = d.about.certifications
        .map((c) => `<li class="cert-item"><div class="cert-name">${c.name}</div><div class="cert-org">${c.org}</div></li>`)
        .join("");
    }
    const trajList = document.querySelector("[data-trajectory-list]");
    if (trajList) {
      trajList.innerHTML = d.about.trajectory
        .map(
          (t) => `<li class="trajectory-item"><div class="traj-period">${t.period}</div><div class="traj-title">${t.title}</div><div class="traj-org">${t.org}</div></li>`
        )
        .join("");
    }

    // Contact
    const emailLink = document.querySelector("[data-email-link]");
    if (emailLink) { emailLink.href = `mailto:${d.person.email}`; emailLink.textContent = d.person.email; }
    const linkedinLink = document.querySelector("[data-linkedin-link]");
    if (linkedinLink) linkedinLink.href = d.person.linkedin;
    const resumeLinks = document.querySelectorAll("[data-resume-link]");
    resumeLinks.forEach((l) => (l.href = d.person.resumeFile));

    // Footer year
    const year = document.querySelector("[data-year]");
    if (year) year.textContent = new Date().getFullYear();
  }

  /* ---------- scroll reveal ---------- */
  function initScrollReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- testimonial carousel ---------- */
  function initTestimonials() {
    const track = document.querySelector("[data-testimonial-slides]");
    const prevBtn = document.querySelector("[data-testimonial-prev]");
    const nextBtn = document.querySelector("[data-testimonial-next]");
    if (!track) return;
    let index = 0;
    const count = track.children.length;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }
    if (prevBtn) prevBtn.addEventListener("click", () => { index = (index - 1 + count) % count; update(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { index = (index + 1) % count; update(); });
  }
})();
