/*Crea una función que tome un objeto como parámetro y devuelva una cadena con información legible sobre la película.
Utiliza templates de strings y destructuring para obtener los valores del objeto.*/

function movieInformation(movieDetails){
    const {title, year, director, cast, genre, rating, summary} = movieDetails
    let message = `Movie information: \nTitle: ${title}\nYear: ${year}\nDirector: ${director}\nCast: ${cast}\nGenre: ${genre}\nRating: ${rating}\nSumary: ${summary}`
    return message 

}

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


  console.log(movieInformation(movie))