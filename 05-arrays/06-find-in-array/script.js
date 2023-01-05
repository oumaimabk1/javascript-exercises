/* becode/javascript
 *
 * /05-arrays/06-find-in-array/script.js - 5.6: recherche dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const people = [
    {
      firstname: "Bradford",
      lastname: "Coldbath",
      email: "bcoldbath0@wired.com",
    },
    {
      firstname: "Nadiya",
      lastname: "Stendell",
      email: "nstendell1@nsw.gov.au",
    },
    {
      firstname: "Auroora",
      lastname: "Stapford",
      email: "astapford2@wsj.com",
    },
    {
      firstname: "Berkley",
      lastname: "McKall",
      email: "bmckall3@about.me",
    },
    {
      firstname: "Wolf",
      lastname: "McCurley",
      email: "wmccurley4@yale.edu",
    },
    {
      firstname: "Jorrie",
      lastname: "Canedo",
      email: "jcanedo5@engadget.com",
    },
    {
      firstname: "Bethanne",
      lastname: "Ackred",
      email: "backred6@imgur.com",
    },
    {
      firstname: "Zorah",
      lastname: "Whild",
      email: "zwhild7@sogou.com",
    },
    {
      firstname: "Jean",
      lastname: "Dupont",
      email: "jdupont@elpais.com",
    },
    {
      firstname: "Zulema",
      lastname: "Ericsson",
      email: "zericsson9@ed.gov",
    },
    {
      firstname: "Brady",
      lastname: "Scrannage",
      email: "bscrannagea@google.fr",
    },
    {
      firstname: "Isidore",
      lastname: "Korf",
      email: "ikorfb@google.com",
    },
    {
      firstname: "Bartholomew",
      lastname: "Stockbridge",
      email: "bstockbridgec@is.gd",
    },
    {
      firstname: "Laney",
      lastname: "O' Mara",
      email: "lomarad@forbes.com",
    },
    {
      firstname: "Gabe",
      lastname: "Keatch",
      email: "gkeatche@google.fr",
    },
  ];

  // your code here
  document.getElementById("run").addEventListener("click", () => {
    // Utilisez la méthode Array.prototype.find() pour trouver l'objet de la personne dont le nom est "Dupont" et le prénom "Jean" dans le tableau "people"
    const person = people.find(
      (p) => p.firstname === "Jean" && p.lastname === "Dupont"
    );

    // Vérifiez si la personne a été trouvée
    if (person) {
      // Affichez l'e-mail de la personne dans la console
      console.log(person.email);

      // Affichez l'index de la personne dans le tableau "people" dans la console en utilisant la méthode Array.prototype.indexOf()
      console.log(people.indexOf(person));
    } else {
      // Si la personne n'a pas été trouvée, affichez un message d'erreur dans la console
      console.error("Person not found in array.");
    }
  });
})();
