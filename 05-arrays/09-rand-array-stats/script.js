/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click',()=>{
        const numbers = [];
        for (let i = 0; i < 10; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
        document.getElementsByTagName('td')[i].innerHTML = numbers[i]
        }
        document.getElementById('min').innerHTML = Math.min(...numbers);
        document.getElementById('max').innerHTML =Math.max(...numbers);
        let sum = numbers.reduce((total, num) => total + num, 0);
        document.getElementById('sum').innerHTML = sum;
        document.getElementById('average').innerHTML = sum /numbers.length;
    })
})();
