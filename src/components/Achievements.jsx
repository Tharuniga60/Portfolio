import { achievements } from '../data/portfolioData';

const delays = [null, 1, 2, null, 1, 2];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <div className="section-title-container text-center scroll-reveal">
          <span className="section-subtitle">Milestones</span>
          <h2 className="section-title">Key Achievements</h2>
        </div>

        <div className="row g-4">
          {achievements.map((item, i) => (
            <div
              key={item.id}
              className={`col-lg-4 col-md-6 scroll-reveal${delays[i] ? ` delay-${delays[i]}` : ''}`}
            >
              <div className="achievement-card">
                <div className="achievement-icon-wrapper" aria-hidden="true">
                  <i className={item.icon}></i>
                </div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
