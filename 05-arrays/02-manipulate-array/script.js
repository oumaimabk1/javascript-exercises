/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
function transformArray(fruits) {
    // Enlevez le premier et le dernier élement du tableau
    fruits.shift(); // Enlève le premier élement du tableau
    fruits.pop(); // Enlève le dernier élement du tableau
  
    // Ajoutez un élément "banane" au début du tableau
    fruits.unshift("banane");
  
    // Ajoutez un élément "kiwi" à la fin du tableau
    fruits.push("kiwi");
  }
(() => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    transformArray(fruits);
    document.getElementById('run').addEventListener('click',()=>{
        alert(fruits);
    })

})();
