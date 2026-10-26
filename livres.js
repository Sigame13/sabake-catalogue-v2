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

  // ⚠️ À REMPLACER par vos vraies coordonnées
  email: "contact@editionsabake.com",
  telephone: "",          // ex. "+223 00 00 00 00" (laisser "" pour ne pas l'afficher)
  whatsapp: "",           // numéro international sans + ni espaces, ex. "22300000000"
  adresse: "",            // ex. "Bamako, Mali"
  facebook: "",           // lien complet de votre page, ou ""
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
  // EXEMPLE : enlevez les « // » au début de chaque ligne, puis modifiez.
  //
  // {
  //   titre: "Titre du livre",
  //   auteur: "Prénom Nom",
  //   categorie: "Roman",
  //   resume: "Résumé de 40 à 70 mots qui donne envie de lire sans dévoiler toute l'intrigue.",
  //   couverture: "images/titre-du-livre.jpg",
  //   couleur: "brun",
  //   annee: "2026",
  //   pages: "180",
  //   isbn: "",
  //   prix: "",
  //   disponible: true
  // },
];
