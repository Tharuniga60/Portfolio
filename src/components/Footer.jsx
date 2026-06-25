import { socialLinks } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <div className="footer-social-links" aria-label="Social Links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="footer-social-icon"
              aria-label={link.label}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <p className="footer-text">
          &copy; 2026 Designed &amp; Developed by <strong>Tharuniga N</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
