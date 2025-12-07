console.log('Website loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');

      if (navMenu.classList.contains('active')) {
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      } else {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      }
    });

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      });
    });
  }

  const pricingButtons = document.querySelectorAll('.pricing-button');
  const pricingCards = document.querySelectorAll('.pricing-card');

  const middleCard = pricingCards[1];
  if (middleCard) {
    middleCard.classList.add('selected');
  }

  pricingButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      pricingButtons.forEach(btn => {
        btn.classList.remove('primary');
        btn.classList.add('outline');
      });

      pricingCards.forEach(card => {
        card.classList.remove('selected');
      });

      button.classList.remove('outline');
      button.classList.add('primary');

      const parentCard = button.closest('.pricing-card');
      if (parentCard) {
        parentCard.classList.add('selected');
      }

      const bookDemoSection = document.querySelector('#book-demo');
      if (bookDemoSection) {
        bookDemoSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
