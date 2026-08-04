/* ==========================================================================
   ONKAR TALEKAR - PORTFOLIO INTERACTIVE JAVASCRIPT & DYNAMIC DATA RENDERER
   Canvas Particles, Lightbox Modal, Dynamic LocalStorage Sync, AI Studio
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------------------
     1. DYNAMIC DATA RENDERER FROM LOCALSTORAGE / DATA.JS
     ------------------------------------------------------------------------ */
  if (typeof getPortfolioData === "function") {
    renderDynamicPortfolioData();
  }

  /* ------------------------------------------------------------------------
     2. CANVAS CONSTELLATION / PARTICLE BACKGROUND
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById("bg-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 15), 65);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.8;
        this.alpha = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 242, 254, ${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }

  /* ------------------------------------------------------------------------
     3. MOBILE MENU DRAWER TOGGLE
     ------------------------------------------------------------------------ */
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. NAVBAR SCROLL EFFECT & SCROLLSPY
     ------------------------------------------------------------------------ */
  const nav = document.querySelector("nav");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav?.classList.add("scrolled");
    } else {
      nav?.classList.remove("scrolled");
    }

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.classList.remove("active");
      if (current && a.getAttribute("href").includes(current)) {
        a.classList.add("active");
      }
    });
  });

  /* ------------------------------------------------------------------------
     5. TYPED TEXT EFFECT
     ------------------------------------------------------------------------ */
  const taglineEl = document.querySelector(".tagline");
  if (taglineEl && !taglineEl.hasAttribute("data-custom")) {
    const roles = [
      "Artificial Intelligence & Data Science Student",
      "Full-Stack Python & Django Developer",
      "Machine Learning & Problem Solver",
      "Tech Explorer & Creative Engineer"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        taglineEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        taglineEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 30 : 60;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }

      setTimeout(typeEffect, speed);
    }

    typeEffect();
  }

  /* ------------------------------------------------------------------------
     6. 3D CARD TILT EFFECT ON MOUSE MOVE
     ------------------------------------------------------------------------ */
  const wrapper = document.querySelector(".profile-image-wrapper");
  const photo = document.querySelector(".profile-img");

  if (wrapper && photo) {
    wrapper.addEventListener("mousemove", (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      photo.style.transform = `
        translate(${x / 18}px, ${y / 18}px)
        rotateX(${-y / 20}deg)
        rotateY(${x / 20}deg)
      `;
    });

    wrapper.addEventListener("mouseleave", () => {
      photo.style.transform = "translate(0,0) rotateX(0) rotateY(0)";
    });
  }

});

/* ------------------------------------------------------------------------
   7. DYNAMIC DATA RENDERER FUNCTION
   ------------------------------------------------------------------------ */
function renderDynamicPortfolioData() {
  const data = getPortfolioData();
  if (!data) return;

  // Render Projects Grid Across All Pages
  document.querySelectorAll(".projects-grid").forEach(projGrid => {
    if (data.projects && data.projects.length > 0) {
      projGrid.innerHTML = data.projects.map(p => `
        <div class="project-card-luxury">
          <div class="project-img-wrapper" onclick="openImage(this)">
            <img src="${p.image}" alt="${p.title}" onerror="this.src='webprofile.png'">
          </div>
          <div class="project-details">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="project-tags">
              ${(p.tags || []).map(t => `<span>${t}</span>`).join("")}
            </div>
            <a href="${p.demoLink}" target="_blank" class="project-link-btn">
              View Live Demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      `).join("");
    }
  });

  // Render Project Snapshot Gallery Across All Pages
  document.querySelectorAll(".gallery").forEach(galleryGrid => {
    if (data.projectGallery && data.projectGallery.length > 0) {
      galleryGrid.innerHTML = data.projectGallery.map(g => `
        <div class="gallery-item" onclick="openImage(this)">
          <img src="${g.image}" alt="${g.title || 'Project Snapshot'}" onerror="this.src='cake.jpeg'">
          <div class="gallery-overlay"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
        </div>
      `).join("");
    }
  });

  // Render Certifications Grid Across All Pages
  document.querySelectorAll(".cert-grid").forEach(certGrid => {
    if (data.certifications && data.certifications.length > 0) {
      certGrid.innerHTML = data.certifications.map(c => `
        <div class="cert-card" onclick="openImage(this)">
          <div class="cert-img-container">
            <img src="${c.image}" alt="${c.title}" onerror="this.src='onkarsqlda.jpg'">
          </div>
          <h3>${c.title}</h3>
          <p>${c.description}</p>
        </div>
      `).join("");
    }
  });

  // Render Skills Grid Across All Pages
  document.querySelectorAll(".skills-grid").forEach(skillGrid => {
    if (data.skills && data.skills.length > 0) {
      skillGrid.innerHTML = data.skills.map(s => `
        <div class="skill-card">
          <img src="${s.icon}" alt="${s.name}" onerror="this.src='code.png'">
          <span>${s.name}</span>
        </div>
      `).join("");
    }
  });

  // Render Dynamic Resume PDF Links & Embed Viewers Across All Pages
  if (data.profile && data.profile.resumePdf) {
    const resumeUrl = data.profile.resumePdf;
    document.querySelectorAll('a.resume-download-btn, .btn-primary[href*=".pdf"]').forEach(link => {
      const href = link.getAttribute("href") || "";
      if (href.toLowerCase().includes(".pdf")) {
        link.href = resumeUrl;
      }
    });

    const resumeIframe = document.querySelector('iframe[src*=".pdf"], iframe[title*="Resume"], iframe.resume-iframe');
    if (resumeIframe) {
      resumeIframe.src = resumeUrl;
    }
  }

  // Render Dynamic Social Media & Contact Links Across All Pages
  if (data.profile) {
    const prof = data.profile;

    if (prof.github) {
      document.querySelectorAll('a.platform-icon-btn.github, a.social-github').forEach(a => a.href = prof.github);
    }
    if (prof.linkedin) {
      document.querySelectorAll('a.platform-icon-btn.linkedin, a.social-linkedin').forEach(a => a.href = prof.linkedin);
    }
    if (prof.whatsapp) {
      document.querySelectorAll('a.platform-icon-btn.whatsapp, a.social-whatsapp').forEach(a => a.href = prof.whatsapp);
    }
    if (prof.instagram) {
      document.querySelectorAll('a.platform-icon-btn.instagram, a.social-instagram').forEach(a => a.href = prof.instagram);
    }
    if (prof.email) {
      document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
        a.href = "mailto:" + prof.email;
        if (a.textContent.includes("@") || a.textContent.includes("gmail") || a.textContent.includes("Email")) {
          a.textContent = prof.email;
        }
      });
    }
  }

  // Dynamic About Page Renderer (about.html)
  if (data.profile) {
    const dynAboutSubtitle = document.getElementById("dynAboutSubtitle");
    if (dynAboutSubtitle && data.profile.aboutSubtitle) {
      dynAboutSubtitle.textContent = data.profile.aboutSubtitle;
    }

    const dynAboutPhoto = document.getElementById("dynAboutPhoto");
    if (dynAboutPhoto && data.profile.aboutPhoto) {
      dynAboutPhoto.src = data.profile.aboutPhoto;
    }

    const dynAboutHeadline = document.getElementById("dynAboutHeadline");
    if (dynAboutHeadline && data.profile.aboutHeadline) {
      dynAboutHeadline.textContent = data.profile.aboutHeadline;
    }

    const dynAboutBio1 = document.getElementById("dynAboutBio1");
    if (dynAboutBio1 && data.profile.bioParagraph1) {
      dynAboutBio1.innerHTML = data.profile.bioParagraph1;
    }

    const dynAboutBio2 = document.getElementById("dynAboutBio2");
    if (dynAboutBio2 && data.profile.bioParagraph2) {
      dynAboutBio2.innerHTML = data.profile.bioParagraph2;
    }

    const dynAboutBio3 = document.getElementById("dynAboutBio3");
    if (dynAboutBio3 && data.profile.bioParagraph3) {
      dynAboutBio3.innerHTML = data.profile.bioParagraph3;
    }
  }

  const dynAboutTags = document.getElementById("dynAboutTags");
  if (dynAboutTags && data.aboutTags) {
    dynAboutTags.innerHTML = data.aboutTags.map(t => `
      <span>${t.name}</span>
    `).join("");
  }

  const dynAboutEduCards = document.getElementById("dynAboutEduCards");
  if (dynAboutEduCards && data.education) {
    dynAboutEduCards.innerHTML = data.education.slice(0, 2).map(e => `
      <div class="edu-card">
        <h4>${e.degree}</h4>
        <p>${e.duration}</p>
      </div>
    `).join("");
  }

  // Dynamic Resume Page Card Renderer (resume.html)
  const dynProfSummary = document.getElementById("dynProfSummary");
  if (dynProfSummary && data.profile && data.profile.professionalSummary) {
    dynProfSummary.textContent = data.profile.professionalSummary;
  }

  const dynEducationList = document.getElementById("dynEducationList");
  if (dynEducationList && data.education) {
    dynEducationList.innerHTML = data.education.map(e => `
      <li><strong>${e.degree}</strong> — ${e.duration}</li>
    `).join("");
  }

  const dynInternshipList = document.getElementById("dynInternshipList");
  if (dynInternshipList && data.internships) {
    dynInternshipList.innerHTML = data.internships.map(i => `
      <div style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--accent-cyan); font-size: 1.1rem; margin-bottom: 0.2rem;">${i.role}</h4>
        <p style="color: var(--text-main); font-weight: 600;">${i.company} | ${i.duration}</p>
        <ul>
          ${(i.points || []).map(pt => `<li>${pt}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  // Key Projects Showcase on resume.html
  const dynKeyProjectsList = document.getElementById("dynKeyProjectsList");
  if (dynKeyProjectsList) {
    const list = (data.keyProjectsShowcase && data.keyProjectsShowcase.length > 0) ? data.keyProjectsShowcase : data.projects;
    if (list) {
      dynKeyProjectsList.innerHTML = list.map(p => `
        <li>${p.title}</li>
      `).join("");
    }
  }

  // Core Skills & Proficiencies Pills on resume.html
  const dynSkillsPillList = document.getElementById("dynSkillsPillList");
  if (dynSkillsPillList) {
    const skillsList = (data.coreSkillsShowcase && data.coreSkillsShowcase.length > 0) ? data.coreSkillsShowcase : data.skills;
    if (skillsList) {
      dynSkillsPillList.innerHTML = skillsList.map(s => `
        <span class="skill-pill">${s.name}</span>
      `).join("");
    }
  }

  // Dynamic Tech Stack Page Renderer (techstack.html)
  const dynTechGrid = document.getElementById("dynTechGrid");
  if (dynTechGrid && data.techStack) {
    if (typeof normalizeTechCategories === "function") {
      normalizeTechCategories(data);
    }
    const categories = [...new Set(data.techStack.map(item => item.category || "Programming Languages"))];
    dynTechGrid.innerHTML = categories.map(cat => {
      const items = data.techStack.filter(item => (item.category || "Programming Languages") === cat);
      const icon = cat.includes("Lang") ? "fa-code" : cat.includes("Data") ? "fa-chart-pie" : "fa-screwdriver-wrench";
      return `
        <div class="tech-card">
          <h3><i class="fa-solid ${icon}"></i> ${cat}</h3>
          ${items.map(it => `
            <div class="skill-bar-item">
              <div class="skill-info"><span>${it.name}</span><span>${it.proficiency || 75}%</span></div>
              <div class="bar"><div style="width:${it.proficiency || 75}%"></div></div>
            </div>
          `).join("")}
        </div>
      `;
    }).join("");
  }
}

/* ------------------------------------------------------------------------
   8. IMAGE LIGHTBOX MODAL FUNCTIONALITY (GLOBAL)
   ------------------------------------------------------------------------ */
function openImage(element) {
  let imgSrc = "";
  if (element.tagName === "IMG") {
    imgSrc = element.src;
  } else if (element.querySelector("img")) {
    imgSrc = element.querySelector("img").src;
  }

  if (!imgSrc) return;

  let modal = document.getElementById("fullscreen") || document.getElementById("lightbox");
  let modalImg = document.getElementById("full-img") || document.getElementById("lightbox-img");

  if (modal && modalImg) {
    modalImg.src = imgSrc;
    modal.classList.add("active");
    modal.style.display = "flex";
  }
}

function closeImage() {
  let modal = document.getElementById("fullscreen") || document.getElementById("lightbox");
  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "none";
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeImage();
});

/* ------------------------------------------------------------------------
   9. AI INTERACTIVE STUDIO SIMULATOR
   ------------------------------------------------------------------------ */
function setPrompt(promptText) {
  const inputEl = document.getElementById("aiTextInput");
  if (inputEl) {
    inputEl.value = promptText;
    runTextAI();
  }
}

function runTextAI() {
  const inputEl = document.getElementById("aiTextInput");
  const thinkingBox = document.getElementById("aiThinking");
  const outputBox = document.getElementById("aiResult") || document.getElementById("aiOutputBox");

  if (!inputEl) return;
  const input = inputEl.value.trim();

  if (!input) {
    alert("Please enter a question or prompt for Onkar's AI Assistant!");
    return;
  }

  if (thinkingBox) thinkingBox.style.display = "block";
  if (outputBox) outputBox.style.display = "none";

  setTimeout(() => {
    if (thinkingBox) thinkingBox.style.display = "none";

    const data = typeof getPortfolioData === "function" ? getPortfolioData() : defaultPortfolioData;
    const prof = data.profile || {};
    const lower = input.toLowerCase();
    let aiAnswer = "";

    // 1. Skills / Tech / Languages / Tech Stack / Tools / Code
    if (lower.includes("skill") || lower.includes("tech") || lower.includes("language") || lower.includes("stack") || lower.includes("tool") || lower.includes("python") || lower.includes("java") || lower.includes("c++") || lower.includes("django") || lower.includes("react") || lower.includes("know") || lower.includes("expert")) {
      const skillNames = (data.skills || []).map(s => s.name).join(", ");
      const coreSkills = (data.coreSkillsShowcase || []).map(cs => cs.name).join(", ");
      const techItems = (data.techStack || []).map(t => `${t.name} (${t.proficiency || 80}%)`).join(", ");

      aiAnswer = `💻 <strong>Onkar's Technical Skills & Stack:</strong><br><br>
      🚀 <strong>Core Programming & Tech Icons:</strong> ${skillNames || 'Python, C, C++, Java, JavaScript, React, PyTorch, Django, MySQL, HTML5, CSS3'}<br><br>
      ⭐ <strong>Featured Skills & Pills:</strong> ${coreSkills || 'Python, Django, C/C++, Data Analytics, Machine Learning, Web Development'}<br><br>
      📊 <strong>Detailed Tech Stack & Proficiency:</strong> ${techItems || 'Python (90%), C/C++ (85%), Java (80%), Web Development (90%), Django (85%), SQL (80%), PyTorch (75%), Data Analytics (85%)'}`;

    // 2. Education / Qualification / Degree / College / SSC / Study
    } else if (lower.includes("education") || lower.includes("qualification") || lower.includes("degree") || lower.includes("diploma") || lower.includes("college") || lower.includes("school") || lower.includes("study") || lower.includes("ssc") || lower.includes("gpa") || lower.includes("b.e")) {
      const eduList = (data.education || []).map(e => `• <strong>${e.degree}</strong> — ${e.duration}`).join("<br>");

      aiAnswer = `🎓 <strong>Onkar's Educational Background:</strong><br><br>${eduList || '• <strong>B.E. in Artificial Intelligence and Data Science</strong> — 2025–2028<br>• <strong>Diploma in Computer Engineering</strong> — 2022–2025<br>• <strong>Secondary School Certificate (SSC)</strong> — 2021–2022'}`;

    // 3. Experience / Internship / Work / Company / Sumago / TechnoHacks / Job
    } else if (lower.includes("internship") || lower.includes("experience") || lower.includes("work") || lower.includes("job") || lower.includes("company") || lower.includes("sumago") || lower.includes("technohacks")) {
      const internList = (data.internships || []).map(i => `💼 <strong>${i.role}</strong> at <em>${i.company}</em> (${i.duration})<br>Key Contributions: ${(i.points || []).join(", ")}`).join("<br><br>");

      aiAnswer = `🏢 <strong>Onkar's Industrial Internships & Work Experience:</strong><br><br>${internList || '💼 <strong>Data Analytics Intern</strong> at TechnoHacks Solutions Pvt. Ltd., Nashik (Jan 2026 – Feb 2026)<br>💼 <strong>Full Stack Python Development Intern</strong> at Sumago Infotech Pvt. Ltd., Nashik (June 2024 – July 2024)'}`;

    // 4. Projects / Portfolio / Work / Medicare / Govt / Drug / Apps / Code
    } else if (lower.includes("project") || lower.includes("app") || lower.includes("system") || lower.includes("medicare") || lower.includes("govt") || lower.includes("drug") || lower.includes("showcase")) {
      const projList = (data.projects || []).map(p => `🚀 <strong>${p.title}:</strong> ${p.description} <em>(Tags: ${(p.tags || []).join(", ")})</em>`).join("<br><br>");

      aiAnswer = `📁 <strong>Onkar's Featured Projects:</strong><br><br>${projList || '🚀 <strong>MediCare - Online Medicine Recommendation System:</strong> Intelligent AI-assisted medical recommendation system built with Python, Django, and Machine Learning.'}`;

    // 5. Certifications / Courses / Certificates / Training
    } else if (lower.includes("certif") || lower.includes("course") || lower.includes("training") || lower.includes("certificate")) {
      const certList = (data.certifications || []).map(c => `📜 <strong>${c.title}:</strong> ${c.description}`).join("<br><br>");

      aiAnswer = `📜 <strong>Onkar's Certifications & Specializations:</strong><br><br>${certList || '📜 <strong>Full Stack Python & Django Industrial Training:</strong> 6-week industrial training in Python backend development.'}`;

    // 6. Contact / Email / Phone / WhatsApp / LinkedIn / GitHub / Social
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("number") || lower.includes("whatsapp") || lower.includes("linkedin") || lower.includes("github") || lower.includes("instagram") || lower.includes("reach") || lower.includes("hire") || lower.includes("message")) {
      aiAnswer = `✉️ <strong>How to Contact Onkar Talekar:</strong><br><br>
      📧 <strong>Email:</strong> <a href="mailto:${prof.email || 'onkartalekar23@gmail.com'}" style="color: #00f2fe;">${prof.email || 'onkartalekar23@gmail.com'}</a><br>
      💼 <strong>LinkedIn:</strong> <a href="${prof.linkedin || '#'}" target="_blank" style="color: #00f2fe;">Onkar's LinkedIn Profile</a><br>
      🐱 <strong>GitHub:</strong> <a href="${prof.github || '#'}" target="_blank" style="color: #00f2fe;">Onkar's GitHub Repositories</a><br>
      💬 <strong>WhatsApp:</strong> <a href="${prof.whatsapp || '#'}" target="_blank" style="color: #00f2fe;">Direct WhatsApp Chat</a><br>
      📸 <strong>Instagram:</strong> <a href="${prof.instagram || '#'}" target="_blank" style="color: #00f2fe;">Onkar's Instagram</a>`;

    // 7. Location / Address / City / Country
    } else if (lower.includes("location") || lower.includes("address") || lower.includes("city") || lower.includes("where") || lower.includes("live") || lower.includes("nashik") || lower.includes("maharashtra")) {
      aiAnswer = `📍 <strong>Location:</strong> Onkar Talekar is based in <strong>${prof.location || 'Nashik, Maharashtra, India'}</strong>. Open for hybrid, remote, and full-time opportunities!`;

    // 8. Neural / AI / Machine Learning general questions
    } else if (lower.includes("neural") || lower.includes("model") || lower.includes("deep learning") || lower.includes("machine learning") || lower.includes("algorithm")) {
      aiAnswer = `🧠 <strong>Neural Engine Response:</strong><br><br>
      Artificial Neural Networks mimic biological neurons through interconnected layers (Input, Hidden, Output) with activation functions like ReLU and Sigmoid to discover complex data patterns.<br><br>
      💡 <em>Onkar actively studies Machine Learning, Deep Learning, PyTorch, and Data Analytics as part of his B.E. in AI & Data Science!</em>`;

    // 9. Identity / Who is Onkar / Profile / About
    } else if (lower.includes("who") || lower.includes("onkar") || lower.includes("profile") || lower.includes("about") || lower.includes("tell me about you") || lower.includes("introduce") || lower.includes("name") || lower.includes("bio") || lower.includes("summary")) {
      const summary = prof.professionalSummary || prof.bioParagraph1 || "AI & Data Science undergraduate and Computer Engineering diploma graduate.";
      aiAnswer = `👤 <strong>About Onkar Talekar:</strong><br><br>
      Hi! <strong>${prof.name || 'Onkar Talekar'}</strong> is an <strong>${prof.tagline || 'Artificial Intelligence & Data Science Student'}</strong> based in <strong>${prof.location || 'Nashik, Maharashtra'}</strong>.<br><br>
      📌 <strong>Summary:</strong> ${summary}<br><br>
      🎓 <strong>Degree:</strong> Pursuing B.E. in Artificial Intelligence & Data Science (AIDS) (2025–2028).<br>
      📜 <strong>Diploma:</strong> Computer Engineering Diploma Graduate (2022–2025).`;

    // 10. Fallback / General Query
    } else {
      aiAnswer = `✨ <strong>AI Assistant Response for:</strong> <em>"${input}"</em><br><br>
      Onkar Talekar is an <strong>AI & Data Science Student</strong> and <strong>Full-Stack Python Developer</strong> skilled in Python, Django, C/C++, Java, SQL, PyTorch, and Data Analytics.<br><br>
      💡 <em>Try asking me about Onkar's skills, education, internships, projects, certifications, or contact details!</em>`;
    }

    if (outputBox) {
      outputBox.innerHTML = `
        <div style="color: #00f2fe; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.8rem;">
          <i class="fa-solid fa-robot"></i> Onkar AI Assistant Response
        </div>
        <div style="color: #e2e8f0; font-size: 0.98rem; line-height: 1.7;">${aiAnswer}</div>
      `;
      outputBox.style.display = "block";
    }
  }, 800);
}

// Immediate rendering call on script load
if (typeof renderDynamicPortfolioData === "function") {
  try {
    renderDynamicPortfolioData();
  } catch(e) {}
}
