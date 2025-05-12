// Écouter l'événement de soumission du formulaire
document.getElementById("devis-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire avant validation

  // Récupérer les valeurs des champs
  const nom = document.getElementById("nom").value;
  const email = document.getElementById("email").value;
  const projet = document.getElementById("projet").value;
  const budget = document.getElementById("budget").value;
  const message = document.getElementById("message").value;

  // Validation des champs
  if (!nom || !email || !projet || !budget || !message) {
    alert("Tous les champs sont requis !");
    return; // Si des champs sont manquants, on empêche l'envoi
  }

  // Afficher le message de confirmation
  document.getElementById("confirmation-message").style.display = "block";
  
  // Simuler l'envoi du formulaire avec un délai avant soumission
  setTimeout(function() {
    // Soumettre le formulaire via Formspree
    document.getElementById("devis-form").submit();
  }, 2000); // 2 secondes de délai avant l'envoi effectif
});