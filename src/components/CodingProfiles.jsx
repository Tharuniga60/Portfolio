import { codingProfiles } from '../data/portfolioData';

const delays = [null, 1, 2, null, 1];

export default function CodingProfiles() {
  return (
    <section className="section-bg-white" id="coding-profiles">
      <div className="container">
        <div className="section-title-container text-center scroll-reveal">
          <span className="section-subtitle">Platforms</span>
          <h2 className="section-title">Coding Profiles</h2>
        </div>

        <div className="row g-4">
          {codingProfiles.map((profile, i) => (
            <div
              key={profile.id}
              className={`${profile.colClass} scroll-reveal${delays[i] ? ` delay-${delays[i]}` : ''}`}
            >
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card-link"
              >
                <div className="profile-card">
                  <div className="profile-card-icon" aria-hidden="true">
                    <i className={profile.icon}></i>
                  </div>
                  <div className="profile-details-wrapper">
                    <h3 className="profile-name">{profile.name}</h3>
                    <p className="profile-solve-count">{profile.detail}</p>
                  </div>
                  <div className="profile-link-arrow" aria-hidden="true">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
