/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const button = document.getElementById('run');
    const input = document.getElementById('hero-id');
    button.addEventListener('click', () => {
        const id = input.value;
      fetch('http://localhost:3000/heroes/'+id)
        .then(response => response.json())
        .then(hero => {
            console.log(hero)
           
                const template = document.querySelector('template');
                const clone = template.content.cloneNode(true);
                clone.querySelector('.name').textContent = hero.name;
                clone.querySelector('.alter-ego').textContent = hero.alterEgo;
                clone.querySelector('.powers').textContent = hero.abilities;
                target.appendChild(clone);  
        });
    });
})();
