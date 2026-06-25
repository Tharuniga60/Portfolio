import { projects } from '../data/portfolioData';

function ProjectCard({ project, delay }) {
  return (
    <div className={`col-md-6 col-12 scroll-reveal${delay ? ` delay-${delay}` : ''}`}>
      <div className="custom-card project-card">
        <div>
          <div className="project-icon" aria-hidden="true">
            <i className={project.icon}></i>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.desc}</p>
          <div className="project-highlights">
            <strong>Key Highlights:</strong>
            <ul className="project-highlights-list">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="project-links">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-accent"
            >
              <i className="fa-brands fa-github me-1"></i> Source Code
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                <i className="fa-solid fa-arrow-up-right-from-square me-1"></i> Live Demo
              </a>
            ) : (
              <a href="#" className="btn btn-accent disabled" aria-disabled="true">
                <i className="fa-solid fa-arrow-up-right-from-square me-1"></i> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const delays = [null, 1, null, 1];

  return (
    <section className="section-bg-white" id="projects">
      <div className="container">
        <div className="section-title-container text-center scroll-reveal">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="row g-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={delays[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
