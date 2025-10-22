// Año footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const burger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// HERO: rotador de frases (similar a claims del sitio de referencia)
const claims = [
  "Odontología sin metal",
  "“La sonrisa es una curva que lo endereza todo”",
  "Pioneros en enfoque postural"
];
let idx = 0;
const heroTitle = document.getElementById('hero-title');
setInterval(() => {
  idx = (idx + 1) % claims.length;
  heroTitle.animate([{opacity:1},{opacity:0}], {duration:250, fill:'forwards'}).onfinish = () => {
    heroTitle.textContent = claims[idx];
    heroTitle.animate([{opacity:0},{opacity:1}], {duration:250, fill:'forwards'});
  };
}, 3500);

// Galería simple
const track = document.getElementById('gallery-track');
let slide = 0;
const total = track.children.length;
function go(n){
  slide = (n + total) % total;
  track.style.transform = `translateX(-${slide*100}%)`;
}
document.getElementById('prev').addEventListener('click', ()=>go(slide-1));
document.getElementById('next').addEventListener('click', ()=>go(slide+1));

// Accesibilidad: cerrar menú al navegar
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> menu.classList.remove('show')));

