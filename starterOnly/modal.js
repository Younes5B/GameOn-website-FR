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
const NombreErreur = document.querySelector(".NombreErreur");
const ConditionsErreur = document.querySelector(".ConditionsErreur");
const BirthdateErreur = document.querySelector(".BirthdateErreur");
const MessageConfirmationFormulaire = document.querySelector(".MessageConfirmationFormulaire");

const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const cities = document.querySelectorAll('[name="location"]')
const quantity = document.getElementById('quantity');
const checkbox1 = document.getElementById('checkbox1');
const birthdate = document.getElementById('birthdate');

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

//Fonction qui permet de vérifier si le formulaire est bien remplis
function validate() {

  let FormulaireValide = true;//Verifie si les conditions sont remplis pour valider le formulaire

  //Si le prénom contient moin de deux caractères, afficher un message d'erreur
  if (firstname.value.length < 2) {
    FirstNameErreur.style.display = "block";
    FormulaireValide = false;//Invalide le formulaire
  } else {
    FirstNameErreur.style.display = "none";//n'affiche pas de message d'erreur
  }

  //Si le nom contient moin de deux caractères, afficher un message d'erreur
  if (lastname.value.length < 2) {
    LastNameErreur.style.display = "block";
    FormulaireValide = false;//Invalide le formulaire
  } else {
    LastNameErreur.style.display = "none";//n'affiche pas de message d'erreur
  }

  //Pour que les entrées de l'email soit valides
  if (!emailRegex.test(email.value)) {
    EmailErreur.style.display = "block";
    FormulaireValide = false;//Invalide le formulaire
  } else {
    EmailErreur.style.display = "none";//n'affiche pas de message d'erreur
  }

  //Si aucune date de naissance n'est entrée, afficher un message d'erreur
if (birthdate.value === "") {
    BirthdateErreur.style.display = "block";
    FormulaireValide = false;//Invalide le formulaire
  } else {
    BirthdateErreur.style.display = "none";//n'affiche pas de message d'erreur
  }

  //Si aucune ville n'est séléctionné, afficher un message d'erreur
  let cityChecked = false;
cities.forEach((city) => {//Vérifie qu'une ville est coché parmis la liste
  if (city.checked) {
    cityChecked = true;
  }
});

if (!cityChecked) {//Si aucune ville n'est séléctionné, afficher un message d'erreur
  CheckboxErreur.style.display = "block";
  FormulaireValide = false;//Invalide le formulaire
} else {
  CheckboxErreur.style.display = "none";//n'affiche pas de message d'erreur
}

  //Si la quantité choisis est vide, inférieur à 0 ou supérieur à 99, afficher un message d'erreur
  if (quantity.value === "" || quantity.value < 0 || quantity.value > 99) {
    NombreErreur.style.display = "block";
    FormulaireValide = false;//Invalide le formulaire
  } else {
    NombreErreur.style.display = "none";//n'affiche pas de message d'erreur
  }

  //Si la case "conditions d'utilisation" n'est pas coché, afficher un message d'erreur 
   if (!checkbox1.checked) {
    ConditionsErreur.style.display = "block";
    FormulaireValide = false;//Invalide le formulaire
  } else {
    ConditionsErreur.style.display = "none";//n'affiche pas de message d'erreur
  }

  return FormulaireValide;//Retourne le resultat de la variable pour valider ou non le formulaire
}

//Pour pouvoir fermer la pop-up, stopper le comportement natif qui est de recharger la page
formulaire.addEventListener('submit', (e) => {
  e.preventDefault()
   if (validate()) {
    // Si la validation est réussit, afficher le message de confirmation
    formulaire.style.display = "none";//Cache le formulaire
    MessageConfirmationFormulaire.style.display = "block";//Affiche le message de validation du formulaire
  }
})