/* ============================================================
   SCRIPT.JS  –  Vinay Kumar Portfolio
   Features:
   1. Sticky navbar with scroll class
   2. Active nav link highlighting on scroll
   3. Mobile hamburger menu toggle
   4. Typed text animation (hero section)
   5. Scroll reveal animations (data-aos)
   6. Skill bar fill animation (triggered on scroll)
   7. Counter / stat number animation
   8. Contact form validation and fake submit
   ============================================================ */

/* ============================================================
   UTILITY – wait for DOM to be fully loaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. NAVBAR – add .scrolled class when user scrolls down
  ---------------------------------------------------------- */
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ----------------------------------------------------------
     2. ACTIVE NAV LINK – highlight the link for visible section
  ---------------------------------------------------------- */
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  // Intersection Observer watches which section is on screen
  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Remove active from all, add to matching link
          navLinks.forEach(function (link) { link.classList.remove('active'); });
          const id      = entry.target.getAttribute('id');
          const active  = document.querySelector('.nav-link[href="#' + id + '"]');
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.4 }   // section needs to be 40% visible
  );

  sections.forEach(function (sec) { sectionObserver.observe(sec); });

  /* ----------------------------------------------------------
     3. MOBILE HAMBURGER MENU
  ---------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');   // animates to X
    navMenu.classList.toggle('open');     // slides nav in
  });

  // Close the menu when a link is clicked (mobile UX)
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });

  /* ----------------------------------------------------------
     4. TYPED TEXT ANIMATION – cycles through role titles
  ---------------------------------------------------------- */
  const typedEl  = document.getElementById('typed-text');
  // Array of titles to cycle through
  const phrases  = [
    'Aspiring Web Developer',
    'Frontend Enthusiast',
    'Java Developer',
    'Problem Solver',
    'Open Source Learner'
  ];

  let phraseIndex = 0;   // which phrase we are typing
  let charIndex   = 0;   // how many chars typed so far
  let isDeleting  = false;

  function typeLoop() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      // Add one character
      typedEl.textContent = current.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        // Reached end of phrase – pause then start deleting
        isDeleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      // Remove one character
      typedEl.textContent = current.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        // Fully deleted – move to next phrase
        isDeleting   = false;
        phraseIndex  = (phraseIndex + 1) % phrases.length;
      }
    }

    // Typing is slower than deleting for natural feel
    const speed = isDeleting ? 60 : 110;
    setTimeout(typeLoop, speed);
  }

  typeLoop();   // kick off the animation

  /* ----------------------------------------------------------
     5. SCROLL REVEAL (AOS – Animate On Scroll)
     We implement our own lightweight version using
     IntersectionObserver, targeting [data-aos] elements.
  ---------------------------------------------------------- */
  const aosElements = document.querySelectorAll('[data-aos]');

  const aosObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // Apply any delay specified in data-aos-delay attribute
          const delay = entry.target.dataset.aosDelay || 0;
          setTimeout(function () {
            entry.target.classList.add('aos-animate');
          }, parseInt(delay));
          // Stop observing after animation fires (animate once)
          aosObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }   // trigger when 12% of element is visible
  );

  aosElements.forEach(function (el) { aosObserver.observe(el); });

  /* ----------------------------------------------------------
     6. SKILL BAR ANIMATION
     Fills the bars to the percentage in data-skill when
     the skills section scrolls into view.
  ---------------------------------------------------------- */
  const skillFills    = document.querySelectorAll('.skill-fill');
  let   skillsAnimated = false;   // only animate once

  const skillsSection = document.querySelector('#skills');

  const skillObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !skillsAnimated) {
          skillsAnimated = true;
          skillFills.forEach(function (fill) {
            const pct = fill.getAttribute('data-skill') + '%';
            fill.style.width = pct;   // CSS transition handles animation
          });
          skillObserver.disconnect();   // no need to keep watching
        }
      });
    },
    { threshold: 0.2 }
  );

  if (skillsSection) skillObserver.observe(skillsSection);

  /* ----------------------------------------------------------
     7. COUNTER ANIMATION (About section stat numbers)
     Counts from 0 up to the target number when the
     about section enters the viewport.
  ---------------------------------------------------------- */
  const statNumbers  = document.querySelectorAll('.stat-num');
  let   statsAnimated = false;

  const aboutSection = document.querySelector('#about');

  const statsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !statsAnimated) {
          statsAnimated = true;
          statNumbers.forEach(function (num) {
            const target   = parseInt(num.getAttribute('data-target'));
            const duration = 1500;   // animation duration ms
            const step     = Math.ceil(duration / target);

            let current = 0;
            const timer = setInterval(function () {
              current++;
              num.textContent = current;
              if (current >= target) {
                clearInterval(timer);
                num.textContent = target;
              }
            }, step);
          });
          statsObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  if (aboutSection) statsObserver.observe(aboutSection);

  /* ----------------------------------------------------------
     8. CONTACT FORM – client-side validation + simulated submit
  ---------------------------------------------------------- */
  const contactForm  = document.getElementById('contact-form');
  const successMsg   = document.getElementById('form-success');
  const submitBtn    = document.getElementById('submit-btn');

  // Simple email regex
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Show an error under a field
  function showError(fieldId, message) {
    document.getElementById(fieldId + '-error').textContent = message;
    document.getElementById(fieldId).style.borderColor = '#ff6584';
  }

  // Clear an error under a field
  function clearError(fieldId) {
    document.getElementById(fieldId + '-error').textContent = '';
    document.getElementById(fieldId).style.borderColor = '';
  }

  // Real-time clear errors on input
  ['name', 'email', 'subject', 'message'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', function () { clearError(id); });
    }
  });

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();   // prevent actual page reload

    // Read values
    const nameVal    = document.getElementById('name').value.trim();
    const emailVal   = document.getElementById('email').value.trim();
    const subjectVal = document.getElementById('subject').value.trim();
    const msgVal     = document.getElementById('message').value.trim();

    let valid = true;

    // Validate Name
    if (!nameVal) {
      showError('name', 'Please enter your name.');
      valid = false;
    } else {
      clearError('name');
    }

    // Validate Email
    if (!emailVal) {
      showError('email', 'Please enter your email.');
      valid = false;
    } else if (!isValidEmail(emailVal)) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError('email');
    }

    // Validate Subject
    if (!subjectVal) {
      showError('subject', 'Please enter a subject.');
      valid = false;
    } else {
      clearError('subject');
    }

    // Validate Message
    if (!msgVal || msgVal.length < 10) {
      showError('message', 'Message must be at least 10 characters.');
      valid = false;
    } else {
      clearError('message');
    }

    // If all valid, simulate submission
    if (valid) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

      // Simulate async network call (in real app, use fetch/email service)
      setTimeout(function () {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        successMsg.style.display = 'block';

        // Hide success message after 5 seconds
        setTimeout(function () {
          successMsg.style.display = 'none';
        }, 5000);
      }, 1500);
    }
  });

  /* ----------------------------------------------------------
     Smooth scroll polyfill for nav links on older browsers
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});   // end DOMContentLoaded
