import { skills } from '../data/portfolioData';

const categories = [
  { data: skills.languages, col: 'col-lg-4 col-md-6', delay: '' },
  { data: skills.web, col: 'col-lg-4 col-md-6', delay: 'delay-1' },
  { data: skills.tools, col: 'col-lg-4 col-md-12', delay: 'delay-2' },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-title-container text-center scroll-reveal">
          <span className="section-subtitle">Proficiencies</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="row g-4">
          {categories.map(({ data, col, delay }) => (
            <div key={data.title} className={`${col} scroll-reveal ${delay}`}>
              <div className="custom-card skill-card">
                <h3 className="skill-category-title">
                  <i className={data.icon}></i> {data.title}
                </h3>
                <div className="skill-grid">
                  {data.items.map((s) => (
                    <div key={s.name} className="skill-item">
                      <i className={`${s.logo} skill-logo`} aria-hidden="true"></i>
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
