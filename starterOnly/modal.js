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
const formulaire = document.getElementById("formulaire");
const FirstNameErreur = document.querySelector(".FirstNameErreur");
const LastNameErreur = document.querySelector(".LastNameErreur");
const EmailErreur = document.querySelector(".EmailErreur");
const CheckboxErreur = document.querySelector(".Check-boxErreur");

const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const cities = document.querySelectorAll('[name="location"]')

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

// pour valider l'entrée du prenom si deux caractères ou plus
function validate() {
  if (firstname.value.length < 2) {
    FirstNameErreur.style.display = "block";
  } else {
    FirstNameErreur.style.display = "none";
  }

  // pour valider l'entrée du nom si deux caractères ou plus
  if (lastname.value.length < 2) {
    LastNameErreur.style.display = "block";
  } else {
    LastNameErreur.style.display = "none";
  }

  //Pour que les entrées de l'email soit valides
  if (!emailRegex.test(email.value)) {
    EmailErreur.style.display = "block";
  } else {
    EmailErreur.style.display = "none";
  }

  //
  CheckboxErreur.style.display ="block";
  cities.forEach ((city) => {
    if (city.checked) {
      CheckboxErreur.style.display ="none";
    }
  })
}

formulaire.addEventListener('submit', (e) => {
  e.preventDefault()
  validate()
})