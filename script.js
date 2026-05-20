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
      let articlePrincipal = document.getElementById("article-principal")
      console.log(articlePrincipal);
      let principal = data.journal.articlePrincipal;
      console.log(principal);

      let articlePrincipalImage = principal.image;
      let articlePrincipalTheme = principal.theme;
      let articlePrincipalTitre = principal.titre;
      let articlePrincipalDescription = principal.description;
      let articlePrincipalDate = principal.date;
      let replaceArticle = `
    <img src="${articlePrincipalImage}" alt="${articlePrincipalTitre}">
    <span class="theme-badge">${articlePrincipalTheme}</span>
       <h2>${articlePrincipalTitre}</h2>
      <p>${articlePrincipalDescription}</p>
      <p class="date">${articlePrincipalDate}</p>`

      console.log(articlePrincipal);
      articlePrincipal.insertAdjacentHTML("beforeend", replaceArticle);

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
      let articleGrid = document.getElementById("articles-grid");
      console.log(articleGrid);

      let articleCards = "";
      data.journal.articles.forEach(article => {
        let title = article.titre;
        let date = article.date;
        let theme = article.theme;
        let image = article.image;

        articleCards += `
      <article class="article-card">
        <img src="${image}" alt="${title}">
        <span class="theme-badge">${theme}</span>
        <h2>${title}</h2>
        <p class="date">${date}</p>
      </article>`;
      });

      articleGrid.insertAdjacentHTML("beforeend", articleCards);

      // TODO 5: REMPLIR LES THEMES

      let themesList = document.getElementById("themes-list");
      console.log(themesList);

      let themesName = data.journal.themes.nom;
      let themesDescription = data.journal.themes.description;
      let themesItems = themesName + themesDescription
      console.log(themesItems);



      // TODO 6: REMPLIR LES AUTEURS


      let authorsList = document.getElementById("authors-list");
      console.log(authorsList);

      let authors = "";
      data.journal.auteurs.forEach(author => {
        let name = author.prenom;
        let authorPresentation = author.presentation;
        let photo = author.photo;
        let experience = author.typeExperience;


        authors += `
      <article class="author-card">
        <img src="${photo}" alt="${photo}" class="author-image">
        <h3>${name}</h3>
        <p class="author-role">${experience}</p>
        <p class="author-bio">${authorPresentation}</p>
        
      </article>`;
      });

      authorsList.insertAdjacentHTML("beforeend", authors);





      // TODO 7: REMPLIR LE CALL TO ACTION

 let appelAction = document.getElementById("call-to-action");
 console.log(appelAction);

 let ctaText = data.journal.texteAppelAction;
 appelAction.textContent = ctaText;
 console.log(ctaText);


let callToAction = `
<p>${ctaText}</p>
<button class="cta-button">S'abonner</button>`;


appelAction.insertAdjacentHTML("beforeend", callToAction);


      /// FIN DU CODE

      // BONUS 1 : Alert sur le bouton CTA
      let ctaButton = document.querySelector(".cta-button");
      ctaButton.addEventListener("click", function() {
        alert("Merci de votre intérêt pour notre journal ! Votre abonnement a été pris en compte.");
      });

      // BONUS 2 : Filtrage par thème

      // BONUS 3 : Tri par popularité
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();
