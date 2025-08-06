document.addEventListener("DOMContentLoaded", () => {
    // Active link highlighting
    const activeLinks = document.querySelectorAll(".nav-links a");
    activeLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  
    // Card hover effects
    const cards = document.querySelectorAll('.card, .project-card, .blog-post');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  
    // Animate elements when they come into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.card, .project-card, .blog-post, .map-wrapper, form');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
  
    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.card, .project-card, .blog-post, .map-wrapper, form');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s ease-out';
    });
  
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
  
    // Profile image animation
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
      profileImg.addEventListener('mouseenter', () => {
        profileImg.style.animation = 'pulse 1.5s infinite';
      });
      
      profileImg.addEventListener('mouseleave', () => {
        profileImg.style.animation = '';
      });
    }
  });