/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const person = {
    lastname: "Delnatte",
    firstname: "Pierre-Antoine",
    nickname: "Leny",
    birthDate: "08-05-1985",
    city: "Liège",
    status: "married",
  };
  // your code here
  document.getElementById("run").addEventListener("click", () => {
    // afficher les clés de l'objet dans la console
    console.log(Object.keys(person));

    // afficher les valeurs de l'objet dans la console
    console.log(Object.values(person));
  });
})();
