/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const passOne = document.getElementById("pass-one");

  passOne.addEventListener("input", ({ target: { value } }) => {
    const hasEightCharacters = value.length >= 8;
    const hasTwoDigits = /\d/.test(value) && /\d/.test(value.replace(/\d/, ''));
    if (hasEightCharacters && hasTwoDigits) {
        alert('ok')
      } 
  });
})();
