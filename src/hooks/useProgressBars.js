import { useEffect } from 'react';

/**
 * Animates skill progress bars when they scroll into view.
 * Mirrors section 6 of js/script.js.
 */
export function useProgressBars() {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar-fill');

    const progressObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target;
            const width = fill.getAttribute('data-width');
            fill.style.width = width;
            observer.unobserve(fill);
          }
        });
      },
      { threshold: 0.2 }
    );

    progressBars.forEach((bar) => progressObserver.observe(bar));

    return () => progressObserver.disconnect();
  }, []);
}
