/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const button = document.getElementById('run');

button.addEventListener('click', () => {
  fetch('http://localhost:3000/heroes')
    .then(response => response.json())
    .then(xmen => {
        xmen.forEach(hero => {
            const template = document.querySelector('template');
            const clone = template.content.cloneNode(true);
            clone.querySelector('.name').textContent = hero.name;
            clone.querySelector('.alter-ego').textContent = hero.alterEgo;
            clone.querySelector('.powers').textContent = hero.abilities;
            target.appendChild(clone);
          });
    });
});
})();
