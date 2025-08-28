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
const FermezPopup = document.getElementById('FermezPopup');
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
  closePopupBtn.addEventListener('click', () => { //Condition : si il y a un click sur la croix
    modalbg.style.display = "none"; // Ferme la pop-up
  });
}

//Fonction pour afficher une erreur
function showError(element, messageElement) {
  element.closest('.formData').setAttribute("data-error-visible", "true");
  messageElement.style.display = "block";
}

//Fonction pour masquer une erreur
function hideError(element, messageElement) {
  element.closest('.formData').removeAttribute("data-error-visible");
  messageElement.style.display = "none";
}

//Fonction qui permet de vérifier si le formulaire est bien remplis
function validate() {

  //Verifie si les conditions sont remplis pour valider le formulaire
  let FormulaireValide = true;

  // Verifie que le Prénom contient minimum 2 lettres
  if (firstname.value.length < 2) {
    showError(firstname, FirstNameErreur);
    FormulaireValide = false;
  } else {
    hideError(firstname, FirstNameErreur);
  }

  // Verifie que le Nom contient minimum 2 lettres
  if (lastname.value.length < 2) {
    showError(lastname, LastNameErreur);
    FormulaireValide = false;
  } else {
    hideError(lastname, LastNameErreur);
  }

  // Verfiie que l'Email est valide
  if (!emailRegex.test(email.value)) {
    showError(email, EmailErreur);
    FormulaireValide = false;
  } else {
    hideError(email, EmailErreur);
  }

  // Verifie que la Date de naissance est entrée
  if (birthdate.value === "") {
    showError(birthdate, BirthdateErreur);
    FormulaireValide = false;
  } else {
    hideError(birthdate, BirthdateErreur);
  }

  // Vérifie qu'un Nombre de tournois entre 0 et 99 est séléctionné
  if (quantity.value === "" || quantity.value < 0 || quantity.value > 99) {
    showError(quantity, NombreErreur);
    FormulaireValide = false;
  } else {
    hideError(quantity, NombreErreur);
  }

  // Vérifie qu'au moins une Ville est séléctionné
  let cityChecked = false;
  const citiesFormData = document.querySelector('.formData input[name="location"]').closest('.formData');
  cities.forEach((city) => {
    if (city.checked) {
      cityChecked = true;
    }
  });

  if (!cityChecked) {
    citiesFormData.setAttribute("data-error-visible", "true");
    CheckboxErreur.style.display = "block";
    FormulaireValide = false;
  } else {
    citiesFormData.removeAttribute("data-error-visible");
    CheckboxErreur.style.display = "none";
  }

  // Vérifie que la case "Conditions d'utilisation" est bien cochée
  const conditionsFormData = document.getElementById('checkbox1').closest('.formData');
  if (!checkbox1.checked) {
    conditionsFormData.setAttribute("data-error-visible", "true");
    ConditionsErreur.style.display = "block";
    FormulaireValide = false;
  } else {
    conditionsFormData.removeAttribute("data-error-visible");
    ConditionsErreur.style.display = "none";
  }

  return FormulaireValide;
}

//Pour pouvoir fermer la pop-up, stopper le comportement natif qui est de recharger la page
formulaire.addEventListener('submit', (e) => {
  e.preventDefault()

  if (validate()) {
    // Si la validation est réussit, afficher le message de confirmation
    formulaire.style.display = "none";//Cache le formulaire
    MessageConfirmationFormulaire.style.display = "block";//Affiche le message de validation du formulaire

    //Réinitialise le formulaire
    FermezPopup.addEventListener('click', () => {
      formulaire.reset();

      //Cache le message de confirmation
      MessageConfirmationFormulaire.style.display = "none";

      //Affiche uen nouvelle fois le formulaire
      formulaire.style.display = "block";

      //Ferme le formulaire
      modalbg.style.display = "none";
    });
  }
})