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
    const contactRow = document.querySelector("[data-hero-contact-row]");
    if (contactRow) {
      const icons = {
        linkedin:
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5v6M8 7.5v.01" stroke-linecap="round"/><path d="M12 16.5v-4a2.2 2.2 0 0 1 4.4 0v4" stroke-linecap="round"/></svg>',
        mail:
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5 12 13l8.5-6.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        whatsapp:
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6.3 17.7 4 20l2.4-2.2A8 8 0 1 1 9 19l-2.7-1.3Z" stroke-linejoin="round"/><path d="M9.2 9.6c.2 2.6 2.4 4.8 5 5" stroke-linecap="round"/></svg>',
      };
      const links = [
        { key: "linkedin", label: "LinkedIn", href: d.person.linkedin, external: true },
        { key: "mail", label: "Email", href: `mailto:${d.person.email}`, external: false },
        { key: "whatsapp", label: "WhatsApp", href: `https://wa.me/${d.person.whatsapp}`, external: true },
      ];
      contactRow.innerHTML = links
        .map(
          (l) => `
        <a class="hero-contact-icon" href="${l.href}" ${l.external ? 'target="_blank" rel="noopener"' : ""}>
          ${icons[l.key]}<span>${l.label}</span>
        </a>`
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

    // Certifications page
    function renderCertRow(c) {
      return `
        <div class="cert-row">
          <img src="${c.image}" alt="${c.name} certificate" loading="lazy">
          <div>
            <div class="cert-row-name">${c.name}</div>
            <div class="cert-row-issuer">${c.issuer}</div>
            <p class="cert-row-brief">${c.brief}</p>
          </div>
        </div>`;
    }
    const certPm = document.querySelector("[data-cert-pm]");
    if (certPm && d.certifications) {
      const active = d.certifications.projectManagement.filter((c) => c.active);
      certPm.innerHTML = active.length
        ? active.map(renderCertRow).join("")
        : `<div class="empty-state">Project management certifications will be added here soon.</div>`;
    }
    const certTech = document.querySelector("[data-cert-technical]");
    if (certTech && d.certifications) {
      const active = d.certifications.technical.filter((c) => c.active);
      certTech.innerHTML = active.length
        ? active.map(renderCertRow).join("")
        : `<div class="empty-state">Technical certifications will be added here soon.</div>`;
    }

    // Awards page
    const awardsGrid = document.querySelector("[data-awards-grid]");
    const awardsEmpty = document.querySelector("[data-awards-empty]");
    if (awardsGrid && d.awards) {
      const active = d.awards.filter((a) => a.active);
      if (active.length) {
        awardsGrid.innerHTML = active
          .map(
            (a) => `
          <div class="tile-card">
            <img src="${a.image}" alt="${a.title}" loading="lazy">
            <div class="tile-card-body">
              <h3>${a.title}</h3>
              <div class="tile-card-meta">${a.org} · ${a.year}</div>
              <p>${a.description}</p>
            </div>
          </div>`
          )
          .join("");
      } else if (awardsEmpty) {
        awardsEmpty.style.display = "block";
      }
    }

    // Beyond Delivery page
    function renderTile(item) {
      return `
        <div class="tile-card">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="tile-card-body">
            <h3>${item.title}</h3>
            <div class="tile-card-meta">${item.context}</div>
            <p>${item.description}</p>
          </div>
        </div>`;
    }
    const speakingGrid = document.querySelector("[data-beyond-speaking]");
    const speakingEmpty = document.querySelector("[data-beyond-speaking-empty]");
    if (speakingGrid && d.beyondDelivery) {
      const active = d.beyondDelivery.speaking.filter((s) => s.active);
      if (active.length) speakingGrid.innerHTML = active.map(renderTile).join("");
      else if (speakingEmpty) speakingEmpty.style.display = "block";
    }
    const personalGrid = document.querySelector("[data-beyond-personal]");
    const personalEmpty = document.querySelector("[data-beyond-personal-empty]");
    if (personalGrid && d.beyondDelivery) {
      const active = d.beyondDelivery.personal.filter((s) => s.active);
      if (active.length) personalGrid.innerHTML = active.map(renderTile).join("");
      else if (personalEmpty) personalEmpty.style.display = "block";
    }
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
