import { internships } from '../data/portfolioData';

export default function Internships() {
  return (
    <section id="internships">
      <div className="container">
        <div className="section-title-container text-center scroll-reveal">
          <span className="section-subtitle">Experience</span>
          <h2 className="section-title">Internship Timeline</h2>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 scroll-reveal">
            <div className="custom-card">
              <div className="education-timeline ms-md-4">
                {internships.map((item) => (
                  <div key={item.id} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-meta">{item.meta}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <div className="timeline-institution">{item.institution}</div>
                    <div className="timeline-details text-muted">
                      <ul>
                        {item.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
