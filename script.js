// les objets
//leteral objet (objet literaire)
// const personne = {
//   nom: "Duplex",
//   email: "tony14pro@gmail.com",
//   age: 25,
//   taille: 1.85,
//   couleur: "Noire",
//   blogs: ["les bases du js", "les bases de react ", "les bases de html"],
//   login: () => {
//     console.log("utilisateurs connectee");
//   },

//   logout: () => {
//     console.log("utilisateurs deconnectees");
//   },

//   afficherBlogs: function () {
//     this.blogs.forEach((blog) => {
//       console.log(blog);
//     });
//   },
// };

// personne.login();
// personne.logout();
// personne.afficherBlogs();

// personne.login();
// personne.logout();

// console.log(personne);
// console.log(personne.blogs);
// personne.nom = "kamjou";
// personne.age = 38;
// personne.blogs[0] = "les bases de php";
// console.log(personne.nom);
// const key = "taille";
// console.log(personne[key]);
// personne["email"] = "email@name.com";
// console.log(personne["email"]);

// un array des objet

const blogs = [
  {
    id: 1,
    titre: "les bases du js",
    contenu: "tout savoir sur les base du js",
    likes: 10,
  },

  {
    id: 2,
    titre: "les bases du php",
    contenu: "tout savoir sur les base du php",
    likes: 18,
  },

  {
    id: 3,
    titre: "les bases du vue js",
    contenu: "tout savoir sur les base du vue js",
    likes: 17,
  },
];

blogs.forEach((blog) => {
  console.log(`${blog.id}
  - ${blog.titre}
   - ${blog.contenu} 
   et ${blog.likes} on aime`);
});
