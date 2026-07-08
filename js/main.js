// Sticky header — solidify after scrolling past the hero
const header = document.getElementById('siteHeader');
const hero = document.querySelector('.hero');

function updateHeader() {
  const threshold = hero ? hero.offsetHeight - 80 : 80;
  header.classList.toggle('is-scrolled', window.scrollY > threshold);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Hide any image that fails to load rather than showing a broken-image icon.
document.querySelectorAll('.hero-media img, .photo-banner img, .story-strip img').forEach((img) => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
  });
});
