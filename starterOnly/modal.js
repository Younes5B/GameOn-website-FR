function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer la pop up avec un click sur la croix en selectionnant l'id de la croix
const closePopupBtn = document.getElementById('closePopupBtn');

// Ajouter événement pour fermer la pop-up
if (closePopupBtn) { // Verifie si le bouton existe
  closePopupBtn.addEventListener('click', () => { //condition : si il y a un click sur la croix
    modalbg.style.display = "none"; // Ferme la pop-up
  });
}
