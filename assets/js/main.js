const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const backtop = document.querySelector('[data-backtop]');
const counters = document.querySelectorAll('[data-counter]');
const reveals = document.querySelectorAll('.reveal');

const savedTheme = localStorage.getItem('theme') || 'dark';
root.dataset.theme = savedTheme;

function syncThemeIcon() {
  if (!themeToggle) return;
  const icon = themeToggle.querySelector('i');
  icon.className = root.dataset.theme === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

syncThemeIcon();

themeToggle?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', root.dataset.theme);
  syncThemeIcon();
});

navToggle?.addEventListener('click', () => {
  const open = navMenu.dataset.open === 'true';
  navMenu.dataset.open = String(!open);
});

document.querySelectorAll('[data-nav-link]').forEach(link => {
  if (link.getAttribute('href') === location.pathname.split('/').pop() || (location.pathname === '/' && link.getAttribute('href') === 'index.html')) {
    link.classList.add('active');
  }
  link.addEventListener('click', () => {
    if (navMenu) navMenu.dataset.open = 'false';
  });
});

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const end = Number(el.dataset.counter || 0);
    const suffix = el.dataset.suffix || '';
    let start = 0;
    const duration = 900;
    const t0 = performance.now();

    function tick(t) {
      const p = Math.min((t - t0) / duration, 1);
      const value = Math.floor(start + (end - start) * (1 - Math.pow(1 - p, 3)));
      el.textContent = value + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.35 });

counters.forEach(c => counterObserver.observe(c));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));

window.addEventListener('scroll', () => {
  if (!backtop) return;
  backtop.classList.toggle('show', window.scrollY > 500);
});

backtop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('[data-contact-form]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('[data-form-status]');
    if (status) status.textContent = 'Message captured locally. Connect this form to your backend or email service.';
    form.reset();
  });
});
