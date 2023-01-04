/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // to get the value of an input: document.getElementById("element-id").value
  var input1 = document.getElementById("op-one");
  var input2 = document.getElementById("op-two");

  const performOperation = (operation) => {
    // perform the operation
    switch (operation) {
      case "addition":
        let addition = Number(input1.value) + Number(input2.value);
        console.log(addition);
        break;
      case "substraction":
        console.log(input1.value - input2.value);
        break;
      case "multiplication":
        console.log(input1.value * input2.value);
        break;
      case "division":
        console.log(input1.value / input2.value);
        break;
    }
  };

  Array.from(document.querySelectorAll("button.operator")).forEach(($btn) =>
    $btn.addEventListener("click", () => (performOperation($btn.id), false))
  );
})();
