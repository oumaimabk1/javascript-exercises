/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const target = Math.floor(Math.random() * 100) + 1;  // Generate a random
    let guess;
    let numGuesses = 0;

 do {
  guess = prompt(`Enter a number between 1 and 100 ${target}`);
  numGuesses++;
  if (guess > target) {
    alert("Your guess is too high. Try again.");
  } else if (guess < target) {
    alert("Your guess is too low. Try again.");
  }
} while (guess != target); 

alert(`Congratulations! You guessed the number in ${numGuesses} tries.`);
})();
