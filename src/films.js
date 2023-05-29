// Exercise 1: Get the array of all directors.
const x = 3;
console.log(x);
function getAllDirectors(array) {
  return array.map((movie) => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((movie) => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.

function moviesAverageOfDirector(array, director) {
  const result = getMoviesFromDirector(array, director);
  var mostrarPuntuacion = result.reduce(function(acumulador, siguienteValor) {
      return {
          score: acumulador.score + siguienteValor.score
      };
  }, { score: 0 });
  var media = Number((mostrarPuntuacion.score / result.length).toFixed(2));
  return media;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  return array
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let ordre = [...array].sort((a, b) =>
    a.year > b.year
      ? 1
      : b.year > a.year
      ? -1
      : a.title > b.title
      ? 1
      : b.title > a.title
      ? -1
      : 0
  );
  return ordre;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let result = array.filter((movie) =>
      movie.genre.includes(category)
  );
  var mostrarPuntuacion = result.reduce(function(acumulador, siguienteValor) {
      return {
          score: acumulador.score + siguienteValor.score
      };
  }, { score: 0 });
  let numberOfMoviesWithScore = result.filter(movie => movie.score).length
  var media = (mostrarPuntuacion.score / numberOfMoviesWithScore);
  return media;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
