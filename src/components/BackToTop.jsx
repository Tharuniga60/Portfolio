import { useEffect, useState } from 'react';

/**
 * Back-to-top floating button.
 * Mirrors section 2 of js/script.js: shows when scrollY > 400.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`back-to-top${visible ? ' active' : ''}`}
      aria-label="Back to Top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </a>
  );
}
