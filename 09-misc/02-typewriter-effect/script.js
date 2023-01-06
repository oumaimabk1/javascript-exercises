/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var i = 0;
var txt = "Je suis un texte qui va apparaître dans un effet 'machine à écrire', un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !";
var speed = Math.floor(Math.random() * (200 - 50)) + 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("target").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
(() => {
  // your code here
  window.addEventListener("load", typeWriter);
})();
