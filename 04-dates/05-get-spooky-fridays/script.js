/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click', ()=>{
       let year = document.getElementById('year').value;
       const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
       
       let output = '';
       for (let month = 0; month < 12; month++) {
         const date = new Date(year, month, 13);
         console.log(date)
         if (date.getDay() === 5) {
           let monthName = months[month];
           output += `<p>${monthName}</p>`;
         }
       }
       alert(output)
    })
})();
