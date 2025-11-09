// Fade-in animation for sections
const sections = document.querySelectorAll('section');
const options = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, options);

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(30px)';
  sec.style.transition = 'all 1s ease';
  observer.observe(sec);
});

// Contact form simulation
function sendMessage(e) {
  e.preventDefault();
  document.getElementById('status').innerText = "✅ Thank you! Your message has been sent.";
  e.target.reset();
}