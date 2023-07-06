const axios = require('axios');
const { fetchData } = require('./index');

jest.mock('axios');

describe('Test unitaire de la fonction fetchData', () => {
  test('Vérifie si la fonction fetchData récupère les données', async () => {
    const mockData = {
      data: {
        records: [
          {
            fields: {
              nom_de_la_manifestation: 'Festival 1',
              commune_principale: 'Ville 1',
              departement: '01',
              region: 'Région 1',
              date_debut_ancien: '2023-07-01',
              date_de_fin_ancien: '2023-07-05',
            },
          },
          {
            fields: {
              nom_de_la_manifestation: 'Festival 2',
              commune_principale: 'Ville 2',
              departement: '02',
              region: 'Région 2',
              date_debut_ancien: '2023-07-10',
              date_de_fin_ancien: '2023-07-15',
            },
          },
        ],
      },
    };

    axios.get.mockResolvedValue(mockData);

    const data = await fetchData();

    expect(data.length).toBe(2);
    expect(data[0].nom).toBe('Festival 1');
    expect(data[1].nom).toBe('Festival 2');
    expect(data[0].commune).toBe('Ville 1');
    expect(data[1].commune).toBe('Ville 2');
    // Ajoutez les autres assertions pour vérifier les autres propriétés des données
  });
});
