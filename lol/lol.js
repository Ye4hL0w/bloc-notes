// Fonction pour charger les compteurs depuis le stockage local
function loadCounters() {
    const champions = ['jinx', 'sivir', 'masteryi'];
    
    champions.forEach(champion => {
        const count = localStorage.getItem(`${champion}-count`) || 0;
        document.getElementById(`${champion}-counter`).textContent = count;
    });
}

// Fonction pour incrémenter un compteur
function incrementCounter(champion) {
    // Récupérer la valeur actuelle
    const counterElement = document.getElementById(`${champion}-counter`);
    let count = parseInt(counterElement.textContent) || 0;
    
    // Incrémenter
    count++;
    
    // Mettre à jour l'affichage
    counterElement.textContent = count;
    
    // Sauvegarder dans le stockage local
    localStorage.setItem(`${champion}-count`, count);
    
    // Ajouter une animation satisfaisante
    const button = document.getElementById(`${champion}-button`);
    button.classList.add('clicked');
    
    // Créer une animation de particules
    createParticles(button);
    
    // Retirer la classe d'animation après son exécution
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 300);
}

// Fonction pour créer des particules lorsqu'un bouton est cliqué
function createParticles(button) {
    const buttonRect = button.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;
    
    // Créer plusieurs particules
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        document.body.appendChild(particle);
        
        // Positionner la particule au centre du bouton
        particle.style.left = `${buttonX}px`;
        particle.style.top = `${buttonY}px`;
        
        // Définir une couleur aléatoire
        const hue = Math.random() * 60 + 160; // Nuances de bleu-vert
        particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        
        // Définir une taille aléatoire
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Créer une animation avec des valeurs aléatoires
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 50 + 50;
        const xPos = Math.cos(angle) * velocity;
        const yPos = Math.sin(angle) * velocity;
        
        // Animer la particule
        particle.animate(
            [
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${xPos}px, ${yPos}px) scale(0)`, opacity: 0 }
            ],
            {
                duration: Math.random() * 500 + 500,
                easing: 'cubic-bezier(0, .9, .57, 1)',
                fill: 'forwards'
            }
        );
        
        // Supprimer la particule après l'animation
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Ajouter du CSS pour les particules et les animations de bouton
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: fixed;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
    }
    
    .increment-button.clicked {
        animation: pulse 0.3s ease-in-out;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Charger les compteurs au chargement de la page
document.addEventListener('DOMContentLoaded', loadCounters); 