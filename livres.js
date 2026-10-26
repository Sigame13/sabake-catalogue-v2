/* ==========================================================
   ÉDITIONS SABAKÉ — Données du site
   C'est le SEUL fichier à modifier pour mettre à jour le site :
   1) les coordonnées de la maison d'édition (bloc SABAKE)
   2) la liste des livres (tableau LIVRES)
   Attention : gardez les guillemets "..." et les virgules.
   ========================================================== */

const SABAKE = {
  nom: "Éditions Sabaké",
  signature: "Littératures africaines",

  // Coordonnées officielles
  email: "sabake.ed.livre@gmail.com",
  telephone: "+223 70 73 99 99",   // laisser "" pour ne pas l'afficher
  whatsapp: "",           // numéro international sans + ni espaces, ex. "22300000000"
  adresse: "",            // ex. "Bamako, Mali"
  facebook: "https://web.facebook.com/profile.php?id=61595759910136",
  instagram: "",          // lien complet de votre compte, ou ""

  // Adresse du site (utile pour le référencement)
  siteUrl: "https://sigame13.github.io/sabake-catalogue/"
};

const CATEGORIES = ["Roman", "Poésie", "Essai", "Jeunesse", "Culture"];

/* ----------------------------------------------------------
   LISTE DES LIVRES
   Pour ajouter un livre : copiez un bloc { ... }, collez-le
   dans la liste, séparé par une virgule, puis modifiez-le.

   Champs obligatoires : titre, auteur, categorie, resume
   Champs facultatifs  : couverture, couleur, annee, pages,
                         isbn, prix, disponible

   - categorie : une des valeurs de CATEGORIES ci-dessus
   - couverture : chemin de l'image, ex. "images/mon-livre.jpg"
                  (sans image, une couverture typographique
                  est générée automatiquement)
   - couleur : "brun", "or", "olive" ou "bleu" (couverture générée)
   - prix : texte libre, ex. "5 000 FCFA" (sinon laisser "")
   - disponible : true ou false
   ---------------------------------------------------------- */

const LIVRES = [
  {
    titre: "Les Chants sahéliens des Damnés",
    auteur: "Dr Sigame Boubacar Maïga",
    categorie: "Essai",
    resume: "Une adaptation de La Divine Comédie de Dante Alighieri, transposée dans les réalités contemporaines du Sahel. Entre mémoire, éthique et force du libre arbitre, l'ouvrage explore les tourments, les espoirs et les crises d'un continent en pleine mutation, dans une méditation universelle sur la condition humaine et la quête de justice.",
    couverture: "images/les-chants-saheliens-des-damnes.jpg",
    couleur: "brun",
    annee: "",
    pages: "",
    isbn: "978-99952-942-8-1",
    prix: "10 euros",
    disponible: true
  },

  // Pour ajouter un autre livre : copiez le bloc ci-dessus, collez-le ici
  // (sans oublier la virgule), puis modifiez les informations.
];
