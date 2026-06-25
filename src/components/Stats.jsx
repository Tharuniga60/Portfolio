import { useStatCounter } from '../hooks/useStatCounter';
import { stats } from '../data/portfolioData';

export default function Stats() {
  useStatCounter();

  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="row g-4">
          {stats.map((stat) => (
            <div key={stat.label} className="col-md-3 col-6 text-center">
              <div className="stat-card">
                <div
                  className="stat-number"
                  data-target={stat.target}
                  data-suffix={stat.suffix}
                  data-type={stat.type === 'float' ? 'float' : undefined}
                >
                  0
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
