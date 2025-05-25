document.getElementById('officialDiscord-btn').addEventListener('click', function() {
  window.open('https://discord.gg/JmUxygvHSp', '_blank');
});

document.getElementById('officialGame-btn').addEventListener('click', function() {
  window.open('https://www.roblox.com/games/126884695634066/Grow-a-Garden#!/about', '_blank');
});


  const fadeElements = document.querySelectorAll('.scroll-fade');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.classList.add('fade-out');
      } else {
        entry.target.classList.remove('fade-out');
      }
    });
  }, {
    threshold: 1
  });

  fadeElements.forEach(el => observer.observe(el));



