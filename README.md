# 📝 Bloc-Notes de Jerem

## 🎯 Présentation du Projet

"Bloc-Notes de Jerem" est une application web personnelle permettant de suivre et d'enregistrer différentes activités dans un format de bloc-notes numérique. Ce projet a été conçu pour centraliser le suivi de diverses activités dans un seul endroit, avec une interface utilisateur simple et intuitive.

## 💡 Concept

Le concept central est de créer un espace personnel où l'utilisateur peut:
- 🎮 Suivre ses performances dans différents jeux (comme League of Legends)
- 💪 Enregistrer et analyser ses entraînements sportifs
- 🌱 Potentiellement étendre à d'autres domaines à l'avenir

Chaque section est conçue comme une "page" distincte d'un bloc-notes numérique, avec des fonctionnalités spécifiques adaptées au type d'activité suivi.

## 📂 Structure du Projet

```
bloc-notes/
├── index.html           # Page d'accueil principale
├── styles.css           # Styles pour la page d'accueil
├── scripts.js           # Scripts pour la page d'accueil
├── images/              # Dossier contenant les images globales
│   └── favicon.ico      # Icône de bloc-notes pour tous les onglets
├── lol/                 # Section League of Legends
│   ├── lol.html         # Interface pour suivre les parties LoL
│   ├── lol.css          # Styles spécifiques à LoL
│   ├── lol.js           # Scripts pour la fonctionnalité LoL
│   └── images/          # Images des champions LoL
│       ├── jinx.jpg
│       ├── sivir.jpg
│       └── masteryi.jpg
└── sport/               # Section Entraînements Sportifs
    ├── sport.html       # Interface pour suivre les entraînements
    ├── sport.css        # Styles spécifiques aux sports
    └── sport.js         # Scripts pour la fonctionnalité Sport
```

## ✨ Fonctionnalités

### 🏠 Page d'Accueil
- Interface principale présentant les différentes catégories disponibles
- Navigation intuitive vers chaque section par des cartes cliquables
- Design responsive adapté à tous les appareils

### 🎮 Section League of Legends
- Suivi des parties jouées avec trois champions spécifiques: Jinx, Sivir et Maître Yi
- 🔢 Compteur pour chaque champion montrant le nombre de parties jouées
- ➕ Bouton d'incrémentation pour ajouter facilement une nouvelle partie
- 🖼️ Visualisation avec les images officielles des champions
- 💾 Stockage local des données (localStorage) pour conserver les compteurs entre les sessions

### 💪 Section Entraînements Sportifs
- 📋 Formulaire complet pour enregistrer de nouveaux entraînements avec:
  - 🏃‍♂️ Type d'entraînement (Cardio, Musculation, Natation, etc.)
  - 📅 Date et heure
  - ⏱️ Durée
  - 📝 Notes personnelles
- 📊 Historique des entraînements effectués
- 🔍 Fonctionnalité de filtrage par type d'entraînement
- 💾 Stockage local des données (localStorage) pour conserver l'historique

## 🛠️ Technologies Utilisées

- **🌐 HTML5** : Structure des pages
- **🎨 CSS3** : Mise en forme et design responsive
- **⚙️ JavaScript** : Fonctionnalités interactives et gestion des données
- **🗃️ LocalStorage API** : Stockage des données côté client

## 📚 Comment Utiliser

1. **🧭 Navigation** : Depuis la page d'accueil, cliquez sur l'une des cartes pour accéder à la section correspondante.

2. **🎮 League of Legends** :
   - Pour chaque champion (Jinx, Sivir, Maître Yi), utilisez le bouton "Ajouter une partie" pour incrémenter le compteur après une partie.
   - Les compteurs sont automatiquement sauvegardés et persistants.

3. **💪 Entraînements Sportifs** :
   - Remplissez le formulaire avec les détails de votre entraînement (type, date, heure, durée, notes).
   - Cliquez sur "Ajouter" pour enregistrer l'entraînement dans votre historique.
   - Utilisez le filtre pour afficher uniquement certains types d'entraînements.

4. **🔙 Retour** : Utilisez le bouton "Retour à l'accueil" présent sur chaque page pour revenir à la page principale.

## 📥 Installation et Déploiement

1. 📥 Clonez ou téléchargez l'ensemble des fichiers sur votre ordinateur.
2. 🚫 Aucune installation spécifique n'est nécessaire, le site fonctionne en ouvrant simplement le fichier `index.html` dans un navigateur web.
3. 🌐 Pour un déploiement en ligne, téléchargez l'ensemble des fichiers sur votre hébergeur web.

## 🔧 Personnalisation

Le code est conçu pour être facilement extensible:
- ➕ Ajoutez de nouveaux champions dans la section LoL en dupliquant la structure HTML et en ajoutant leurs identifiants dans le script JavaScript.
- 🔄 Modifiez les types d'entraînements sportifs en ajustant les options dans le formulaire et les filtres.
- 🆕 Créez de nouvelles sections en suivant le modèle de structure des dossiers existants.

## ⚙️ Fonctionnement Technique

Les données sont stockées localement dans le navigateur de l'utilisateur via l'API localStorage. Cela signifie que:
- 🚫 Aucun serveur n'est nécessaire pour le fonctionnement
- 💾 Les données sont préservées même après la fermeture du navigateur
- 📱 Les données sont spécifiques à l'appareil utilisé (non synchronisées entre différents appareils)

## 🚀 Perspectives d'Évolution

Ce bloc-notes numérique pourrait être étendu avec:
- 🗂️ De nouvelles sections pour d'autres activités
- 📊 Des graphiques pour visualiser les progrès
- 🔄 Une synchronisation des données via un compte utilisateur
- 📱 Une version mobile sous forme d'application

---

✨ Créé par Jerem © 2025 ✨ 