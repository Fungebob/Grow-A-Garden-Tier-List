document.getElementById('officialDiscord-btn').addEventListener('click', function() {
  window.open('https://discord.gg/JmUxygvHSp', '_blank');
});

document.getElementById('officialGame-btn').addEventListener('click', function() {
  window.open('https://www.roblox.com/games/126884695634066/Grow-a-Garden#!/about', '_blank');
});


document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.scroll-fade');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        entry.target.classList.remove('fade-out');
      } else {
        entry.target.classList.add('fade-out');
        entry.target.classList.remove('fade-in');
      }
    });
  }, {
    threshold: 0.1 // Triggers fade-in earlier
  });

  fadeElements.forEach(el => {
    observer.observe(el);

    // Trigger fade-in if already in view on page load
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      el.classList.add('fade-in');
    }
  });
});




