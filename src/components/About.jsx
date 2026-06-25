import { education } from '../data/portfolioData';

function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-meta">{item.meta}</div>
      <h4 className="timeline-title">{item.title}</h4>
      <div className="timeline-institution">{item.institution}</div>
      <div className="timeline-details text-muted">
        <ul>
          {item.details.map((d, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: d }} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="section-bg-white" id="about">
      <div className="container">
        <div className="section-title-container text-center scroll-reveal">
          <span className="section-subtitle">Biography</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="row g-5">
          {/* Bio details */}
          <div className="col-lg-6 scroll-reveal">
            <div className="custom-card">
              {/* Developer Workspace Illustration */}
              <div className="about-illustration-container mb-4">
                <svg width="200" height="160" viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="240" cy="190" r="140" className="svg-bg-circle" />
                  <line x1="60" y1="290" x2="420" y2="290" stroke="#B08968" strokeWidth="6" strokeLinecap="round" />
                  <path d="M220 250 L260 250 L250 290 L230 290 Z" className="svg-accent" opacity="0.8" />
                  <rect x="200" y="280" width="80" height="10" rx="4" className="svg-dark" />
                  <rect x="110" y="80" width="260" height="170" rx="12" className="svg-dark" />
                  <rect x="120" y="90" width="240" height="130" rx="4" fill="#FFFFFF" />
                  <circle cx="135" cy="102" r="4" fill="#B08968" />
                  <circle cx="147" cy="102" r="4" fill="#E6DFD3" />
                  <circle cx="159" cy="102" r="4" fill="#2F2F2F" opacity="0.2" />
                  <rect x="130" y="120" width="60" height="6" rx="3" fill="#B08968" opacity="0.8" />
                  <rect x="130" y="132" width="120" height="6" rx="3" fill="#2F2F2F" opacity="0.6" />
                  <rect x="145" y="144" width="80" height="6" rx="3" fill="#666666" opacity="0.5" />
                  <rect x="145" y="156" width="140" height="6" rx="3" fill="#B08968" opacity="0.6" />
                  <rect x="160" y="168" width="100" height="6" rx="3" fill="#2F2F2F" opacity="0.4" />
                  <rect x="130" y="180" width="45" height="6" rx="3" fill="#B08968" opacity="0.8" />
                  <rect x="130" y="192" width="90" height="6" rx="3" fill="#666666" opacity="0.7" />
                  <text x="50" y="120" fontFamily="'Outfit', sans-serif" fontSize="28" fontWeight="bold" fill="#B08968" opacity="0.6">&lt;/&gt;</text>
                  <text x="390" y="160" fontFamily="'Outfit', sans-serif" fontSize="32" fontWeight="bold" fill="#B08968" opacity="0.5">{ }</text>
                  <path d="M70 290 Q60 250 80 230 Q90 250 80 290" fill="#B08968" opacity="0.3" />
                  <path d="M75 290 Q85 240 95 235 Q100 255 85 290" fill="#B08968" opacity="0.5" />
                  <rect x="65" y="285" width="25" height="6" fill="#2F2F2F" opacity="0.8" />
                </svg>
              </div>

              <h3 className="mb-3" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>
                Professional Summary
              </h3>
              <p>
                Aspiring IT student with a keen interest in Software Development, Data Structures &amp;
                Algorithms, Web Development, Operating Systems, and Emerging Technologies.
              </p>
              <p>
                Passionate about building scalable applications, tackling complex engineering challenges,
                and continuously improving my technical and problem-solving skills. Dedicated placement
                co-ordinator with strong communication and team-oriented leadership qualities.
              </p>

              <div className="row mt-4 pt-3 border-top border-light">
                <div className="col-md-6 col-12 mb-3">
                  <h4 className="h6 text-muted mb-1">INTEREST AREAS</h4>
                  <p className="small fw-semibold">Full Stack Dev, Data Structures, Operating Systems, DBMS</p>
                </div>
                <div className="col-md-6 col-12 mb-3">
                  <h4 className="h6 text-muted mb-1">LANGUAGES KNOWN</h4>
                  <p className="small fw-semibold">English (Professional), Tamil (Fluent), Hindi (Basic)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education timeline */}
          <div className="col-lg-6 scroll-reveal delay-2">
            <div className="custom-card">
              <h3 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>
                Educational Background
              </h3>
              <div className="education-timeline">
                {education.map((item) => (
                  <TimelineItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
