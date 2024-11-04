const password = "geheim";
let eingabe = "";

while (eingabe !== password) {
  eingabe = prompt("Gib dein Passwort ein:");
}
 for (let index = 0; index < 3; index++) {
 eingabe = prompt("Gib dein Passwort ein:");
 if (eingabe === password) {
   document.querySelector("h1").textContent = "Erfolgreich eingeloggt!";
 }
 }
document.querySelector("h1").textContent = "Erfolgreich eingeloggt!";
console.log("Erfolgreich eingeloggt!");