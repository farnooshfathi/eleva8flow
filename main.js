console.log('Website loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
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
