document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.hero-title');

  if (!title) return;

  document.addEventListener('mousemove', (e) => {
    const rect = title.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    title.style.setProperty('--x', `${(x / rect.width) * 100}%`);
    title.style.setProperty('--y', `${(y / rect.height) * 100}%`);
  });
});
