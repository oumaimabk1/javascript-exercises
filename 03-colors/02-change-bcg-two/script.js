/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/**
 * 
 * @param {String} color 
 * @returns {Boolean}
 */
function isValidColor(color) {
    return color.match(/^#(?:[0-9a-f]{3}){1,2}$/i) !== null;
}
(() => {
    // your code here
    var input = document.getElementById('color');
    var element = document.getElementsByTagName('body');
    document.getElementById("run").addEventListener("click", () => {
        isValidColor(input.value) ? element[0].style.backgroundColor = input.value : alert('please enter a valid color')
    });
   
})();
