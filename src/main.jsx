import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import './styles.css';
import financeTrackerImage from './assets/finance-tracker-live.png';
import wildlifeDashboardImage from './assets/wildlife-dashboard.png';
import autonomousDashboardImage from './assets/autonomous-dashboard.png';

const techLogos = ['Py', 'Fl', 'Re', 'SQL', 'API', 'CI'];

const projects = [
  {
    title: 'Finance Tracker',
    description:
      'A full-stack personal finance application for tracking income, expenses, budgets, recurring transactions, savings goals, and financial reports with a React UI and cloud sync.',
    stack: ['React', 'Vite', 'Supabase', 'GitHub Pages'],
    image: financeTrackerImage,
    imageAlt: 'Finance Tracker dashboard screenshot',
    githubUrl: 'https://github.com/JohnnyvonH/financial-tracker',
    caseStudy: {
      problem: 'Personal finance data is easy to enter but hard to turn into useful habits.',
      approach: 'Built a focused React dashboard with budget views, recurring transactions, reports, goals, and Supabase-backed sync.',
      result: 'A published, installable finance workspace that demonstrates product thinking, frontend delivery, and data ownership.',
    },
    variant: 'finance',
  },
  {
    title: 'Wildlife Project',
    description:
      'A wildlife camera dashboard for camera health, visit review, feeder monitoring, weekly digests, training data, and remote access workflows.',
    stack: ['Python', 'Flask', 'Dashboard UI', 'Testing'],
    image: wildlifeDashboardImage,
    imageAlt: 'Wildlife camera dashboard screenshot',
    githubUrl: 'https://github.com/JohnnyvonH/wildlife-camera-system',
    caseStudy: {
      problem: 'Wildlife camera data needs review, storage, camera health visibility, and repeatable monitoring workflows.',
      approach: 'Created a Python dashboard around visits, feeder state, training data, backups, digest previews, and device health.',
      result: 'A local-first monitoring system with clearer operational visibility and a stronger base for future computer vision work.',
    },
    variant: 'wildlife',
  },
  {
    title: 'Autonomous Labs',
    description:
      'A Flask-based lab platform evolving into a command-center dashboard for rig status, alert review, live data, multimodal telemetry, and operator workflows.',
    stack: ['Python', 'Flask', 'React', 'WebSockets'],
    image: autonomousDashboardImage,
    imageAlt: 'Autonomous Labs dashboard screenshot',
    githubUrl: 'https://github.com/JohnnyvonH/autonomous-labs-local',
    caseStudy: {
      problem: 'Lab telemetry and multimodal data can fragment across files, tools, and alert channels.',
      approach: 'Built a Flask and React platform with command-center views, live data pages, alert workflows, WebSocket updates, anomaly detection, and Teams alerting.',
      result: 'A practical lab operations platform that connects backend services, telemetry, neural network outputs, and engineer response loops.',
    },
    variant: 'labs',
  },
];

const experience = [
  {
    company: 'Jaguar Land Rover',
    role: 'Software Development and Systems Integration Specialist',
    period: 'Sep 2024 - Present',
    location: 'Gaydon, UK',
    summary:
      'Building Python-based automation, Flask APIs, and internal engineering platforms that support vehicle testing, validation, and data-driven workflows.',
    bullets: [
      'Develop backend services and REST APIs for ingesting, processing, and exposing structured engineering and test data.',
      'Integrate internal tools, test frameworks, and analysis platforms so engineering teams can trust the flow of data across systems.',
      'Improve automation, data consistency, and interoperability across validation workflows, reducing manual effort and strengthening confidence in results.',
      'Awarded Creator of the Quarter within the first year for innovation, technical impact, and delivery of high-value engineering solutions.',
    ],
    stack: ['Python', 'Flask', 'REST APIs', 'Linux', 'Agile'],
    featured: true,
  },
  {
    company: 'Quanta Dialysis Technologies',
    role: 'Software Engineer',
    period: 'Aug 2022 - Sep 2024',
    location: 'Alcester, UK',
    summary:
      'Worked across embedded software and software testing in a regulated medical device environment, building tools that improved engineering efficiency and reliability.',
    bullets: [
      'Developed internal software tools for test workflow automation, error detection, and process improvements.',
      'Contributed to the development, validation, and maintenance of dialysis machine software.',
      'Delivered technical presentations in Agile ceremonies and helped translate findings into practical development plans.',
      'Mentored new engineering team members and supported knowledge transfer across the software function.',
    ],
    stack: ['C', 'C++', 'C#', 'Testing', 'Regulated software'],
    featured: true,
  },
  {
    company: 'Quanta Dialysis Technologies',
    role: 'Software Engineering Intern',
    period: 'Sep 2020 - Sep 2021',
    location: 'Alcester, UK',
    summary:
      'Placement year focused on internal APIs, dashboards, testing processes, and safety-critical development practices.',
  },
  {
    company: 'Credit Suisse',
    role: 'Prime Financing IT - Internship & Work Experience',
    period: '2019 - 2020',
    location: 'London, UK',
    summary:
      'Supported server and database environments, security configurations, QA environments, and .NET reporting systems.',
  },
  {
    company: 'Oxford Brookes University',
    role: 'BSc Computer Science, First Class Honours',
    period: '2018 - 2022',
    location: 'Oxford, UK',
    summary:
      'Dissertation focused on artificial intelligence and algorithmic problem solving.',
  },
];

const skillGroups = [
  {
    title: 'Backend & Integration',
    skills: ['Python', 'Flask', 'REST APIs', 'SQL', 'System integration', 'Data pipelines'],
  },
  {
    title: 'Frontend & Dashboards',
    skills: ['React', 'Vite', 'Responsive UI', 'Dashboard design', 'Data visualization'],
  },
  {
    title: 'Engineering Practice',
    skills: ['Agile delivery', 'CI/CD', 'Testing', 'Linux', 'Documentation', 'Requirements analysis'],
  },
  {
    title: 'Data & AI',
    skills: ['Machine learning fundamentals', 'Neural networks', 'Telemetry', 'Automation', 'Anomaly detection'],
  },
];

const impactItems = [
  ['Creator of the Quarter', 'Recognised at Jaguar Land Rover for innovation, technical impact, and delivery of high-value engineering tools.'],
  ['Regulated Engineering', 'Built software and test tooling in medical device and enterprise engineering environments where reliability matters.'],
  ['Systems Mindset', 'Comfortable joining backend services, dashboards, data stores, test frameworks, and real-world engineering workflows.'],
  ['First Class CS', 'BSc Computer Science with dissertation work focused on AI and algorithmic problem solving.'],
];

const exploringItems = [
  'Autonomous systems and real-time engineering telemetry',
  'Backend platforms that make test and validation data easier to trust',
  'Applied AI and anomaly detection for practical engineering workflows',
  'Tracking modern AI systems and agentic tooling, including OpenAI Codex, Claude, and Perplexity',
  'Personal finance tooling, clean dashboards, and user-owned data',
];

function App() {
  return (
    <main className="site-shell">
      <Header />
      <section className="hero" id="portfolio">
        <div className="hero-copy">
          <h1>
            Johnny von Holstein
            <span>Portfolio</span>
          </h1>
          <p className="lead">Selected work in product, data, and automation.</p>
          <p className="intro">
            Software engineer and systems integration specialist building Python backend services,
            Flask APIs, React dashboards, and data-driven engineering tools.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="https://github.com/JohnnyvonH" target="_blank" rel="noreferrer">
              <Github size={20} />
              View GitHub
            </a>
            <a className="button ghost" href="#projects">
              Explore Projects
              <ArrowRight size={18} />
            </a>
            <a
              className="button ghost"
              href="https://johnnyvonh.github.io/johnny-von-holstein-portfolio/johnny-von-holstein-cv.pdf"
              download="Johnny-von-Holstein-CV.pdf"
              type="application/pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
          <div className="tech-strip" aria-label="Technology stack">
            {techLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-label="Code and GitHub activity preview">
          <CodePanel />
          <ActivityCard />
        </div>
        <a className="scroll-cue" href="#projects" aria-label="Scroll to projects">
          <ChevronDown />
        </a>
      </section>

      <ExperienceSection />

      <SkillsSection />

      <ImpactSection />

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <h2>Featured Projects</h2>
          <a href="https://github.com/JohnnyvonH" target="_blank" rel="noreferrer">
            See more on GitHub <ArrowRight size={16} />
          </a>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectFeature key={project.title} project={project} />
          ))}
        </div>
      </section>

      <ExploringSection />

      <footer className="footer" id="contact">
        <div>
          <h2>Let's connect.</h2>
          <p>Remote / Warwickshire, UK. Open to high-impact engineering roles and collaboration.</p>
        </div>
        <address>
          <a href="mailto:johnnyvonh@gmail.com"><Mail size={18} /> johnnyvonh@gmail.com</a>
          <span><MapPin size={18} /> Remote / Warwickshire, UK</span>
          <a href="https://www.linkedin.com/in/johnny-v-330a45b2" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href="https://github.com/JohnnyvonH" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          <a
            href="https://johnnyvonh.github.io/johnny-von-holstein-portfolio/johnny-von-holstein-cv.pdf"
            download="Johnny-von-Holstein-CV.pdf"
            type="application/pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Download size={18} /> Download CV
          </a>
        </address>
      </footer>
    </main>
  );
}

function ExperienceSection() {
  const featured = experience.filter((item) => item.featured);
  const compact = experience.filter((item) => !item.featured);

  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <h2>Work History</h2>
        <p>Backend systems, regulated engineering, and applied software delivery.</p>
      </div>
      <div className="experience-featured">
        {featured.map((item) => (
          <article className="experience-card" key={item.company}>
            <div className="experience-meta">
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              <span>{item.period}</span>
              <span>{item.location}</span>
            </div>
            <div className="experience-detail">
              <p>{item.summary}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="stack-list">
                {item.stack.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="experience-compact">
        {compact.map((item) => (
          <article key={`${item.company}-${item.role}`}>
            <h3>{item.company}</h3>
            <p>{item.role}</p>
            <span>{item.period}</span>
            <small>{item.summary}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <h2>Technical Skills</h2>
        <p>A practical stack shaped around backend systems, dashboards, automation, and data visibility.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <div className="stack-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="impact-section" id="impact">
      <div className="section-heading">
        <h2>Selected Impact</h2>
        <p>Signals that connect the project work to real engineering environments.</p>
      </div>
      <div className="impact-grid">
        {impactItems.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#portfolio">Johnny von Holstein</a>
      <nav>
        <a href="#portfolio">Portfolio</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="https://github.com/JohnnyvonH" target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <Github size={22} />
        </a>
      </nav>
    </header>
  );
}

function CodePanel() {
  const lines = [
    'import pandas as pd',
    'from datetime import datetime',
    '',
    'def summarize(data):',
    '  df = pd.DataFrame(data)',
    "  df['date'] = pd.to_datetime(df['date'])",
    "  monthly = df.resample('M').agg({'amount': 'sum'})",
    '  return monthly',
    '',
    'print("Building useful things.")',
  ];

  return (
    <div className="code-panel">
      {lines.map((line, index) => (
        <p key={`${line}-${index}`}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <code>{line || ' '}</code>
        </p>
      ))}
    </div>
  );
}

function ActivityCard() {
  return (
    <div className="activity-card">
      <div className="card-title">
        <span>Build Overview</span>
        <small>This week</small>
      </div>
      <div className="bars" aria-hidden="true">
        {[28, 45, 62, 20, 48, 16, 36].map((height, index) => (
          <span key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
      <div className="activity-stats">
        <b>32</b>
        <b>6</b>
        <b>12</b>
      </div>
    </div>
  );
}

function ProjectFeature({ project }) {
  return (
    <article className="project-feature">
      <ProjectMockup variant={project.variant} />
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          View GitHub <ArrowRight size={16} />
        </a>
        <div className="case-study">
          <h4>Case Study</h4>
          <dl>
            <div>
              <dt>Problem</dt>
              <dd>{project.caseStudy.problem}</dd>
            </div>
            <div>
              <dt>Approach</dt>
              <dd>{project.caseStudy.approach}</dd>
            </div>
            <div>
              <dt>Result</dt>
              <dd>{project.caseStudy.result}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}

function ProjectMockup({ variant }) {
  const project = projects.find((item) => item.variant === variant);
  return (
    <div className={`mockup image-mockup ${variant}`}>
      <img src={project.image} alt={project.imageAlt} />
    </div>
  );
}

function ExploringSection() {
  return (
    <section className="exploring-section" id="exploring">
      <div>
        <h2>Currently Exploring</h2>
        <p>
          The common thread is useful engineering software: tools that reduce friction, make
          data visible, and help teams act with more confidence.
        </p>
      </div>
      <ul>
        {exploringItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);

