const axios = require('axios');

const apiUrl = 'https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=50';

// Liste complète de tous les 50 événements
console.log('Liste complète de tous les événements :');
axios.get(apiUrl)
  .then(function(response) {
    const records = response.data.records;
    for (let i = 0; i < records.length; i++) {
      const fields = records[i].fields;
      const nom = fields.nom_de_la_manifestation;
      const commune = fields.commune_principale;
      const departement = fields.departement;
      const region = fields.region;
      const date_debut = fields.date_debut_ancien;
      const date_fin = fields.date_de_fin_ancien;

      console.log('Nom du festival :', nom);
      console.log('Ville :', commune);
      console.log('Département :', departement);
      console.log('Région :', region);
      console.log('Date début :', date_debut);
      console.log('Date de fin :', date_fin);
      console.log('----------------------------------');
    }
  })
  .catch(function(error) {
    console.error('Une erreur s\'est produite lors de la récupération des données.', error);
  });

  
// Liste filtrée par région
const regionFiltre = 'Occitanie';
console.log(`\nListe filtrée par région (${regionFiltre}) :`);
axios.get(`${apiUrl}&refine.region=${regionFiltre}`)
  .then(function(response) {
    const records = response.data.records;
    for (let i = 0; i < records.length; i++) {
      const fields = records[i].fields;
      const nom = fields.nom_de_la_manifestation;
      const commune = fields.commune_principale;
      const departement = fields.departement;
      const region = fields.region;
      const date_debut = fields.date_debut_ancien;
      const date_fin = fields.date_de_fin_ancien;

      console.log('Nom du festival :', nom);
      console.log('Ville :', commune);
      console.log('Département :', departement);
      console.log('Région :', region);
      console.log('Date début :', date_debut);
      console.log('Date de fin :', date_fin);
      console.log('----------------------------------');
    }
  })
  .catch(function(error) {
    console.error('Une erreur s\'est produite lors de la récupération des données.', error);
  });

