"use client";

import ProjectGallery from "@/components/ProjectGallery";
import { useEffect, useState } from "react";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nshuti Yves",
  jobTitle: "Junior Developer and Software Tester",
  url: "https://github.com/25485YvesNshuti",
  sameAs: [
    "https://github.com/25485YvesNshuti",
    "https://gitlab.com/25485YvesNshuti",
    "https://www.linkedin.com/in/nshuti-yves-aa7602285",
  ],
};

const quickStats = [
  { value: "3+", label: "Years learning and building" },
  { value: "5+", label: "Projects in Java and web apps" },
  { value: "100%", label: "Detail-focused delivery" },
];

const valuePillars = [
  {
    title: "Reliable software",
    description:
      "I care about clean architecture, secure APIs, and systems that are easy to maintain over time.",
  },
  {
    title: "Test-aware mindset",
    description:
      "I don't just build features; I look for edge cases, regressions, and user pain points before they become problems.",
  },
  {
    title: "Practical problem solving",
    description:
      "From internal business tools to APIs and dashboards, I focus on creating solutions that help people do real work faster.",
  },
];

const approachCards = [
  {
    title: "Business systems",
    description:
      "I build tools that help teams manage operations, records, and business workflows more efficiently.",
  },
  {
    title: "Product UI",
    description:
      "I create interfaces that are clear, responsive, and pleasant to use across desktop and mobile screens.",
  },
  {
    title: "Quality-first delivery",
    description:
      "I validate behavior early, catch issues before release, and make sure the final product feels dependable.",
  },
];

const experiences = [
  {
    company: "B-ONLINE Ltd",
    role: "Junior Software Tester",
    period: "October 2025 – Present",
    location: "Kigali, Rwanda",
    points: [
      "Review product behavior, reproduce defects, and support quality checks for software releases.",
      "Validate workflows across business applications, helping teams catch issues before they reach users.",
      "Work closely with engineers and stakeholders to improve product quality and the user experience.",
    ],
  },
  {
    company: "Orion Systems & Design",
    role: "Full Stack Development Intern",
    period: "May 2025 – May 2026",
    location: "Kigali, Rwanda",
    points: [
      "Contributed to the Telecom Regulatory Management Information System, Online Auction Platform, and School Management System using Spring Boot and Thymeleaf.",
      "Developed role-based access control, department, and currency management modules, including CRUD operations, backend services, REST APIs, and Bootstrap/JavaScript interfaces.",
      "Collaborated through GitLab code reviews and sprint planning, and strengthened debugging and deployment skills.",
    ],
  },
  {
    company: "Desc Softlab Company",
    role: "IT Support Officer",
    period: "September 2023 – May 2024",
    location: "Kigali, Rwanda",
    points: [
      "Troubleshot software and hardware issues and helped staff and job seekers use digital systems.",
      "Maintained system reliability and supported improvements to internal IT processes.",
    ],
  },
];

const skillGroups = [
  {
    title: "Programming",
    items: ["Java", "JavaScript", "HTML", "CSS", "SQL", "PL/SQL"],
  },
  {
    title: "Frameworks",
    items: ["Spring Boot", "React.js", "Thymeleaf", "Bootstrap"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "Oracle"],
  },
  {
    title: "Tools",
    items: ["Git", "GitLab", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"],
  },
  {
    title: "Practices",
    items: [
      "REST APIs",
      "MVC",
      "Agile",
      "Secure coding",
      "Manual and automated testing",
      "Troubleshooting",
    ],
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : prefersDark
        ? "dark"
        : "light";

    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) {
      return;
    }

    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme, hasMounted]);

  const structuredData = JSON.stringify(personStructuredData).replace(
    /</g,
    "\\u003c",
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <nav className="site-nav page-width" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Nshuti Yves home">
            <span className="brand-mark" aria-hidden="true">
              NY
            </span>
            <span>Nshuti Yves</span>
          </a>

          <div className="nav-actions">
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              aria-pressed={theme === "dark"}
            >
              <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero page-width" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-intro-row">
              <p className="eyebrow">Junior developer · software tester</p>
              <span className="availability-pill">Available for opportunities</span>
            </div>
            <h1 id="hero-title">
              Nshuti <span>Yves</span>
            </h1>
            <p className="hero-lead">
              I design practical digital products that are easy to use, reliable under pressure, and built with quality in mind.
            </p>
            <p className="hero-location">Based in Kigali, Rwanda</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work
              </a>
              <a className="button button-outline" href="#contact">
                Let&apos;s talk
              </a>
            </div>
            <div className="hero-stats" aria-label="Key portfolio stats">
              {quickStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-panel" aria-label="Professional focus">
            <span className="panel-index">01 / PROFILE</span>
            <div className="panel-monogram" aria-hidden="true">
              NY
            </div>
            <p className="panel-caption">Thoughtful software. Dependable systems.</p>
            <p className="panel-stack">Java · Spring Boot · React</p>
            <div className="panel-badges" aria-label="Core strengths">
              <span>Security-aware</span>
              <span>Clean backend</span>
              <span>UI clarity</span>
            </div>
          </aside>
        </section>

        <section className="section page-width" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">Why people choose to work with me</p>
            <h2 id="about-title">I bring structure, clarity, and care to every product.</h2>
          </div>

          <div className="feature-grid">
            {valuePillars.map((item) => (
              <article className="feature-card" key={item.title}>
                <div className="feature-icon" aria-hidden="true">
                  ✦
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="about-copy">
            <p>
              I’m an enthusiastic, detail-oriented junior developer with hands-on experience in Spring Boot and React.js. I enjoy designing scalable systems, building secure APIs, and creating responsive interfaces that feel easy to use.
            </p>
            <p>
              I value problem-solving, teamwork, maintainable code, and continuous learning. My background also includes software testing, IT support, and collaborating in agile teams where quality and communication matter.
            </p>
          </div>
        </section>

        <section className="section page-width" aria-labelledby="approach-title">
          <div className="section-heading">
            <p className="eyebrow">How I work</p>
            <h2 id="approach-title">I turn business needs into digital products people can trust.</h2>
          </div>

          <div className="approach-grid">
            {approachCards.map((item) => (
              <article className="approach-card" key={item.title}>
                <span className="approach-number" aria-hidden="true">
                  0{approachCards.indexOf(item) + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section section-tinted"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">Where I’ve added value</p>
              <h2 id="experience-title">Experience</h2>
            </div>
            <div className="experience-list">
              {experiences.map((experience) => (
                <article className="experience-item" key={experience.company}>
                  <div className="experience-meta">
                    <p className="experience-period">{experience.period}</p>
                    <p>{experience.location}</p>
                  </div>
                  <div className="experience-detail">
                    <h3>{experience.role}</h3>
                    <p className="experience-company">{experience.company}</p>
                    {experience.points.length > 0 && (
                      <ul>
                        {experience.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section page-width" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">Projects</h2>
            <p className="section-intro">
              Details are limited to what I could verify from the local project code and the experience information provided. Demo and repository links are omitted until public destinations can be confirmed.
            </p>
          </div>
          <ProjectGallery />
        </section>

        <section
          className="section section-tinted"
          id="education"
          aria-labelledby="education-title"
        >
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">Learning</p>
              <h2 id="education-title">Education & certifications</h2>
            </div>
            <div className="education-grid">
              <article className="education-card">
                <p className="experience-period">2022 – 2025</p>
                <h3>Bachelor of Information Management</h3>
                <p>Adventist University of Central Africa (AUCA)</p>
                <p>Department of Information Technology · Kigali, Rwanda</p>
              </article>
              <article className="education-card">
                <p className="experience-period">2018 – 2021</p>
                <h3>A2 Certificate</h3>
                <p>Gisenyi Adventist Secondary School</p>
                <p>Gisenyi, Rwanda</p>
              </article>
            </div>
            <div className="certificates">
              <h3>Certificates</h3>
              <ul className="tag-list">
                <li>Networking Essentials</li>
                <li>AI Career Essentials</li>
                <li>Introduction to Network Operations</li>
                <li>Advanced Network Operations 2.0</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section page-width" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">My toolkit</p>
            <h2 id="skills-title">Skills & languages</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tag-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
            <article className="skill-group">
              <h3>Languages</h3>
              <ul className="language-list">
                <li>
                  <span>English</span>
                  <span>Very good</span>
                </li>
                <li>
                  <span>Kinyarwanda</span>
                  <span>Native</span>
                </li>
                <li>
                  <span>Swahili</span>
                  <span>Good</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-content">
            <p className="eyebrow">Let&apos;s connect</p>
            <h2 id="contact-title">Have a project or opportunity in mind?</h2>
            <p>
              I’m open to roles and collaborations where I can contribute solid engineering, thoughtful testing, and a strong user-first mindset.
            </p>
            <div className="contact-cta-row">
              <a className="button button-light" href="mailto:nshutiyves70@gmail.com">
                Email Nshuti
              </a>
              <span className="availability-badge">Available for junior dev and QA roles</span>
            </div>
            <div className="contact-details">
              <a href="tel:+250781114017">+250 781 114 017</a>
              <a href="mailto:nshutiyves70@gmail.com">nshutiyves70@gmail.com</a>
              <span>Kigali, Rwanda</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-content">
          <p>© {new Date().getFullYear()} Nshuti Yves</p>
          <nav aria-label="Social profiles">
            <a href="https://github.com/25485YvesNshuti" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://gitlab.com/25485YvesNshuti" target="_blank" rel="noreferrer">
              GitLab
            </a>
            <a
              href="https://www.linkedin.com/in/nshuti-yves-aa7602285"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
