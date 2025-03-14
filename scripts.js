// Fonction pour afficher un effet de clic sur les cartes
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.category-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Ajoute une classe pour l'animation de clic
            this.classList.add('card-clicked');
            
            // Retire la classe après l'animation
            setTimeout(() => {
                this.classList.remove('card-clicked');
            }, 200);
            
            // La redirection est déjà gérée par l'attribut onclick dans le HTML
        });
    });
}); 