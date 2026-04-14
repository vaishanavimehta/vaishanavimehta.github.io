/* ─── Cursor ─────────────────────────────────────────── */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

let mx = 0, my = 0;
let rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});

function lerp(a, b, t) { return a + (b - a) * t; }

(function animRing() {
  rx = lerp(rx, mx, 0.1);
  ry = lerp(ry, my, 0.1);
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('[data-magnetic], a, button, .project-item, .pill').forEach(el => {
  el.addEventListener('mouseenter', () => {
    dot.classList.add('hovered');
    ring.classList.add('hovered');
  });
  el.addEventListener('mouseleave', () => {
    dot.classList.remove('hovered');
    ring.classList.remove('hovered');
  });
});

/* ─── Magnetic buttons ───────────────────────────────── */
document.querySelectorAll('[data-magnetic]').forEach(el => {
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width  / 2;
    const cy = r.top  + r.height / 2;
    const dx = (e.clientX - cx) * 0.28;
    const dy = (e.clientY - cy) * 0.28;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});

/* ─── Scroll reveal ──────────────────────────────────── */
const revealEls = document.querySelectorAll(
  '.project-item, .about-grid, .contact-inner, .section-label, .pill'
);

revealEls.forEach(el => el.classList.add('scroll-reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

/* ─── Active nav link on scroll ──────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + entry.target.id
          ? 'var(--ink)'
          : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));
