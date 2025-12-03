// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(5, 5, 16, 0.95)';
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  } else {
    navbar.style.background = 'rgba(5, 5, 16, 0.8)';
    navbar.style.boxShadow = 'none';
  }
});

// Dragon Animation on Scroll
window.addEventListener('scroll', () => {
  const dragon = document.querySelector('.dragon-container');
  const scrollValue = window.scrollY;

  // Calculate scale and position based on scroll
  // Starts at scale 1, grows to 3
  const scale = 1 + (scrollValue * 0.002);

  // Optional: Move it slightly as well
  // const translateY = scrollValue * 0.5;

  dragon.style.transform = `translate(-50%, -50%) scale(${scale})`;

  // Fade out eventually if it gets too big or covers content
  if (scale > 5) {
    dragon.style.opacity = Math.max(0, 1 - (scale - 5));
  } else {
    dragon.style.opacity = 0.6;
  }
});
