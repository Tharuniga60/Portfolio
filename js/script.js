/* ==========================================================================
   DEVELOPER PORTFOLIO - THARUNIGA N
   Custom JavaScript Interactions (Vanilla JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. Navigation Bar Scroll styling
  // ==========================================
  const navbar = document.querySelector('.navbar');
  const handleNavbarScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };
  
  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Initial check on load
  
  // Close mobile navbar on nav-link click
  const navLinksList = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navLinksList.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // ==========================================
  // 2. Back to Top Button
  // ==========================================
  const backToTopBtn = document.querySelector('.back-to-top');
  const handleBackToTopVisibility = () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  };

  window.addEventListener('scroll', handleBackToTopVisibility);
  handleBackToTopVisibility(); // Initial check on load

  // ==========================================
  // 3. Scrollspy & Section Highlight
  // ==========================================
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  const highlightNav = () => {
    let scrollPos = window.scrollY + 150; // Offset for navbar height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
  highlightNav(); // Initial check on load

  // ==========================================
  // 4. Scroll Reveal Intersection Observer
  // ==========================================
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // 5. Stat Counter Animation
  // ==========================================
  const statsElements = document.querySelectorAll('.stat-number');
  
  const animateCounter = (el) => {
    const isFloat = el.getAttribute('data-type') === 'float';
    const target = isFloat ? parseFloat(el.getAttribute('data-target')) : parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1500; // 1.5 seconds animation
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing out quadratic function
      const easeProgress = progress * (2 - progress);
      let currentValue;
      
      if (isFloat) {
        currentValue = (easeProgress * target).toFixed(2);
      } else {
        currentValue = Math.floor(easeProgress * target);
      }

      el.textContent = currentValue + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        el.textContent = (isFloat ? target.toFixed(2) : target) + suffix;
      }
    };

    requestAnimationFrame(updateCount);
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.5
  });

  statsElements.forEach(el => statsObserver.observe(el));

  // ==========================================
  // 6. Skill Progress Bars Animation
  // ==========================================
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  
  const progressObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.getAttribute('data-width');
        fill.style.width = width;
        observer.unobserve(fill); // Only animate once
      }
    });
  }, {
    threshold: 0.2
  });

  progressBars.forEach(bar => progressObserver.observe(bar));

  // ==========================================
  // 7. Contact Form Validation and Success State
  // ==========================================
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccessMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const formFields = contactForm.querySelectorAll('.form-control');
      
      formFields.forEach(field => {
        const value = field.value.trim();
        const feedback = field.nextElementSibling;
        
        // Dynamic feedback clear
        field.classList.remove('is-invalid', 'is-valid');

        if (field.id === 'formName') {
          if (value === '') {
            field.classList.add('is-invalid');
            isValid = false;
          } else {
            field.classList.add('is-valid');
          }
        }
        
        if (field.id === 'formEmail') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (value === '' || !emailRegex.test(value)) {
            field.classList.add('is-invalid');
            isValid = false;
          } else {
            field.classList.add('is-valid');
          }
        }
        
        if (field.id === 'formSubject') {
          if (value === '') {
            field.classList.add('is-invalid');
            isValid = false;
          } else {
            field.classList.add('is-valid');
          }
        }
        
        if (field.id === 'formMessage') {
          if (value === '') {
            field.classList.add('is-invalid');
            isValid = false;
          } else {
            field.classList.add('is-valid');
          }
        }
      });

      if (isValid) {
        // Form is successfully validated - trigger visual feedback
        successMessage.classList.remove('d-none');
        successMessage.style.opacity = '0';
        successMessage.style.display = 'block';
        
        // Simple fade in effect
        setTimeout(() => {
          successMessage.style.transition = 'opacity 0.5s ease';
          successMessage.style.opacity = '1';
        }, 10);
        
        // Clear forms
        contactForm.reset();
        formFields.forEach(field => field.classList.remove('is-valid'));

        // Fade out message after 5 seconds
        setTimeout(() => {
          successMessage.style.opacity = '0';
          setTimeout(() => {
            successMessage.classList.add('d-none');
          }, 500);
        }, 5000);
      }
    });

    // Add input listeners to clear invalid styles when user types
    contactForm.querySelectorAll('.form-control').forEach(input => {
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
        }
      });
    });
  }
});
