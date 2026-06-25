export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Background Shapes */}
      <div className="hero-shapes" aria-hidden="true">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
      </div>

      <div className="container hero-content">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-lg-6 text-start scroll-reveal">
            <span className="hero-tag">Hello, I'm</span>
            <h1 className="hero-title">Tharuniga N</h1>
            <p className="hero-role">IT Student | Junior Software Developer</p>
            <p className="hero-tagline">
              Transforming ideas into scalable software solutions through code, creativity, and
              continuous learning.
            </p>
            <div className="hero-buttons d-flex gap-3 mt-4">
              <a href="#projects" className="btn btn-accent">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline-accent">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side: Profile Picture */}
          <div className="col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center align-items-center scroll-reveal delay-2">
            <div className="hero-profile-wrapper">
              <div className="hero-profile-wrapper-backing"></div>
              <div className="hero-profile-frame">
                <img src="profile.jpg" alt="Tharuniga N - Profile Photo" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
