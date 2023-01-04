/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  let input = document.getElementById("number");
  function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  document.getElementById("run").addEventListener("click", () => {
    // your code here
    var number = Number(input.value);
    if (number) {
        console.log(factorial(number))
    } else {
      console.log("taper un nombre");
    }
  });
})();
