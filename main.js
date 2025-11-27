console.log('Website loaded successfully!');

document.addEventListener('DOMContentLoaded', () => {
  const pricingButtons = document.querySelectorAll('.pricing-button');

  pricingButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      pricingButtons.forEach(btn => {
        btn.classList.remove('primary');
        btn.classList.add('outline');
      });

      button.classList.remove('outline');
      button.classList.add('primary');

      const bookDemoSection = document.querySelector('#book-demo');
      if (bookDemoSection) {
        bookDemoSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
