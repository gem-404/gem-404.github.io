document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');

      faqQuestions.forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('show');
      });

      if (!isActive) {
        question.classList.add('active');
        answer.classList.add('show');
      }
    });
  });

  // Contact Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name')?.value || '';
      const email = document.getElementById('email')?.value || '';
      const message = document.getElementById('message')?.value || '';

      console.log('Form submitted:', { name, email, message });

      alert(`Thanks for your message, ${name}! We'll get back to you soon.`);
      contactForm.reset();
    });
  }

  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.benefit-card, .testimonial-card, .price-table');
    const screenPosition = window.innerHeight / 1.3;

    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Initial state for animations
  document.querySelectorAll('.benefit-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
  });

  // Add hamburger button
  const nav = document.querySelector('nav');
  const navLinks = document.querySelector('.nav-links');

  const mobileMenuBtn = document.createElement('div');
  mobileMenuBtn.className = 'hamburger';
  mobileMenuBtn.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  nav.prepend(mobileMenuBtn);

  // Toggle menu state
  const toggleMobileMenu = () => {
    navLinks.classList.toggle('show');
    mobileMenuBtn.classList.toggle('open');
    document.body.classList.toggle('menu-open'); // flag for scroll safety
  };

  mobileMenuBtn.addEventListener('click', toggleMobileMenu);

  // Close mobile menu on nav link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      mobileMenuBtn.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      mobileMenuBtn.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  });

  // Scroll throttling for nav appearance
  let scrollTicking = false;

  const handleScroll = () => {
    if (document.body.classList.contains('menu-open')) return; // skip if menu is open
    nav.classList.toggle('scrolled', window.scrollY > 50);
    animateOnScroll();
    scrollTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(handleScroll);
      scrollTicking = true;
    }
  });

  // Trigger on load as well
  window.addEventListener('load', () => {
    animateOnScroll();
    handleScroll(); // ensure nav state is set properly
  });
});
