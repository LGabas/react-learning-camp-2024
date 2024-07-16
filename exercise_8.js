/*Crea un objeto con información sobre una película, incluyendo título, género y año de estreno.
Utiliza el destructuring para extraer esta información en variables separadas. */

const movie = {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    cast: [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "William Sadler",
      "Clancy Brown",
      "Mark Rolston",
      "Jim Jones",
      "Brad Pitt",
      "David Proval",
      "Larry Brand",
      "Frank Whaley",
      "Kevin Nash",
      "James Whitmore",
    ],
    genre: ["Drama", "Crime"],
    rating: 9.3,
    summary:
      "Two imprisoned men become friends during the course of their sentences: one is a former banker who is serving life for murder, the other is a simple man serving a life sentence for petty theft.",
  };

  const {title, year, genre} = movie

  console.log(title, year, genre)