const vols = [{
    destination: 'Martinique',
    date_depart: '01/25/2019',
    compagnie_aerienne: 'Ryanair',
    numVol: 'xxxxx',
    prix: '350',
    dureeTrajet: '6'
  },
  {
    destination: 'Londres',
    date_depart: '07/25/2019',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '150',
    dureeTrajet: '2'
  },
  {
    destination: 'Paris',
    date_depart: '08/12/2019',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '50',
    dureeTrajet: '1'
  },
  {
    destination: 'Mexico',
    date_depart: '09/03/2019',
    compagnie_aerienne: 'Lufthansa',
    numVol: 'xxxxx',
    prix: '1350',
    dureeTrajet: '8'
  },
  {
    destination: 'Tokyo',
    date_depart: '12/12/2020',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '750',
    dureeTrajet: '14'
  },
  {
    destination: 'Tokyo',
    date_depart: '12/11/2020',
    compagnie_aerienne: 'Lufthansa',
    numVol: 'xxxxx',
    prix: '850',
    dureeTrajet: '14'
  }
  ];
  
  
  //Affichez tous les vols (destination - Date de départ- compagnie aérienne -
  //numero de vol - prix - durée du trajet)

    // on boucle sur le tableau pour cibler les objets un par un
//   vols.forEach(element => {
    // on affiche tous les éléments avec leurs caractéristiques
//       console.log(element.destination, element.date_depart, element.compagnie_aerienne, element.numVol, element.prix, element.dureeTrajet);
//   })
  


  //Afficher tous les vols dont le trajet est inférieur à 7h. (idem)
    // même principe...
//   vols.forEach(element => {
    // en incorporant une boucle IF pour cibler les durées inférieur à 7
//       if(element.dureeTrajet < 7) {
//         console.log(element.destination, element.date_depart, element.compagnie_aerienne, element.numVol, element.prix, element.dureeTrajet);
//       }
// })
  
    // même principe...
  //Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)
//   vols.forEach(element => {
    // mais cette fois on incorpore une nouvelle condition 
//     if(element.destination === 'Tokyo' && element.compagnie_aerienne === 'Air france') {
//       console.log(element.destination, element.date_depart, element.compagnie_aerienne, element.numVol, element.prix, element.dureeTrajet);
//     }
// })

  
  //Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
  //voyagent avec Air france

//   vols.forEach(element => {
//     if(element.prix < 700 && element.compagnie_aerienne === 'Air france') {
//       console.log(element.destination, element.date_depart, element.compagnie_aerienne, element.numVol, element.prix, element.dureeTrajet);
//     }
// })
  
  //Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
  //et dont la durée du trajet est inférieur à 15 heures

//   vols.forEach(element => {
     // troisième condition
//     if(element.compagnie_aerienne === 'Lufthansa' && element.prix < 900 && element.dureeTrajet < 15) {
//       console.log(element.destination, element.date_depart, element.compagnie_aerienne, element.numVol, element.prix, element.dureeTrajet);
//     }
// })
  
  //Appliquer une reduc de 20% sur chaque vol organiser après 2019 et les afficher
//   vols.forEach(element => {
//       // on récupère la date dans un tableau
//       const getDate = element.date_depart.split('');
//       // on cible la décennie de la date pour vérifier les vols qui partent après 2019
//       if(getDate[8] >= "2") {
//           // pour les vols concernés, on définit un nouveau prix avec une ristourne de 20%
//           const nouveauPrix = element.prix - (element.prix / 5);
//           // on affiche les vols concernés en insérant le nouveau prix transformé en chaîne de caractères
//           console.log(element.destination, element.date_depart, element.compagnie_aerienne, element.numVol, String(nouveauPrix), element.dureeTrajet);
//       }
// })
  
//   Afficher tous les vols pour Paris prévus entre le "06/02/2019" et le "09/06/2019".

// on crée une fonction qui vérifie qu'une date se trouve entre le 2 juin 2019 et le 6 septembre 2019
//   const checkDate = (dateToCheck) => {
//     let startingDate = new Date(2019, 6, 2);
//     let limitDate = new Date(2019, 9, 6);
//     if(startingDate < dateToCheck && dateToCheck < limitDate) {
//       return true;
//     } else {
//       return false;
//     };
//   };

//   vols.forEach(element => {
//     // pour chaque vol, on transforme sa date de départ en objet Date
//     let transformedDate = new Date(element.date_depart);
//     // si la fonction qui vérifie la validité de la date renvoie true && que la destination est Paris...
//     if(checkDate(transformedDate) && element.destination === 'Paris') {
//     // ...on affiche le vol correspondant
//       console.log(element.destination, element.date_depart, element.compagnie_aerienne, element.numVol, element.prix, element.dureeTrajet);
//     }
// })


//----------------------------------------------------------------------------------



//Afficher tous les vols à partir de la date d'aujourd'hui

//Un petit coup de main...
//Il faut récupèrer la date du jour avec l'objet 'date' (new Date()) fournis par Javascript.

//La fonction suivante permet de comparer deux dates et renvoie 'true' si date1 est supérieur à date2
//Pour comparer deux, celles-ci doivent avoir le même format.

// on récupère la date d'aujourd'hui
let todayDate = new Date();


// on utilise la fonction qui permet de comparer deux dates et renvoie true si la deuxième est antérieure ou égale à la première
const date1SupDate2 = (date1, date2) => {
    startDate = new Date(date1);
    endDate = new Date(date2);
    if (startDate >= endDate) {
      return true;
    } else {
      return false;
    };
  };
  
    // pour chaque élément du tableau =>
  vols.forEach(element => {
    // on transforme sa date de départ en date utilisable par la fonction
    let transformedDate = new Date(element.date_depart);
    // si la date de départ du vol est au moins égale à la date d'aujourd'hui...
    if(date1SupDate2(element.date_depart, todayDate)) {
    // ... on affiche le vol correspodant
      console.log(element.destination, element.date_depart, element.compagnie_aerienne, element.numVol, element.prix, element.dureeTrajet);
    }
})
  
  
  
  //Allez voir ce qu'est un JSON !
  //https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON