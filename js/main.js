document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

const bar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
  bar.style.width = Math.min(pct, 100) + '%';
}, { passive: true });

const ctaOverlay = document.getElementById('cta-overlay');
const ctaSection = document.getElementById('cta-section');
ctaSection.addEventListener('mousemove', e => {
  const r = ctaSection.getBoundingClientRect();
  ctaOverlay.style.background =
    `radial-gradient(600px circle at ${e.clientX - r.left}px ${e.clientY - r.top}px, rgba(160,200,255,0.12), transparent 85%)`;
  ctaOverlay.style.opacity = '1';
});
ctaSection.addEventListener('mouseleave', () => { ctaOverlay.style.opacity = '0'; });

document.body.classList.add('js-reveal-ready');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
