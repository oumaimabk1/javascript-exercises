/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const button = document.getElementById("run");

  button.addEventListener("click", () => {
    const id = document.getElementById("hero-id").value;

    fetch(`http://localhost:3000/heroes/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(res => console.log(res));
  });
})();
