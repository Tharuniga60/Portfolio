import { useEffect } from 'react';

/**
 * Scroll-reveal animation via IntersectionObserver.
 * Mirrors section 4 of js/script.js.
 * Adds `.visible` to elements with `.scroll-reveal` when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);
}
