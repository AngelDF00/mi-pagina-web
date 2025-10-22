// Año footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> menu.classList.remove('show')));

// Hero: frases rotando
const claims = [
  "Asesoría para elegir tu web",
  "Web simple: HTML + CSS + JS",
  "Aula virtual en Moodle",
  "Paga online con Stripe · Sin backend"
];
let idx = 0;
const heroTitle = document.getElementById('hero-title');
setInterval(() => {
  idx = (idx + 1) % claims.length;
  heroTitle.animate([{opacity:1},{opacity:0}], {duration:250, fill:'forwards'}).onfinish = () => {
    heroTitle.textContent = claims[idx];
    heroTitle.animate([{opacity:0},{opacity:1}], {duration:250, fill:'forwards'});
  };
}, 3200);
