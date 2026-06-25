import { useEffect } from 'react';

/**
 * Animated stat counter using IntersectionObserver.
 * Mirrors section 5 of js/script.js.
 */
export function useStatCounter() {
  useEffect(() => {
    const statsElements = document.querySelectorAll('.stat-number');

    const animateCounter = (el) => {
      const isFloat = el.getAttribute('data-type') === 'float';
      const target = isFloat
        ? parseFloat(el.getAttribute('data-target'))
        : parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1500;
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = progress * (2 - progress); // ease-out quadratic
        const currentValue = isFloat
          ? (easeProgress * target).toFixed(2)
          : Math.floor(easeProgress * target);

        el.textContent = currentValue + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = (isFloat ? target.toFixed(2) : target) + suffix;
        }
      };

      requestAnimationFrame(updateCount);
    };

    const statsObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statsElements.forEach((el) => statsObserver.observe(el));

    return () => statsObserver.disconnect();
  }, []);
}
