/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

const target = document.querySelector('#target');

let html = '<table><tbody>';

for (let i = 0; i < 10; i++) {
  html += `<tr><td>${i}</td></tr>`;
}

html += '</tbody></table>';

target.innerHTML = html;
})();
