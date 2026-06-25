import { useProgressBars } from '../hooks/useProgressBars';
import { skills } from '../data/portfolioData';

function SkillBar({ name, percent }) {
  return (
    <div className="skill-progress-wrapper">
      <div className="skill-name-label">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" data-width={`${percent}%`}></div>
      </div>
    </div>
  );
}

export default function Skills() {
  useProgressBars();

  return (
    <section id="skills">
      <div className="container">
        <div className="section-title-container text-center scroll-reveal">
          <span className="section-subtitle">Proficiencies</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="row g-4">
          {/* Programming Languages */}
          <div className="col-lg-4 col-md-6 scroll-reveal">
            <div className="custom-card skill-card">
              <h3 className="skill-category-title">
                <i className={skills.languages.icon}></i> {skills.languages.title}
              </h3>
              {skills.languages.items.map((s) => (
                <SkillBar key={s.name} name={s.name} percent={s.percent} />
              ))}
            </div>
          </div>

          {/* Web & Database */}
          <div className="col-lg-4 col-md-6 scroll-reveal delay-1">
            <div className="custom-card skill-card">
              <h3 className="skill-category-title">
                <i className={skills.web.icon}></i> {skills.web.title}
              </h3>
              {skills.web.items.map((s) => (
                <SkillBar key={s.name} name={s.name} percent={s.percent} />
              ))}
            </div>
          </div>

          {/* Libraries & Tools */}
          <div className="col-lg-4 col-md-12 scroll-reveal delay-2">
            <div className="custom-card skill-card">
              <h3 className="skill-category-title">
                <i className={skills.tools.icon}></i> {skills.tools.title}
              </h3>
              {skills.tools.libraries.map((s) => (
                <SkillBar key={s.name} name={s.name} percent={s.percent} />
              ))}

              <h4 className="h6 mt-4 mb-3 text-muted fw-semibold">DEVELOPER WORKSPACE TOOLS</h4>
              <div className="tools-grid">
                {skills.tools.badges.map((badge) => (
                  <span key={badge} className="tool-badge">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
