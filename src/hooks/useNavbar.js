import { useEffect } from 'react';

/**
 * Handles navbar scroll styling + mobile collapse on nav-link click.
 * Mirrors the logic in the original js/script.js sections 1 & 3.
 */
export function useNavbar() {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    // Scroll-based navbar background
    const handleNavbarScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('navbar-scrolled');
      } else {
        navbar?.classList.remove('navbar-scrolled');
      }
    };

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    // Close mobile navbar on nav-link click
    const navLinksList = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    const closeCollapse = () => {
      if (navbarCollapse?.classList.contains('show')) {
        const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarCollapse);
        bsCollapse?.hide();
      }
    };

    navLinksList.forEach((link) => link.addEventListener('click', closeCollapse));

    return () => {
      window.removeEventListener('scroll', handleNavbarScroll);
      navLinksList.forEach((link) => link.removeEventListener('click', closeCollapse));
    };
  }, []);
}

/**
 * Scroll-spy: highlights the active nav link based on scroll position.
 * Mirrors section 3 of js/script.js.
 */
export function useScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    const highlightNav = () => {
      const scrollPos = window.scrollY + 150;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();

    return () => window.removeEventListener('scroll', highlightNav);
  }, []);
}
