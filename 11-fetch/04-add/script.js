/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const button = document.getElementById("run");
  const form = document.querySelector("form");

  button.addEventListener("click", () => {
    const name = form.querySelector("#hero-name").value;
    const alterEgo = form.querySelector("#hero-alter-ego").value;
    const powers = form.querySelector("#hero-powers").value.split(",");
    if (name && alterEgo && powers.length > 0) {
        const hero = { name, alterEgo, powers };
        console.log(hero);
        fetch('http://localhost:3000/heroes', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(hero)
        })
          .then(response => response.json())
          .then(console.log);
      }else{
        const inputs =document.getElementsByTagName('input')
        for(input of inputs){
            input.style.border= '1px solid red'
        }

      }
    
  });
})();
