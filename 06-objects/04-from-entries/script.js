/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const keys = ["name", "species", "age", "gender", "color"];
  const values = ["Skitty", "cat", 9, "female", "tabby"];
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    // créer un tableau de paires clé-valeur à partir de keys et values
    const entries = keys.map((key, index) => [key, values[index]]);
    //console.log(entries)
    // créer un objet à partir du tableau entries
    const person = Object.fromEntries(entries);

    // afficher l'objet dans la console
    console.log(person);
  });
})();
