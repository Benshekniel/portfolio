import feather from "feather-icons";

const highlights = [
  {
    label: "Years of experience",
    value: "1+",
  },
  {
    label: "Projects delivered",
    value: "7+",
  },
  {
    label: "Technologies",
    value: "20+",
  },
  {
    label: "Education level",
    value: "BSc",
  },
];

const technicalSkills = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "C#", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend Technologies",
    items: ["HTML5", "CSS3", "Sass", "Tailwind CSS", "React.js", "Next.js"],
  },
  {
    category: "Mobile Frameworks",
    items: ["Flutter", "React Native"],
  },
  {
    category: "Backend Technologies",
    items: ["Node.js", "Express.js", "Spring Boot", "PHP"],
  },
  {
    category: "Database Systems",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase (Firestore)"],
  },
  {
    category: "Cloud Platforms",
    items: ["AWS (S3, RDS, EC2, DynamoDB)", "SST"],
  },
  {
    category: "DevOps & Tools",
    items: ["CI/CD", "Docker", "Git", "GitHub", "GitLab", "Postman"],
  },
  {
    category: "UI/UX & Design",
    items: [
      "Figma",
      "Adobe XD",
      "Wireframing",
      "UX Research",
      "Design Systems",
    ],
  },
  {
    category: "Management & Agile",
    items: ["Jira", "Trello", "Azure DevOps"],
  },
];

const experience = [
  {
    company: "Sezenta (Pvt) Ltd",
    role: "Software Engineer Intern",
    period: "December 2025 - June 2026",
    bullets: [
      "Developed and deployed full-stack web application features using React/Next.js and Node.js, and used SST framework to deploy the application directly to AWS contributing to production-level systems.",
      "Planned and built RESTful API integrations enabling seamless data exchange across internal and external systems, reducing manual processing overhead by 30% and improving platform reliability.",
      "Introduced automated testing strategies and optimised application performance across continuous delivery pipelines, cutting defect rates by 25% and accelerating feature delivery cycles by two weeks per sprint.",
    ],
  },  
];

const education = [
  {
    school: "University of Colombo School of Computing (UCSC)",
    program: "Bachelor of Science in Computer Science (BSc. in CS)",
    period: "2023 - 2026",
    modules: "CGPA 3.0/4.0",
  },
  {
    school: "Bt/ St. Michael’s College National School",
    program: "GCE Advanced Level – Combined Maths Stream",
    period: "",
    modules: "",
  },
];

const certifications = [
  "AWS Educate Introduction to Cloud 101 (2024)",
  "DevOps 101 (2025)",
];

const traits = [
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Leadership",
  "Flexibility",
  "Quick Learner",
  "Hiking",
  "Researching",
  "Playing Chess",
  "Learning New Things",
  "Blog Writing",
];

const contactItems = [
  {
    icon: "mail",
    text: "benshekniel@gmail.com",
  },
  {
    icon: "message-circle",
    text: "+94 76 326 3712",
  },
  {
    icon: "map-pin",
    text: "Sri Lanka",
  },
];

const socialItems = [
  { icon: "download", label: "Download CV", href: "/portfolio/Resume.pdf" },
  { icon: "github", label: "GitHub", href: "https://github.com/benshekniel" },
  { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/benshekniel" },
  { icon: "globe", label: "Medium", href: "https://medium.com/@benshekniel" },
];

const references = [
  {
    name: "Ms. S Hamsavasini",
    title: "Lecturer at University of Colombo School of Computing",
    email: "vhs@ucsc.cmb.ac.lk",
  },
  {
    name: "Shafi Ahamed",
    title: "CEO & Managing Director, Szamee (Pvt) Ltd",
    email: "shafi@szamee.com",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="logo">
          <span
            className="button-icon-head"
            aria-hidden="true"
            dangerouslySetInnerHTML={{
              __html: feather.icons.code.toSvg(),
            }}
          />
          Portfolio
        </div>
        <nav className="nav-links">
          <a href="#profile" className="nav-link">
            Profile
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
        <a className="cta" href="mailto:benshekniel@gmail.com">
          Hire me
        </a>
      </header>

      <main>
        <section className="hero" id="profile">
          <div className="hero-text">
            <p className="eyebrow">Software Developer</p>
            <h1 className="hero-title">
              Hello I&apos;m
              <span className="hero-typewriter" aria-label="Benshekniel Thayalan">
                <span className="hero-typewriter__text">Benshekniel T.</span>
              </span>
            </h1>
            <p className="lead">
              I am a highly motivated and experienced software engineer with a strong foundation in
              software development and creating user interfaces that are easy to use and visually
              appealing. I am a BSc in Computer Science holder and I am focused on building reliable,
              practical software solutions.
            </p>
            <div className="hero-actions">
              <a className="primary" href="/portfolio/Resume.pdf" target="_blank" rel="noreferrer">
                <span
                  className="button-icon"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html: feather.icons.download.toSvg(),
                  }}
                />
                Download CV
              </a>
              <div className="social-row">
                {socialItems.slice(1).map((item) => (
                  <a key={item.label} className="icon-button" href={item.href} aria-label={item.label}>
                    <span
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{
                        __html: feather.icons[item.icon].toSvg(),
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-chips">
              {contactItems.map((item) => (
                <div key={item.text}>
                  <span
                    className="chip-icon"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{
                      __html: feather.icons[item.icon].toSvg(),
                    }}
                  />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="ring">
              <svg className="ring-svg" viewBox="0 0 240 240" aria-hidden="true">
                <circle cx="120" cy="120" r="110" />
              </svg>
              <div className="ring-inner">
                <div className="avatar">
                  <img src="../portfolio/images/profile.png"  alt="Benshekniel Thayalan" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="highlights">
          {highlights.map((item) => (
            <div key={item.label} className="highlight-card">
              <span className="highlight-value">{item.value}</span>
              <span className="highlight-label">{item.label}</span>
            </div>
          ))}
        </section>

        <section className="section-stack">
          <div className="panel" id="skills">
            <h2>Technical Skills</h2>
            <ul className="technical-skills-grid">
              {technicalSkills.map((group) => (
                <li key={group.category}>
                  <strong>{group.category}</strong>
                  <span>{group.items.join(", ")}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel" id="education">
            <h2>Education</h2>
            <ul className="education-list">
              {education.map((item) => (
                <li key={`${item.school}-${item.program}`}>
                  <div className="row-head">
                    <div className="education-title">
                      <strong>{item.school}</strong>
                      <p className="education-program">{item.program}</p>
                    </div>
                    <em className="period">{item.period}</em>
                  </div>
                  <span>{item.modules}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel" id="certificates">
            <h2>Certificate</h2>
            <ul className="experience-bullets">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>

          <div className="panel" id="experience">
            <h2>Professional Experience</h2>
            {experience.map((role) => (
              <article key={role.company} className="timeline">
                <div className="row-head">
                  <div className="timeline-title">
                    <h3>{role.company}</h3>
                    <p className="timeline-role">{role.role}</p>
                  </div>
                  <span className="period">{role.period}</span>
                </div>
                <ul className="experience-bullets">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="panel" id="soft-skills">
            <h2>Hobbies & Interests</h2>
            <div className="tags">
              {traits.map((trait) => (
                <span key={trait}>{trait}</span>
              ))}
            </div>
          </div>

          <div className="panel" id="references">
            <h2>References</h2>
            <ul className="references-list">
              {references.map((item) => (
                <li key={item.email}>
                  <strong>{item.name}</strong>
                  <span>{item.title}</span>
                  <span>{item.email}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <h2>Let&apos;s work together</h2>
          <p>Open to software engineering opportunities and collaborations.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/benshekniel">LinkedIn</a>
          <a href="https://benshekniel.com/">Website</a>
          <a href="https://github.com/benshekniel">GitHub</a>
          <a href="https://medium.com/@benshekniel">Medium</a>
        </div>
      </footer>
    </div>
  );
}
