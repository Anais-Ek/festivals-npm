const { afficherListeComplete, afficherListeFiltree } = require('./index');

// Liste complète de tous les événements
afficherListeComplete();

// Liste filtrée par région
const regionFiltre = process.argv[2]; // Récupère la région passée en argument de ligne de commande
if (regionFiltre) {
  afficherListeFiltree(regionFiltre);
} else {
  console.log('Spécifier une région en argument de ligne de commande.');
}
