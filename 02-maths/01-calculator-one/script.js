/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    var input1 = document.getElementById('op-one') ;
    var input2 = document.getElementById('op-two') ;

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let addition = Number(input1.value) + Number(input2.value)
        console.log(addition)
       
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        console.log(input1.value - input2.value)
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        console.log(input1.value * input2.value)
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        console.log(input1.value / input2.value)
    });
})();
