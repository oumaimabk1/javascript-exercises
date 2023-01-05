/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const button = document.getElementById('run');
    const passwordInput1 = document.getElementById('pass-one');
    const passwordInput2 = document.getElementById('pass-two');

button.addEventListener('click', function() {
  const isMatch = passwordInput1.value === passwordInput2.value;
  if (!isMatch) {
    passwordInput2.style.borderColor = 'red';
    passwordInput1.style.borderColor = 'red';
  }
});
})();
