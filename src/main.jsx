import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Star,
} from 'lucide-react';
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

const activity = [
  ['Merged pull request #128', 'Improve transaction import performance', '2 days ago'],
  ['Updated wildlife-camera-system', 'Dashboard screenshots and release documentation', 'Recently'],
  ['Improved autonomous-labs-local', 'Telemetry dashboard, alerting, and CI checks', 'Recently'],
  ['Published financial-tracker', 'React finance dashboard deployed through GitHub Pages', 'Recently'],
];

const repos = [
  ['financial-tracker', 'JavaScript', 'Public', 'GitHub Pages'],
  ['wildlife-camera-system', 'Python', 'Private', 'Dashboard'],
  ['autonomous-labs-local', 'Python', 'Private', 'Lab platform'],
  ['CANRaw', 'Python', 'Private', 'Vehicle data'],
];

const experience = [
  ['Jaguar Land Rover', 'Software Development and Systems Integration Specialist building Python automation, Flask APIs, and engineering workflow platforms.'],
  ['Quanta Dialysis Technologies', 'Software engineer in a regulated medical device environment, developing internal tools, test automation, and reliability improvements.'],
  ['Credit Suisse', 'Prime Financing IT experience across server environments, database support, QA environments, and .NET reporting systems.'],
  ['Oxford Brookes University', 'BSc Computer Science, First Class Honours, with dissertation work focused on artificial intelligence and algorithmic problem solving.'],
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

      <section className="activity-section" id="github">
        <div className="experience-strip" aria-label="Experience highlights">
          {experience.map(([company, detail]) => (
            <article key={company}>
              <h3>{company}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <h2>Activity / Build Notes</h2>
        <div className="activity-grid">
          <div className="timeline">
            {activity.map(([title, detail, time], index) => (
              <article className="timeline-row" key={title}>
                <span className="timeline-icon">{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
                <time>{time}</time>
              </article>
            ))}
          </div>
          <div className="repo-table">
            <h3>Recent Repositories</h3>
            {repos.map(([name, language, visibility, focus]) => (
              <div className="repo-row" key={name}>
                <span>{name}</span>
                <small>{language}</small>
                <small><Star size={14} /> {visibility}</small>
                <small>{focus}</small>
              </div>
            ))}
            <a href="https://github.com/JohnnyvonH?tab=repositories" target="_blank" rel="noreferrer">
              View all repositories on GitHub <ArrowRight size={16} />
            </a>
          </div>
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

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#portfolio">Johnny von Holstein</a>
      <nav>
        <a href="#portfolio">Portfolio</a>
        <a href="#projects">Projects</a>
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
        <span>Activity Overview</span>
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
