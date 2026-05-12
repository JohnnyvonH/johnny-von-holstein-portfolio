import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
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
    variant: 'wildlife',
  },
  {
    title: 'Autonomous Labs',
    description:
      'A Flask-based lab platform for automated data upload, real-time monitoring, multimodal telemetry, anomaly detection, and Microsoft Teams alerting.',
    stack: ['Python', 'Flask', 'React', 'WebSockets'],
    image: autonomousDashboardImage,
    imageAlt: 'Autonomous Labs dashboard screenshot',
    githubUrl: 'https://github.com/JohnnyvonH/autonomous-labs-local',
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

      <footer className="footer" id="contact">
        <div>
          <h2>Let’s connect.</h2>
          <p>Based in Warwickshire, UK and open to high-impact engineering roles and collaboration.</p>
        </div>
        <address>
          <a href="mailto:johnnyvonh@gmail.com"><Mail size={18} /> johnnyvonh@gmail.com</a>
          <span><MapPin size={18} /> Remote</span>
          <a href="https://www.linkedin.com/in/johnny-v-330a45b2" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          <a href="https://github.com/JohnnyvonH" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
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

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#portfolio">Johnny von Holstein</a>
      <nav>
        <a href="#portfolio">Portfolio</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#github">GitHub</a>
        <a href="#contact">Contact</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub profile">
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

createRoot(document.getElementById('root')).render(<App />);
