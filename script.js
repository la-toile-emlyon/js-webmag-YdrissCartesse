function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      /// EXAM: COMPLÉTEZ LE CODE ICI !
      console.log(data);


      // TODO 1: REMPLIR LE HEADER
      let h1 = document.getElementById("nom-journal");
      console.log(h1);

      let nomJournal = data.journal.nomJournal;
      console.log(nomJournal);

      h1.textContent = nomJournal;

      let phraseA = document.getElementById("phrase-accroche");
      console.log(phraseA);

      let phraseAccroche = data.journal.phraseAccroche;
      console.log(phraseAccroche);

      phraseA.textContent = phraseAccroche;


      // TODO 2: REMPLIR LA NAVIGATION













      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL








      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
`articles-grid`
array.forEach(ij => {
  <div class="">
        <img src="${}" alt="${} ${}">
        <p>${}</p>
        <p>${}</p>
        <p>${}</p>
      </div> 
});



      
      // TODO 5: REMPLIR LES THEMES

      // TODO 6: REMPLIR LES AUTEURS

      // TODO 7: REMPLIR LE CALL TO ACTION

      /// FIN DU CODE

      // BONUS 1 : Alert sur le bouton CTA

      // BONUS 2 : Filtrage par thème

      // BONUS 3 : Tri par popularité
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();
