/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   // Demande l'âge de l'utilisateur
var age = prompt("Quel est votre âge?");

// Demande le sexe de l'utilisateur
var sexe = prompt("Quel est votre sexe (homme ou femme)?");

// Demande la ville de l'utilisateur
var ville = prompt("Dans quelle ville habitez-vous?");

// Affiche les informations de l'utilisateur dans une boîte de dialogue
var cf = confirm("Votre âge est " + age + ", votre sexe est " + sexe + " et vous habitez à " + ville + ". Est-ce correct?");

// Si l'utilisateur ne confirme pas les informations, recommence le processus
while (!cf) {
  age = prompt("Quel est votre âge?");
  sexe = prompt("Quel est votre sexe (homme ou femme)?");
  ville = prompt("Dans quelle ville habitez-vous?");
  cf = confirm("Votre âge est " + age + ", votre sexe est " + sexe + " et vous habitez à " + ville + ". Est-ce correct?");
}
})();
