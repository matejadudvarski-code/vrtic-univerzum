document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  console.log("Reveal script loaded", elements);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.3,
  });

  elements.forEach(el => observer.observe(el));
});
