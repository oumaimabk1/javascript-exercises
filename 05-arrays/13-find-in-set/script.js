/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const people = new Set([
    "Nicolas",
    "Anthony",
    "Leny",
    "Alexandre",
    "Eric",
    "Caroline",
    "Esther",
    "Simon",
    "Lucas",
  ]);

  // your code here
  const button = document.getElementById("run");
  button.addEventListener("click", () => {
    // Affiche le nombre de personnes dans le Set
    console.log(`Il y a ${people.size} personnes dans le Set.`);

    // Indique si Alexandre fait partie du Set
    if (people.has("Alexandre")) {
      console.log("Alexandre fait partie du Set.");
    } else {
      console.log("Alexandre ne fait pas partie du Set.");
    }
  });
})();
