const body = document.body;

const qs = (s, p = document) => p.querySelector(s);
const qsa = (s, p = document) => [...p.querySelectorAll(s)];

const state = {
  dark: true,
  typingDone: false
};

function initThemeToggle(){
  const toggle = qs('[data-theme-toggle]');
  const saved = localStorage.getItem('theme');
  if(saved === 'light'){
    body.classList.add('light');
    state.dark = false;
  }
  toggle?.addEventListener('click', () => {
    body.classList.toggle('light');
    state.dark = !body.classList.contains('light');
    localStorage.setItem('theme', state.dark ? 'dark' : 'light');
  });
}

function initMobileNav(){
  const btn = qs('[data-nav-toggle]');
  const menu = qs('[data-nav-menu]');
  btn?.addEventListener('click', () => menu?.classList.toggle('open'));
  qsa('[data-nav-link]').forEach(a => a.addEventListener('click', () => menu?.classList.remove('open')));
}

function initReveal(){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, {threshold:.12});
  qsa('.reveal').forEach(el => io.observe(el));
}

function typeTerminal(){
  const el = qs('[data-terminal-text]');
  const shell = qs('[data-terminal-shell]');
  if(!el || !shell) return;
  const lines = [
    '> boot moe-kyaw-aung-portfolio',
    '> role: Android Senior Developer',
    '> stack: Kotlin · Jetpack Compose · Firebase · CI/CD',
    '> focus: secure, scalable, user-friendly products',
    '> status: ready for release'
  ];
  let i = 0, j = 0, out = '';
  const tick = () => {
    if(i >= lines.length){
      state.typingDone = true;
      shell.classList.add('typed');
      return;
    }
    if(j < lines[i].length){
      out += lines[i][j++];
      el.innerHTML = `${out}<span class="cursor"></span>`;
      setTimeout(tick, 18);
    }else{
      out += '
';
      i++; j = 0;
      setTimeout(tick, 220);
    }
  };
  tick();
}

function initCounters(){
  const counters = qsa('[data-counter]');
  if(!counters.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(!e.isIntersecting) return;
      const el = e.target;
      const end = +el.dataset.counter;
      const suffix = el.dataset.suffix || '';
      const start = 0;
      const dur = 1300;
      const t0 = performance.now();
      const step = now => {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = Math.floor(start + (end - start) * (1 - Math.pow(1 - p, 3))) + suffix;
        if(p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, {threshold:.5});
  counters.forEach(c => io.observe(c));
}

function initBackToTop(){
  const btn = qs('[data-backtop]');
  if(!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 600);
  });
  btn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}

function initFormValidation(){
  const form = qs('[data-contact-form]');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const name = qs('[name="name"]', form);
    const email = qs('[name="email"]', form);
    const message = qs('[name="message"]', form);
    const ok = name.value.trim() && /^[^s@]+@[^s@]+.[^s@]+$/.test(email.value) && message.value.trim().length > 12;
    qs('[data-form-status]').textContent = ok ? 'Message validated. Ready to connect.' : 'Please complete all fields correctly.';
    qs('[data-form-status]').className = ok ? 'status success' : 'status error';
    if(ok) form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initReveal();
  typeTerminal();
  initCounters();
  initBackToTop();
  initFormValidation();
});
