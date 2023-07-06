const axios = require('axios');

async function fetchData() {
  const apiUrl = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=50';

  try {
    const response = await axios.get(apiUrl);
    const records = response.data.records;
    const data = [];

    for (let i = 0; i < records.length; i++) {
      const fields = records[i].fields;
      const nom = fields.nom_de_la_manifestation;
      const commune = fields.commune_principale;
      const departement = fields.departement;
      const region = fields.region;
      const date_debut = fields.date_debut_ancien;
      const date_fin = fields.date_de_fin_ancien;

      data.push({
        nom: nom,
        commune: commune,
        departement: departement,
        region: region,
        date_debut: date_debut,
        date_fin: date_fin
      });
    }

    return data;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des données.', error);
    return [];
  }
}

async function afficherListeComplete() {
  try {
    const data = await fetchData();

    console.log('Liste complète de tous les événements :');
    data.forEach(function(event) {
      console.log('Nom du festival :', event.nom);
      console.log('Ville :', event.commune);
      console.log('Département :', event.departement);
      console.log('Région :', event.region);
      console.log('Date début :', event.date_debut);
      console.log('Date de fin :', event.date_fin);
      console.log('----------------------------------');
    });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'affichage de la liste complète.', error);
  }
}

async function afficherListeFiltree(regionFiltre) {
  try {
    const data = await fetchData();
    const listeFiltree = data.filter(function(event) {
      return event.region === regionFiltre;
    });

    console.log(`\nListe filtrée par région (${regionFiltre}) :`);
    listeFiltree.forEach(function(event) {
      console.log('Nom du festival :', event.nom);
      console.log('Ville :', event.commune);
      console.log('Département :', event.departement);
      console.log('Région :', event.region);
      console.log('Date début :', event.date_debut);
      console.log('Date de fin :', event.date_fin);
      console.log('----------------------------------');
    });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de l\'affichage de la liste filtrée.', error);
  }
}

module.exports = { fetchData, afficherListeComplete, afficherListeFiltree };
