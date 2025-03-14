// Fonction pour formater la date
function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', options);
}

// Fonctions de stockage
function saveWorkouts(workouts) {
    localStorage.setItem('workouts', JSON.stringify(workouts));
}

function loadWorkouts() {
    return JSON.parse(localStorage.getItem('workouts')) || [];
}

// Ajouter un entraînement
function addWorkout(type, date, time, duration, notes) {
    const workouts = loadWorkouts();
    
    const newWorkout = {
        id: Date.now(),
        type, date, time, duration, notes,
        timestamp: new Date(`${date}T${time}`).getTime()
    };
    
    workouts.push(newWorkout);
    workouts.sort((a, b) => b.timestamp - a.timestamp);
    
    saveWorkouts(workouts);
    displayWorkouts();
}

// Supprimer un entraînement
function deleteWorkout(id) {
    let workouts = loadWorkouts();
    workouts = workouts.filter(workout => workout.id !== id);
    saveWorkouts(workouts);
    displayWorkouts();
}

// Afficher les entraînements
function displayWorkouts(filterType = 'Tous') {
    const workoutList = document.getElementById('workout-list');
    let workouts = loadWorkouts();
    
    if (filterType !== 'Tous') {
        workouts = workouts.filter(workout => workout.type === filterType);
    }
    
    workoutList.innerHTML = '';
    
    if (workouts.length === 0) {
        workoutList.innerHTML = '<li class="no-workouts-message">Aucun entraînement enregistré</li>';
        return;
    }
    
    workouts.forEach(workout => {
        const workoutItem = document.createElement('li');
        workoutItem.className = 'workout-item';
        workoutItem.draggable = true;
        workoutItem.dataset.id = workout.id;
        
        workoutItem.innerHTML = `
            <div class="workout-item-header">
                <span class="workout-type">${workout.type}</span>
                <button class="delete-workout" onclick="deleteWorkout(${workout.id})">×</button>
            </div>
            <div class="workout-date-time">${formatDate(workout.date)} à ${workout.time}</div>
            <div class="workout-details">Durée: ${workout.duration} minutes</div>
            ${workout.notes ? `<div class="workout-notes">${workout.notes}</div>` : ''}
        `;
        
        workoutList.appendChild(workoutItem);
    });
}

// Définir la date d'aujourd'hui par défaut
function setTodayDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    
    document.getElementById('workout-date').value = `${yyyy}-${mm}-${dd}`;
}

// Initialiser la page au chargement
document.addEventListener('DOMContentLoaded', function() {
    // Définir la date d'aujourd'hui
    setTodayDate();
    
    // Afficher les entraînements existants
    displayWorkouts();
    
    // Gérer le formulaire d'ajout
    document.getElementById('workout-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const type = document.getElementById('workout-type').value;
        const date = document.getElementById('workout-date').value;
        const time = document.getElementById('workout-time').value;
        const duration = document.getElementById('workout-duration').value;
        const notes = document.getElementById('workout-notes').value;
        
        addWorkout(type, date, time, duration, notes);
        
        // Réinitialiser le formulaire
        this.reset();
        setTodayDate();
    });
    
    // Gérer le filtre de type
    document.getElementById('filter-type').addEventListener('change', function() {
        displayWorkouts(this.value);
    });
}); 