// Scroll-triggered animations
const icons = document.querySelectorAll('.trust .icon');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
});

icons.forEach(icon => {
  observer.observe(icon);
});