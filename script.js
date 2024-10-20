let current =
 1;
const luzes = document
 .querySelectorAll('.luz');

function mudarLuz() {
 luzes.forEach((luz, index) => {
  luz.classList.remove(
   'ligado');
  if (index === current) {
   luz.classList.add(
    'ligado');
  }
 });

 if (current === 1) {
  current =
   0;
 } else if (current === 0) {
  current =
   2;
 } else {
  current =
   1;
 }
}

setInterval(mudarLuz, 3000);

window.onload = function() {
 mudarLuz();
};
