/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const button = document.getElementById('increment')
    const input = document.getElementById('target')
    
    button.addEventListener('click',()=>{
        let compteur = window.localStorage.getItem('compteur') || 0;
        console.log(compteur)
        input.innerHTML =  +compteur + 1;
        compteur++;
        window.localStorage.setItem('compteur',compteur)
    })
})();
