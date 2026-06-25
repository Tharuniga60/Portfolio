import { useNavbar, useScrollSpy } from '../hooks/useNavbar';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  useNavbar();
  useScrollSpy();

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top" id="mainNavbar" aria-label="Main Navigation">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Tharuniga<span>.N</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {navItems.map((item, i) => (
                <li key={item.href} className="nav-item">
                  <a
                    className={`nav-link${i === 0 ? ' active' : ''}`}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
