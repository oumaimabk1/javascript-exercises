/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const calculateAge = (year, month, day) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  // Calcul de l'âge en années
  let ageYears = currentYear - year;

  // Calcul de l'âge en mois
  let ageMonths = currentMonth - month;
  console.log(currentMonth, month);
  if (ageMonths < 0 || (ageMonths === 0 && currentDay < day)) {
    ageYears--;
    ageMonths += 12;
  }
  // Calcul de l'âge en jours
  let ageDays = currentDay - day;
  if (ageDays < 0) {
    ageMonths--;
    ageDays += getDaysInMonth(currentYear, currentMonth);
  }

  return `${ageYears} years and ${ageMonths} months and ${ageDays}days`;
};
(() => {
  // your code here

    const button = document.getElementById("run");
  button.addEventListener("click", () => {
    
  let year = document.getElementById("dob-year");
  let month = document.getElementById("dob-month");
  let day = document.getElementById("dob-day");
    console.log(year, month, day);
    alert(calculateAge(Number(year.value), Number(month.value) - 1, Number(day.value)));
  });
})();
