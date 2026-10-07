(() => {
  "use strict";

  const content = window.PORTFOLIO_CONTENT;
  const root = document.querySelector("#portfolio-root");
  if (!content || !root) return;

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (character) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      };
      return entities[character];
    });

  const renderImage = ({ src, alt, width, height, className = "" }) =>
    `<img class="${className}" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" width="${width}" height="${height}" loading="lazy" decoding="async">`;

  const renderSectionHeading = (section, headingId) => `
    <header class="section-header reveal">
      <div>
        <span class="command-line"><span class="prompt">${escapeHtml(content.meta.labels.terminalPrompt)}</span> ${escapeHtml(section.command)}</span>
        <h2 class="section-title" id="${escapeHtml(headingId)}">
          <span class="decode-visual" aria-hidden="true">${escapeHtml(section.title)}</span>
          <span class="sr-only">${escapeHtml(section.title)}</span>
        </h2>
      </div>
      <p class="section-intro">${escapeHtml(section.intro)}</p>
    </header>`;

  const renderNavigation = () => {
    const nav = document.querySelector("#nav-links");
    nav.innerHTML = content.navigation
      .map(
        (item) =>
          `<a class="nav-link" href="#${escapeHtml(item.target)}">${escapeHtml(item.label)}</a>`,
      )
      .join("");
  };

  const renderExperience = () =>
    content.experience
      .map(
        (job, index) => `
          <article class="experience-entry reveal" data-delay="${Math.min(index, 3)}">
            <div class="experience-meta">
              <div class="company-lockup">
                <span class="company-logo">
                  ${renderImage({ src: job.logo, alt: job.logoAlt, width: job.logoWidth, height: job.logoHeight })}
                  <span class="company-initials sr-only">${escapeHtml(job.company)}</span>
                </span>
                <h3 class="company-name">${escapeHtml(job.company)}</h3>
              </div>
              <p class="role">${escapeHtml(job.role)}</p>
              <p class="dates">${escapeHtml(job.dates)}</p>
              ${job.status ? `<span class="current-badge">${escapeHtml(job.status)}</span>` : ""}
            </div>
            <ul class="experience-points">
              ${job.highlights.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
            </ul>
          </article>`,
      )
      .join("");

  const renderProject = (project, index) => `
    <article class="project-card${project.published ? " project-card-published" : ""} reveal" data-delay="${index % 3}">
      <div class="project-art">
        ${
          project.artworkAvailable
            ? renderImage({
                src: project.artwork,
                alt: project.artworkAlt,
                width: project.artworkWidth,
                height: project.artworkHeight,
              })
            : ""
        }
        <div class="art-placeholder" aria-hidden="true">
          <span class="placeholder-command">&gt; ${escapeHtml(project.published ? content.meta.labels.openResearchCommand : `${content.meta.labels.renderArtworkCommand} ${project.id}/`)}</span>
          <span class="placeholder-result">${escapeHtml(content.meta.labels.projectImageMissing)}: add ${escapeHtml(project.artwork)}</span>
          <span class="placeholder-result">${escapeHtml(content.meta.labels.projectImageReady)}</span>
        </div>
      </div>
      <div class="project-content">
        <div class="project-topline">
          <span class="project-kind">${escapeHtml(project.kind)}</span>
          ${project.published ? `<span class="published-stamp">${escapeHtml(content.meta.labels.published)} ↗</span>` : `<span class="project-status">${escapeHtml(project.status)}</span>`}
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="project-summary">${escapeHtml(project.summary)}</p>
        ${
          project.details
            ? `<ul class="project-details">${project.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>`
            : ""
        }
        <div class="chip-list" aria-label="${escapeHtml(content.meta.labels.technologies)}">
          ${project.tools.map((tool) => `<span class="chip">${escapeHtml(tool)}</span>`).join("")}
        </div>
        ${
          project.href
            ? `<a class="project-link" href="${escapeHtml(project.href)}" ${project.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(project.linkLabel)} <span aria-hidden="true">↗</span></a>`
            : ""
        }
      </div>
    </article>`;

  const renderEducation = () =>
    content.education
      .map(
        (item, index) => `
          <article class="education-card reveal" data-delay="${index}">
            <span class="education-logo">${renderImage({
              src: item.logo,
              alt: item.logoAlt,
              width: item.logoWidth,
              height: item.logoHeight,
            })}</span>
            <div>
              <h3 class="education-school">${escapeHtml(item.school)}</h3>
              <p class="education-location">${escapeHtml(item.location)}</p>
              <p class="education-degree">${escapeHtml(item.degree)}</p>
              <p class="education-dates">${escapeHtml(item.dates)}</p>
              ${item.note ? `<p class="education-note">${escapeHtml(item.note)}</p>` : ""}
              <span class="course-label">${escapeHtml(content.meta.labels.coursework)}</span>
              <ul class="course-list">${item.coursework.map((course) => `<li>${escapeHtml(course)}</li>`).join("")}</ul>
            </div>
          </article>`,
      )
      .join("");

  const renderSkills = () => {
    const filters = [
      `<button class="skill-filter" type="button" data-filter="all" aria-pressed="true">${escapeHtml(content.meta.labels.allSkills)}</button>`,
      ...content.skills.map(
        (group) =>
          `<button class="skill-filter" type="button" data-filter="${escapeHtml(group.category)}" aria-pressed="false">${escapeHtml(group.category)}</button>`,
      ),
    ];
    const groups = content.skills
      .filter((group) => group.items.length)
      .map(
        (group, index) => `
          <section class="skill-group reveal" data-category="${escapeHtml(group.category)}" data-delay="${index % 3}">
            <h3>${escapeHtml(group.category)}</h3>
            <div class="chip-list">${group.items.map((skill) => `<span class="chip">${escapeHtml(skill)}</span>`).join("")}</div>
          </section>`,
      )
      .join("");
    return `
      <div class="skills-console reveal">
        <div class="skills-console-header">
          <span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="skills-console-label">${escapeHtml(content.meta.labels.skillsConsole)}</span>
        </div>
        <div class="skills-filters" role="group" aria-label="${escapeHtml(content.meta.labels.skillFilterLabel)}">${filters.join("")}</div>
        <div class="skill-groups" id="skill-groups">${groups}</div>
        <p class="sr-only" id="skill-filter-status" aria-live="polite"></p>
      </div>`;
  };

  const socialIcon = (name) => {
    if (name === "linkedin") {
      return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.99H7.1v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.04c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.66 2.45 3.42 1.74.1-.73.39-1.23.7-1.51-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.1-2.95 0 0 .94-.3 3.05 1.14a10.61 10.61 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.6 1.53.22 2.67.1 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z"/></svg>`;
  };

  const render = () => {
    renderNavigation();
    root.innerHTML = `
      <section class="hero" id="home" aria-labelledby="hero-name">
        <div class="hero-copy">
          <p class="eyebrow"><span>${escapeHtml(content.meta.labels.heroInit)}</span> ${escapeHtml(content.meta.location)} <span>·</span> ${escapeHtml(content.meta.labels.heroStudyTag)}</p>
          <h1 id="hero-name">
            <span class="sr-only">${escapeHtml(content.meta.headline)}</span>
            <span class="headline-visual" aria-hidden="true">${escapeHtml(content.meta.headline)}</span><span class="cursor-block" aria-hidden="true"></span>
          </h1>
          <p class="hero-intro">${escapeHtml(content.meta.introduction)}</p>
          <div class="hero-actions">
            <a class="button button-accent" href="#projects">${escapeHtml(content.meta.labels.workButton)} <span aria-hidden="true">↘</span></a>
            <a class="button" href="#contact">${escapeHtml(content.meta.labels.contactButton)} <span aria-hidden="true">↗</span></a>
          </div>
          <p class="hero-status"><span class="live-dot" aria-hidden="true"></span> ${escapeHtml(content.meta.labels.internshipStatus)}</p>
        </div>
        <figure class="hero-portrait reveal">
          <div class="portrait-frame">
            ${renderImage({ ...content.meta.portrait, className: "portrait-image" })}
            <figcaption class="portrait-caption"><span>${escapeHtml(content.meta.name)}</span><span>${escapeHtml(content.meta.labels.portraitCaption)}</span></figcaption>
          </div>
          <div class="portrait-sticker" aria-hidden="true">${escapeHtml(content.meta.labels.portraitSticker).replace("\n", "<br>")}</div>
        </figure>
        <a class="scroll-cue" href="#experience">${escapeHtml(content.meta.labels.scrollCue)} <span aria-hidden="true">↓</span></a>
      </section>
      <section class="section" id="experience" aria-labelledby="experience-heading">
        <div class="section-inner">
          ${renderSectionHeading(content.sections.experience, "experience-heading")}
          <div class="experience-list">${renderExperience()}</div>
        </div>
      </section>
      <section class="section" id="projects" aria-labelledby="projects-heading">
        <div class="section-inner">
          ${renderSectionHeading(content.sections.projects, "projects-heading")}
          <div class="projects-grid">${content.projects.map(renderProject).join("")}</div>
        </div>
      </section>
      <section class="section" id="education" aria-labelledby="education-heading">
        <div class="section-inner">
          ${renderSectionHeading(content.sections.education, "education-heading")}
          <div class="education-list">${renderEducation()}</div>
        </div>
      </section>
      <section class="section" id="skills" aria-labelledby="skills-heading">
        <div class="section-inner">
          ${renderSectionHeading(content.sections.skills, "skills-heading")}
          ${renderSkills()}
        </div>
      </section>
      <section class="section" id="outside" aria-labelledby="outside-heading">
        <div class="section-inner">
          ${renderSectionHeading(content.sections.outside, "outside-heading")}
          <div class="outside-panel reveal">
            <div class="outside-stamp" aria-hidden="true"><div><span>∿</span> ${escapeHtml(content.meta.labels.offHoursStamp).replace("\n", "<br>")}</div></div>
            <div class="outside-copy">
              <p class="eyebrow">${escapeHtml(content.meta.labels.offHoursEyebrow)}</p>
              <h3>${escapeHtml(content.meta.labels.offHoursHeadline)}</h3>
              <p>${escapeHtml(content.outside.note)}</p>
              <ul class="interest-list">${content.outside.interests.map((interest) => `<li>${escapeHtml(interest)}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </section>
      <section class="section contact-section" id="contact" aria-labelledby="contact-title">
        <div class="section-inner">
          <div class="contact-panel reveal">
            <header class="section-header">
              <div>
                <span class="command-line"><span class="prompt">${escapeHtml(content.meta.labels.terminalPrompt)}</span> ${escapeHtml(content.sections.contact.command)}</span>
                <h2 class="section-title" id="contact-title">${escapeHtml(content.sections.contact.title)}</h2>
              </div>
              <p class="section-intro">${escapeHtml(content.sections.contact.intro)}</p>
            </header>
            <p class="section-intro contact-closing">${escapeHtml(content.meta.labels.contactClosing)}</p>
            <div class="contact-actions">
              <a class="button button-accent" href="mailto:${escapeHtml(content.meta.email)}">${escapeHtml(content.meta.email)} <span aria-hidden="true">↗</span></a>
              <button class="email-copy" id="copy-email" type="button" aria-label="${escapeHtml(content.meta.labels.copyEmail)}"><span>${escapeHtml(content.meta.email)}</span><span aria-hidden="true">${escapeHtml(content.meta.labels.copyAction)}</span></button>
            </div>
            <p class="sr-only" id="copy-status" aria-live="polite"></p>
            <div class="social-links" aria-label="${escapeHtml(content.meta.labels.socialProfiles)}">
              <a class="social-link" href="${escapeHtml(content.meta.links.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(content.meta.labels.linkedinProfile)}">${socialIcon("linkedin")}</a>
              <a class="social-link" href="${escapeHtml(content.meta.links.github)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(content.meta.labels.githubProfile)}">${socialIcon("github")}</a>
            </div>
          </div>
        </div>
      </section>
      <footer class="site-footer">
        <p>${escapeHtml(content.footer.credit)}</p>
        <span class="footer-note">${escapeHtml(content.footer.note)}</span>
        <p>© <span id="current-year"></span> ${escapeHtml(content.meta.name)}</p>
      </footer>`;
  };

  const setTitle = () => {
    document.title = `${content.meta.name} — Portfolio`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = content.meta.description;
    const openGraphTitle = document.querySelector('meta[property="og:title"]');
    if (openGraphTitle) openGraphTitle.content = content.meta.openGraphTitle;
    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    if (openGraphDescription) openGraphDescription.content = content.meta.openGraphDescription;
  };

  const setStaticLabels = () => {
    document.querySelector("#skip-link-label").textContent = content.meta.labels.skipLink;
    document.querySelector("#brand-name").textContent = content.meta.name;
    document.querySelector("#brand-link").setAttribute("aria-label", `${content.meta.name}, home`);
    document.querySelector("#mobile-resume-label").textContent = content.meta.labels.mobileResumeButton;
    document.querySelector("#desktop-resume-label").textContent = content.meta.labels.resumeButton;
    document.querySelector("#menu-label").textContent = content.meta.labels.menuOpen;
    document.querySelector("#primary-nav").setAttribute("aria-label", content.meta.labels.mainNavigation);
    document.querySelector("#session-window-label").textContent = content.meta.labels.sessionWindow;
    document.querySelector("#prompt-window-label").textContent = content.meta.labels.promptWindow;
    document.querySelector("#command-eyebrow").textContent = content.meta.labels.commandEyebrow;
    document.querySelector("#command-title").textContent = content.meta.labels.commandTitle;
    document.querySelector("#command-description").textContent = content.meta.labels.commandDescription;
    document.querySelector("#command-input-label").textContent = content.meta.labels.commandInputLabel;
    document.querySelector("#command-input").placeholder = content.meta.labels.commandPlaceholder;
    document.querySelector("#command-submit").textContent = content.meta.labels.commandSubmit;
    document.querySelector("#dialog-close").setAttribute("aria-label", content.meta.labels.commandClose);
  };

  const setupImages = () => {
    document.querySelectorAll("img").forEach((image) => {
      image.addEventListener("load", () => {
        const placeholder = image.closest(".project-art")?.querySelector(".art-placeholder");
        if (placeholder) placeholder.hidden = true;
      });
      image.addEventListener("error", () => {
        image.hidden = true;
        const placeholder = image.closest(".project-art")?.querySelector(".art-placeholder");
        if (placeholder) placeholder.hidden = false;
        const initials = image.parentElement?.querySelector(".company-initials");
        if (initials) initials.classList.remove("sr-only");
      });
      if (image.complete && image.naturalWidth > 0) {
        const placeholder = image.closest(".project-art")?.querySelector(".art-placeholder");
        if (placeholder) placeholder.hidden = true;
      }
    });
  };

  const setupMenu = () => {
    const button = document.querySelector("#menu-toggle");
    const nav = document.querySelector("#primary-nav");
    const label = document.querySelector("#menu-label");
    const closeMenu = () => {
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      label.textContent = content.meta.labels.menuOpen;
    };
    button.addEventListener("click", () => {
      const opening = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(opening));
      nav.classList.toggle("is-open", opening);
      label.textContent = opening ? content.meta.labels.menuClose : content.meta.labels.menuOpen;
    });
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        closeMenu();
        button.focus();
      }
    });
  };

  const setupScroll = () => {
    const progress = document.querySelector("#scroll-progress-bar");
    const links = [...document.querySelectorAll(".nav-link")];
    const sections = content.navigation
      .map((item) => document.getElementById(item.target))
      .filter(Boolean);
    let scheduled = false;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
      scheduled = false;
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!scheduled) {
          scheduled = true;
          window.requestAnimationFrame(updateProgress);
        }
      },
      { passive: true },
    );
    updateProgress();

    if ("IntersectionObserver" in window) {
      const activeObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const activeId = entry.target.id;
            links.forEach((link) => {
              if (link.hash === `#${activeId}`) link.setAttribute("aria-current", "location");
              else link.removeAttribute("aria-current");
            });
          });
        },
        { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
      );
      sections.forEach((section) => activeObserver.observe(section));

      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -35px 0px", threshold: 0 },
      );
      document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    } else {
      document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-in-view"));
    }
  };

  const setupSkills = () => {
    const buttons = [...document.querySelectorAll(".skill-filter")];
    const groups = [...document.querySelectorAll(".skill-group")];
    const status = document.querySelector("#skill-filter-status");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.dataset.filter;
        let shown = 0;
        buttons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        groups.forEach((group) => {
          const isVisible = selected === "all" || group.dataset.category === selected;
          group.hidden = !isVisible;
          if (isVisible) shown += 1;
        });
        status.textContent =
          shown > 0
            ? `${button.textContent.trim()} skills shown.`
            : content.meta.labels.emptySkills;
      });
    });
  };

  const setupCopyEmail = () => {
    const button = document.querySelector("#copy-email");
    const status = document.querySelector("#copy-status");
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(content.meta.email);
        status.textContent = content.meta.labels.copiedEmail;
        button.querySelector("span:last-child").textContent = content.meta.labels.copiedAction;
        window.setTimeout(() => {
          button.querySelector("span:last-child").textContent = content.meta.labels.copyAction;
        }, 1800);
      } catch {
        status.textContent = content.meta.labels.copyFailed;
      }
    });
  };

  const setupBoot = () => {
    const screen = document.querySelector("#boot-screen");
    const copy = document.querySelector("#boot-copy");
    const skip = document.querySelector("#boot-skip");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timeout;
    const close = () => {
      if (!screen.classList.contains("is-active")) return;
      window.clearTimeout(timeout);
      screen.classList.add("is-exiting");
      document.body.classList.remove("booting");
      window.setTimeout(() => {
        screen.remove();
        document.dispatchEvent(new Event("portfolio:boot-finished"));
      }, 280);
      document.removeEventListener("keydown", closeOnKey);
    };
    const closeOnKey = (event) => {
      if (event.key !== "Tab" && event.key !== "Shift") close();
    };
    const lines = content.meta.labels.bootMessages.map((message) =>
      `> ${message.replace("{name}", content.meta.name.split(" ")[0])}`,
    );
    copy.innerHTML = lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("");
    if (reducedMotion || sessionStorage.getItem("naina-portfolio-booted") === "true") {
      screen.remove();
      document.dispatchEvent(new Event("portfolio:boot-finished"));
      return;
    }
    sessionStorage.setItem("naina-portfolio-booted", "true");
    document.body.classList.add("booting");
    screen.classList.add("is-active");
    skip.textContent = content.meta.labels.skipIntro;
    skip.addEventListener("click", close);
    screen.addEventListener("pointerdown", close, { once: true });
    document.addEventListener("keydown", closeOnKey);
    timeout = window.setTimeout(close, 1250);
  };

  const setupTyping = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    document.addEventListener(
      "portfolio:boot-finished",
      () => {
        const headline = document.querySelector(".headline-visual");
        const fullText = content.meta.headline;
        headline.textContent = "";
        let index = 0;
        const typeNext = () => {
          index += 1;
          headline.textContent = fullText.slice(0, index);
          if (index < fullText.length) window.setTimeout(typeNext, 25);
        };
        window.setTimeout(typeNext, 120);
      },
      { once: true },
    );

    const symbols = "░▒▓01{}[]<>/";
    const decode = (element) => {
      if (element.dataset.decoded) return;
      element.dataset.decoded = "true";
      const title = element.textContent;
      let frame = 0;
      const steps = 5;
      const scramble = () => {
        const progress = frame / steps;
        element.textContent = [...title]
          .map((character, position) => {
            if (character === " " || position / Math.max(title.length, 1) < progress) return character;
            return symbols[Math.floor(Math.random() * symbols.length)];
          })
          .join("");
        frame += 1;
        if (frame <= steps) window.setTimeout(scramble, 36);
        else element.textContent = title;
      };
      scramble();
    };
    if ("IntersectionObserver" in window) {
      const titleObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              decode(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      document.querySelectorAll(".decode-visual").forEach((title) => titleObserver.observe(title));
    }
  };

  const setupCommandPrompt = () => {
    const dialog = document.querySelector("#command-dialog");
    const form = document.querySelector("#command-form");
    const input = document.querySelector("#command-input");
    const output = document.querySelector("#command-output");
    const closeButton = document.querySelector(".dialog-close");
    const close = () => {
      dialog.close();
      document.body.classList.remove("dialog-open");
    };
    const open = () => {
      if (dialog.open) return;
      dialog.showModal();
      document.body.classList.add("dialog-open");
      input.focus();
    };
    document.addEventListener("keydown", (event) => {
      const opensPrompt = event.key === "?" || (event.key === "/" && event.shiftKey);
      if (opensPrompt && !event.ctrlKey && !event.metaKey && !event.altKey) {
        const target = event.target;
        if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
        event.preventDefault();
        open();
      }
      if (event.key === "Escape" && dialog.open) close();
    });
    closeButton.addEventListener("click", close);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const command = input.value.trim().toLowerCase();
      const response = content.meta.labels.commands[command] || content.meta.labels.commands.unknown;
      output.textContent = response;
      input.value = "";
      if (command === "close") window.setTimeout(close, 850);
    });
  };

  const setupCursor = () => {
    const enabled =
      window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 900px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!enabled) return;
    const container = document.querySelector("#cursor-trail");
    const marks = Array.from({ length: 7 }, (_, index) => {
      const mark = document.createElement("span");
      mark.className = "cursor-mark";
      mark.textContent = index === 0 ? "▪" : index % 2 ? "·" : "+";
      container.append(mark);
      return { element: mark, x: 0, y: 0 };
    });
    let pointIndex = 0;
    let pendingFrame = false;
    let pointer = { x: 0, y: 0 };
    document.addEventListener(
      "pointermove",
      (event) => {
        pointer = { x: event.clientX, y: event.clientY };
        if (pendingFrame) return;
        pendingFrame = true;
        window.requestAnimationFrame(() => {
          const point = marks[pointIndex];
          point.x = pointer.x;
          point.y = pointer.y;
          point.element.style.transform = `translate3d(${point.x + 12}px, ${point.y + 12}px, 0)`;
          point.element.style.opacity = `${1 - pointIndex * 0.12}`;
          pointIndex = (pointIndex + 1) % marks.length;
          pendingFrame = false;
        });
      },
      { passive: true },
    );
    document.addEventListener("pointerleave", () => {
      marks.forEach(({ element }) => {
        element.style.opacity = "0";
      });
    });
  };

  const initialize = () => {
    setTitle();
    setStaticLabels();
    render();
    setupImages();
    setupMenu();
    setupScroll();
    setupSkills();
    setupCopyEmail();
    setupTyping();
    setupBoot();
    setupCommandPrompt();
    setupCursor();
    document.querySelector("#current-year").textContent = String(new Date().getFullYear());
  };

  initialize();
})();
