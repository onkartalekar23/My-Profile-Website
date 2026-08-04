/* ==========================================================================
   ONKAR TALEKAR - PORTFOLIO CENTRAL DATA STORE & LOCAL STORAGE MANAGER
   ========================================================================== */

const defaultPortfolioData = {
  profile: {
    name: "Onkar Talekar",
    tagline: "Artificial Intelligence & Data Science Student",
    location: "Nashik, Maharashtra",
    expertise: "AI/ML & Web Systems",
    email: "onkartalekar23@gmail.com",
    github: "https://github.com/onkartalekar23",
    linkedin: "https://www.linkedin.com/in/onkar-talekar-497958360",
    whatsapp: "https://wa.me/qr/753CYNANVRCJO1",
    instagram: "https://www.instagram.com/_onkar_talekar_",
    resumePdf: "Onkar Resume Latest (1)_compressed.pdf",
    professionalSummary: "AI & Data Science undergraduate with a Diploma in Computer Engineering and hands-on industrial experience in C, C++, Java, Python, and Full-Stack Web Development. Focused on engineering data-driven and web-based intelligent software solutions.",
    aboutSubtitle: "Bridging Artificial Intelligence, Data Analytics, and Web Development",
    aboutHeadline: "Passionate Technologist & AI Enthusiast",
    aboutPhoto: "onkar.png",
    bioParagraph1: "Hi, I’m Onkar Talekar — a Computer Engineering diploma graduate currently pursuing a degree in Artificial Intelligence & Data Science (AIDS). I have a strong passion for building clean, modern, and responsive web applications while exploring the practical applications of AI and data-driven technologies.",
    bioParagraph2: "During my diploma, I developed a solid foundation in core programming, web design, and algorithmic problem-solving. Currently through my AIDS degree and hands-on industrial internships, I am gaining experience with Python, data preprocessing, NumPy, Pandas, machine learning concepts, and full-stack web technologies like HTML, CSS, JavaScript, and Django.",
    bioParagraph3: "I enjoy turning ideas into real-world digital solutions and focus on user-friendly design, performance, and mobile responsiveness. My goal is to grow as a skilled developer, contribute to impactful projects, and build intelligent solutions that solve real problems."
  },

  aboutTags: [
    { id: "at1", name: "Python Developer" },
    { id: "at2", name: "AI & Data Science Student" },
    { id: "at3", name: "Frontend Specialist" },
    { id: "at4", name: "Data Analytics" },
    { id: "at5", name: "Creative Problem Solver" }
  ],

  education: [
    { id: "e1", degree: "B.E. in Artificial Intelligence and Data Science", duration: "2022–2025" },
    { id: "e2", degree: "Diploma in Computer Engineering", duration: "2022–2025" },
    { id: "e3", degree: "Secondary School Certificate (SSC)", duration: "2021–2022" }
  ],

  techStack: [
    { id: "ts1", category: "Programming Languages", name: "Python", proficiency: 85 },
    { id: "ts2", category: "Programming Languages", name: "C", proficiency: 85 },
    { id: "ts3", category: "Programming Languages", name: "C++", proficiency: 80 },
    { id: "ts4", category: "Programming Languages", name: "JavaScript", proficiency: 75 },
    { id: "ts5", category: "Programming Languages", name: "SQL", proficiency: 70 },
    { id: "ts6", category: "Data & Visualization", name: "NumPy", proficiency: 75 },
    { id: "ts7", category: "Data & Visualization", name: "Pandas", proficiency: 70 },
    { id: "ts8", category: "Data & Visualization", name: "Power BI", proficiency: 65 },
    { id: "ts9", category: "Data & Visualization", name: "Matplotlib", proficiency: 60 },
    { id: "ts10", category: "Tools & Ecosystem", name: "VS Code", proficiency: 90 },
    { id: "ts11", category: "Tools & Ecosystem", name: "GitHub & Git", proficiency: 80 },
    { id: "ts12", category: "Tools & Ecosystem", name: "Linux", proficiency: 65 },
    { id: "ts13", category: "Tools & Ecosystem", name: "Anaconda", proficiency: 70 }
  ],

  keyProjectsShowcase: [
    { id: "kp1", title: "Drug Recommendation System & Government Scheme Assistant" },
    { id: "kp2", title: "Interactive Personal AI Portfolio Website" },
    { id: "kp3", title: "Online Resume Creator Generator" },
    { id: "kp4", title: "Tours & Travels Booking Platform" },
    { id: "kp5", title: "CS Cake Shop E-commerce Interface" }
  ],

  coreSkillsShowcase: [
    { id: "cs1", name: "HTML5" },
    { id: "cs2", name: "CSS3" },
    { id: "cs3", name: "JavaScript" },
    { id: "cs4", name: "React" },
    { id: "cs5", name: "Python" },
    { id: "cs6", name: "Java" },
    { id: "cs7", name: "C" },
    { id: "cs8", name: "C++" },
    { id: "cs9", name: "PyTorch" },
    { id: "cs10", name: "Django" },
    { id: "cs11", name: "MySQL" },
    { id: "cs12", name: "VB.Net" }
  ],
  
  projects: [
    {
      id: "p1",
      title: "Drug Recommendation & Govt Assistant",
      description: "Machine Learning powered health platform predicting diseases, recommending medications, and suggesting relevant government healthcare schemes.",
      image: "medicare.png",
      tags: ["Python", "Machine Learning", "Healthcare Tech"],
      demoLink: "https://onkartalekar23.github.io/Mediconnect/"
    },
    {
      id: "p2",
      title: "Interactive AI Portfolio Website",
      description: "A luxury responsive portfolio built with modern dark glassmorphism, dynamic animations, interactive studio, and lightbox previews.",
      image: "webprofile.png",
      tags: ["HTML5", "CSS Glassmorphism", "JavaScript"],
      demoLink: "https://onkartalekar0.github.io/Profile-Website/"
    },
    {
      id: "p3",
      title: "Resume Creator Web App",
      description: "An online resume generator enabling users to construct, format, and download professional resumes effortlessly.",
      image: "resumeweb.png",
      tags: ["JavaScript", "HTML/CSS", "Generator"],
      demoLink: "https://onkartalekar23.github.io/Resume-Creater-Website/"
    }
  ],

  projectGallery: [
    { id: "pg1", title: "Cake Shop Project", image: "cake.jpeg" },
    { id: "pg2", title: "Gov Schemes Project", image: "gov.png" },
    { id: "pg3", title: "Tours & Travels Project", image: "flower.jpeg" },
    { id: "pg4", title: "Drug Analytics UI", image: "drug.png" }
  ],

  skills: [
    { id: "s1", name: "HTML5", icon: "html.png" },
    { id: "s2", name: "CSS3", icon: "css.png" },
    { id: "s3", name: "JavaScript", icon: "js.png" },
    { id: "s4", name: "React", icon: "react.png" },
    { id: "s5", name: "Python", icon: "python.png" },
    { id: "s6", name: "Java", icon: "java.png" },
    { id: "s7", name: "C", icon: "c.png" },
    { id: "s8", name: "C++", icon: "c++.png" },
    { id: "s9", name: "PyTorch", icon: "pytorch.png" },
    { id: "s10", name: "Django", icon: "Django.png" },
    { id: "s11", name: "MySQL", icon: "mysql.png" },
    { id: "s12", name: "VB.Net", icon: "vb.png" }
  ],

  techStack: [
    { id: "t1", name: "Python", level: 75, category: "Languages" },
    { id: "t2", name: "C", level: 85, category: "Languages" },
    { id: "t3", name: "C++", level: 80, category: "Languages" },
    { id: "t4", name: "JavaScript", level: 65, category: "Languages" },
    { id: "t5", name: "SQL", level: 40, category: "Languages" },
    { id: "t6", name: "NumPy", level: 75, category: "Data" },
    { id: "t7", name: "Pandas", level: 65, category: "Data" },
    { id: "t8", name: "Power BI", level: 40, category: "Data" },
    { id: "t9", name: "Matplotlib", level: 45, category: "Data" },
    { id: "t10", name: "VS Code", level: 90, category: "Tools" },
    { id: "t11", name: "GitHub & Git", level: 70, category: "Tools" },
    { id: "t12", name: "Linux", level: 60, category: "Tools" }
  ],

  certifications: [
    {
      id: "c1",
      title: "SQL For Data Analytics – Simplilearn",
      description: "Real-world data analysis, complex aggregations, joins, and database analytics workflows.",
      image: "onkarsqlda.jpg"
    },
    {
      id: "c2",
      title: "SQL for Data Science – Simplilearn",
      description: "Advanced SQL techniques, subqueries, window functions, and analytics query optimization.",
      image: "onkarsqlds.jpg"
    },
    {
      id: "c3",
      title: "Generative AI Fundamentals – Simplilearn",
      description: "Foundations of GenAI, prompt engineering techniques, and AI integration in software.",
      image: "onkargai.jpg"
    },
    {
      id: "c4",
      title: "Python for Beginners – Simplilearn",
      description: "Core Python programming, control structures, data structures, and automation scripting.",
      image: "onkarpyb.jpg"
    },
    {
      id: "c5",
      title: "Google Cloud AI Innovation – Simplilearn",
      description: "Introduction to Google Cloud AI services, cloud machine learning models, and deployment.",
      image: "onkarclud.jpg"
    },
    {
      id: "c6",
      title: "KLiC Diploma (C, C++ & Java)",
      description: "Awarded diploma after completing comprehensive courses in C, C++, and Java programming.",
      image: "onkardiploma.jpg"
    },
    {
      id: "c7",
      title: "KLiC Certificate in C Programming",
      description: "Fundamental C programming concepts, memory pointers, logic structures, and core coding principles.",
      image: "onkarc.jpg"
    },
    {
      id: "c8",
      title: "KLiC Certificate in C++ Programming (91%)",
      description: "Hands-on training in object-oriented programming, classes, inheritance, polymorphism, and mini-projects.",
      image: "onkarc++.jpg"
    },
    {
      id: "c9",
      title: "KLiC Certificate in Java Programming",
      description: "Core Java programming, object-oriented concepts, exception handling, and application development.",
      image: "onkarjava.jpg"
    },
    {
      id: "c10",
      title: "Full Stack Python & Django Training",
      description: "6-week industrial training in Python backend development, Django framework, and web application logic.",
      image: "onkartranning.jpg"
    },
    {
      id: "c11",
      title: "JavaScript Certification – STP Education",
      description: "3-month intensive JavaScript training covering dynamic DOM manipulation and front-end programming.",
      image: "Onkarjs.jpg"
    },
    {
      id: "c12",
      title: "CSS Certification – STP Education",
      description: "Web page styling, responsive design layouts, grid & flexbox systems, and UI animation fundamentals.",
      image: "Onkarcss.jpg"
    }
  ],

  internships: [
    {
      id: "i1",
      role: "Data Analytics Intern",
      company: "TechnoHacks Solutions Pvt. Ltd., Nashik",
      duration: "Jan 2026 – Feb 2026",
      points: [
        "Performed data cleaning and statistical analysis using Excel, Python, and Power BI.",
        "Built interactive analytics dashboards and calculated KPIs using DAX queries.",
        "Analyzed Retail, HR, Academic, and COVID-19 datasets to generate business insights."
      ]
    },
    {
      id: "i2",
      role: "Full Stack Python Development Intern",
      company: "Sumago Infotech Pvt. Ltd., Nashik",
      duration: "June 2024 – July 2024",
      points: [
        "Engineered web modules using Python, Django, and modern web stack.",
        "Implemented database integration, backend logic, and user authentication."
      ]
    }
  ]
};

// DATA ACCESS FUNCTIONS
function normalizeTechCategories(data) {
  if (data && data.techStack) {
    data.techStack.forEach(item => {
      if (item.category) {
        const cat = item.category.trim();
        if (cat.toLowerCase().includes("lang")) {
          item.category = "Programming Languages";
        } else if (cat.toLowerCase().includes("data") || cat.toLowerCase().includes("vis")) {
          item.category = "Data & Visualization";
        } else if (cat.toLowerCase().includes("tool") || cat.toLowerCase().includes("eco")) {
          item.category = "Tools & Ecosystem";
        } else if (cat.toLowerCase().includes("frame") || cat.toLowerCase().includes("web")) {
          item.category = "Frameworks & Web";
        }
      }
    });
  }
  return data;
}

function ensureDataDefaults(parsed) {
  if (!parsed) parsed = JSON.parse(JSON.stringify(defaultPortfolioData));
  if (!parsed.profile) parsed.profile = { ...defaultPortfolioData.profile };
  
  if (!parsed.profile.aboutSubtitle) parsed.profile.aboutSubtitle = defaultPortfolioData.profile.aboutSubtitle;
  if (!parsed.profile.aboutHeadline) parsed.profile.aboutHeadline = defaultPortfolioData.profile.aboutHeadline;
  if (!parsed.profile.aboutPhoto) parsed.profile.aboutPhoto = defaultPortfolioData.profile.aboutPhoto;
  if (!parsed.profile.bioParagraph1) parsed.profile.bioParagraph1 = defaultPortfolioData.profile.bioParagraph1;
  if (!parsed.profile.bioParagraph2) parsed.profile.bioParagraph2 = defaultPortfolioData.profile.bioParagraph2;
  if (!parsed.profile.bioParagraph3) parsed.profile.bioParagraph3 = defaultPortfolioData.profile.bioParagraph3;

  if (!parsed.projects || parsed.projects.length === 0) {
    parsed.projects = JSON.parse(JSON.stringify(defaultPortfolioData.projects));
  }
  if (!parsed.skills || parsed.skills.length === 0) {
    parsed.skills = JSON.parse(JSON.stringify(defaultPortfolioData.skills));
  }
  if (!parsed.certifications || parsed.certifications.length === 0) {
    parsed.certifications = JSON.parse(JSON.stringify(defaultPortfolioData.certifications));
  }
  if (!parsed.techStack || parsed.techStack.length === 0) {
    parsed.techStack = JSON.parse(JSON.stringify(defaultPortfolioData.techStack));
  }
  if (!parsed.aboutTags || parsed.aboutTags.length === 0) {
    parsed.aboutTags = JSON.parse(JSON.stringify(defaultPortfolioData.aboutTags));
  }
  if (!parsed.education || parsed.education.length === 0) {
    parsed.education = JSON.parse(JSON.stringify(defaultPortfolioData.education));
  }
  if (!parsed.internships || parsed.internships.length === 0) {
    parsed.internships = JSON.parse(JSON.stringify(defaultPortfolioData.internships));
  }
  if (!parsed.keyProjectsShowcase || parsed.keyProjectsShowcase.length === 0) {
    parsed.keyProjectsShowcase = JSON.parse(JSON.stringify(defaultPortfolioData.keyProjectsShowcase));
  }
  if (!parsed.coreSkillsShowcase || parsed.coreSkillsShowcase.length === 0) {
    parsed.coreSkillsShowcase = JSON.parse(JSON.stringify(defaultPortfolioData.coreSkillsShowcase));
  }
  if (!parsed.projectGallery || parsed.projectGallery.length === 0) {
    parsed.projectGallery = JSON.parse(JSON.stringify(defaultPortfolioData.projectGallery));
  }

  return normalizeTechCategories(parsed);
}

function getPortfolioData() {
  const stored = localStorage.getItem("onkar_portfolio_data");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return ensureDataDefaults(parsed);
    } catch (e) {
      console.error("Error parsing stored portfolio data:", e);
    }
  }
  return ensureDataDefaults(JSON.parse(JSON.stringify(defaultPortfolioData)));
}

function savePortfolioData(data) {
  const normalized = ensureDataDefaults(data);
  try {
    localStorage.setItem("onkar_portfolio_data", JSON.stringify(normalized));
  } catch(e) {}
  if (typeof renderDynamicPortfolioData === "function") {
    renderDynamicPortfolioData();
  }
  return pushCloudData();
}

function resetPortfolioData() {
  const normalized = normalizeTechCategories(JSON.parse(JSON.stringify(defaultPortfolioData)));
  try {
    localStorage.setItem("onkar_portfolio_data", JSON.stringify(normalized));
  } catch(e) {}
  if (typeof renderDynamicPortfolioData === "function") {
    renderDynamicPortfolioData();
  }
  pushCloudData();
  return normalized;
}

function getAdminPassword() {
  try {
    return localStorage.getItem("onkar_admin_password") || "Onkar23@";
  } catch (e) {
    return "Onkar23@";
  }
}

function setAdminPassword(newPassword) {
  try {
    localStorage.setItem("onkar_admin_password", newPassword);
  } catch (e) {}
  return pushCloudData();
}

/* ==========================================================================
   CLOUD STORAGE REALTIME SYNC (CROSS-DEVICE SYNC ENGINE)
   ========================================================================== */
const CLOUD_SYNC_URL = "https://jsonblob.com/api/jsonBlob/019fcc16-5088-7e13-9bca-542d67907cc7";
let isCloudSyncing = false;
let isCloudPushing = false;

function getActiveCloudUrl() {
  return CLOUD_SYNC_URL;
}

// Background Cloud Sync Fetcher with Timestamp Protection
async function fetchCloudData() {
  if (isCloudSyncing || isCloudPushing) return;
  isCloudSyncing = true;
  try {
    const activeUrl = getActiveCloudUrl();
    const cacheBusterUrl = activeUrl + (activeUrl.includes("?") ? "&" : "?") + "t=" + Date.now();
    const response = await fetch(cacheBusterUrl, {
      cache: "no-store",
      headers: { "Pragma": "no-cache", "Cache-Control": "no-cache, no-store" }
    });
    if (response && response.ok) {
      const cloudPayload = await response.json();
      if (cloudPayload && typeof cloudPayload === "object") {
        if (cloudPayload.adminPassword && cloudPayload.adminPassword.trim().length > 0) {
          try {
            localStorage.setItem("onkar_admin_password", cloudPayload.adminPassword);
          } catch(e) {}
        }
        if (cloudPayload.portfolioData) {
          const cloudData = ensureDataDefaults(cloudPayload.portfolioData);
          
          const cloudTimeStr = cloudPayload.lastUpdated || (cloudPayload.portfolioData && cloudPayload.portfolioData._lastUpdated);
          const cloudTime = cloudTimeStr ? new Date(cloudTimeStr).getTime() : 0;

          let localTimeStr = null;
          try {
            const storedRaw = localStorage.getItem("onkar_portfolio_data");
            if (storedRaw) {
              const parsedRaw = JSON.parse(storedRaw);
              localTimeStr = parsedRaw ? parsedRaw._lastUpdated : null;
            }
          } catch(e) {}
          const localTime = localTimeStr ? new Date(localTimeStr).getTime() : 0;

          // ACCEPT CLOUD DATA if cloud timestamp is valid and newer/equal OR if local has no timestamp
          if (!localTimeStr || isNaN(localTime) || (cloudTime > 0 && cloudTime >= localTime)) {
            try {
              localStorage.setItem("onkar_portfolio_data", JSON.stringify(cloudData));
            } catch(e) {}
            if (typeof renderDynamicPortfolioData === "function") {
              renderDynamicPortfolioData();
            }
            if (typeof loadAdminData === "function") {
              loadAdminData();
            }
          }
        }
      }
    }
  } catch (e) {
    console.warn("Cloud sync read notice:", e);
  } finally {
    isCloudSyncing = false;
  }
}

// Push Local State to Cloud (With Lock & Timestamp Tagging)
async function pushCloudData() {
  isCloudPushing = true;
  try {
    const portfolioData = getPortfolioData();
    const nowIso = new Date().toISOString();
    portfolioData._lastUpdated = nowIso;
    try {
      localStorage.setItem("onkar_portfolio_data", JSON.stringify(portfolioData));
    } catch(e) {}

    const adminPassword = getAdminPassword();
    const payload = {
      adminPassword: adminPassword,
      portfolioData: portfolioData,
      lastUpdated: nowIso
    };
    
    let activeUrl = getActiveCloudUrl();
    let res = await fetch(activeUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    return res && res.ok;
  } catch (e) {
    console.warn("Cloud sync write notice:", e);
    return false;
  } finally {
    setTimeout(() => {
      isCloudPushing = false;
    }, 1500);
  }
}

// Trigger initial cloud sync immediately on load & add tab focus listeners
if (typeof window !== "undefined") {
  fetchCloudData();
  setInterval(fetchCloudData, 5000);

  window.addEventListener("focus", fetchCloudData);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      fetchCloudData();
    }
  });
}
