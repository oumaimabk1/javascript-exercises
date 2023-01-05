/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const birds = [
    { name: "mouette", fem: true },
    { name: "corbeau" },
    { name: "mésange", fem: true },
    { name: "hibou" },
    { name: "buse", fem: true },
    { name: "pigeon" },
    { name: "pie", fem: true },
    { name: "vautour" },
    { name: "faucon" },
    { name: "rouge-gorge" },
    { name: "tourterelle", fem: true },
    { name: "corneille", fem: true },
  ];
  const adjectives = new Set([
    "cendré",
    "huppé",
    "chantant",
    "hurlant",
    "perché",
    "grand",
    "petit",
    "bleu",
    "pantelant",
    "tangent",
    "arboré",
  ]);

  // your code here
  const button = document.getElementById("run");
  button.addEventListener("click", () => {
    const adjectiveArray = Array.from(adjectives);
    const randomBirdIndex = Math.floor(Math.random() * birds.length);
    const randomBird = birds[randomBirdIndex];
    const randomIndex = Math.floor(Math.random() * adjectives.size);
    const randomAdjective = adjectiveArray[randomIndex];
    // déterminer si l'oiseau est masculin ou féminin
    let article = "Le";
    if (randomBird.fem) {
      article = "La";
    }
    console.log(`${article} ${randomBird.name} ${randomAdjective}`);
  });
})();
