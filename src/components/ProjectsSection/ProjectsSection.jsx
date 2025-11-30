// src/components/ProjectsSection/ProjectsSection.jsx
import './ProjectsSection.css';
import { softwareProjects, gameProjects } from '../../data/projectsData';

function SoftwareProjectCard({ project }) {
  const { icon, title, summary, techSummary, metric, links } = project;

  return (
    <article className="project-card">
      <header className="project-card-header">
        {icon && <div className="project-card-icon">{icon}</div>}
        <h3 className="project-card-title">{title}</h3>
      </header>

      {summary && <p className="project-card-summary">{summary}</p>}

      {techSummary && (
        <p className="project-card-tech">
          <span className="project-card-label">Tech:</span> {techSummary}
        </p>
      )}

      {metric && <p className="project-card-metric">▲ {metric}</p>}

      <div className="project-card-links">
        {links?.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            🔗 GitHub
          </a>
        )}

        {links?.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noreferrer"
            className="project-link project-link-muted"
          >
            🌐 Live
          </a>
        )}
      </div>
    </article>
  );
}

function GameProjectCard({ project }) {
  const { icon, title, summary, techSummary, metric, links } = project;

  return (
    <article className="game-card">
      <header className="game-card-header">
        {icon && <div className="game-card-icon">{icon}</div>}
        <h3 className="game-card-title">{title}</h3>
      </header>

      {summary && <p className="game-card-summary">{summary}</p>}

      {techSummary && (
        <p className="game-card-tech">
          <span className="game-card-label">Tech:</span> {techSummary}
        </p>
      )}

      {metric && <p className="game-card-metric">▲ {metric}</p>}

      <div className="game-card-links">
        {links?.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            🔗 GitHub
          </a>
        )}

        {links?.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noreferrer"
            className="project-link project-link-muted"
          >
            🎥 Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <div className="projects-section">
      <div className="projects-inner">
        {/* Overall header */}
        <header className="projects-header">
          <p className="section-kicker">FEATURED WORK</p>
          <h2 className="projects-title">Projects</h2>
          <p className="projects-intro">
            Software platforms, MES tooling, and game systems that show how I
            design, ship, and support real products and player experiences.
          </p>
        </header>

        {/* Software grid (layout A) */}
        <section className="projects-group">
          <h3 className="projects-group-title">Software &amp; Web Projects</h3>
          <div className="software-grid">
            {softwareProjects.map((project) => (
              <SoftwareProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Games carousel (layout C) */}
        <section className="projects-group">
          <h3 className="projects-group-title">Game Development Projects</h3>
          <p className="games-carousel-hint">
            Swipe / scroll horizontally to explore game projects.
          </p>
          <div className="games-carousel">
            <div className="games-track">
              {gameProjects.map((project) => (
                <GameProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
