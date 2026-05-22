/* ─── Custom Cursor ─── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .project-card, .skill-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '14px'; cursor.style.height = '14px';
    ring.style.width    = '48px'; ring.style.height   = '48px';
    ring.style.opacity  = '0.6';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '8px';  cursor.style.height = '8px';
    ring.style.width    = '32px'; ring.style.height   = '32px';
    ring.style.opacity  = '0.4';
  });
});

/* ─── Particle Background ─── */
const canvas = document.getElementById('bg');
const ctx    = canvas.getContext('2d');

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const DOTS = 60;
const dots = Array.from({ length: DOTS }, () => ({
  x:  Math.random() * window.innerWidth,
  y:  Math.random() * window.innerHeight,
  vx: (Math.random() - 0.5) * 0.3,
  vy: (Math.random() - 0.5) * 0.3,
  r:  Math.random() * 1.5 + 0.5
}));

(function drawBg() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  dots.forEach(d => {
    d.x += d.vx; d.y += d.vy;
    if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
    if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,229,255,0.5)';
    ctx.fill();
  });

  for (let i = 0; i < DOTS; i++) {
    for (let j = i + 1; j < DOTS; j++) {
      const dx   = dots[i].x - dots[j].x;
      const dy   = dots[i].y - dots[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.strokeStyle = `rgba(0,229,255,${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth   = 0.5;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawBg);
})();

/* ─── Scroll Reveal ─── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ─── Mobile Nav Toggle ─── */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});
