/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, 
  selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

const twoStrings = (str1, str2) => {
  const str = (
    str1[0] +
    str1[1] +
    str2[str2.length - 3] +
    str2[str2.length - 2] +
    str2[str2.length - 1]
  ).toUpperCase()
  return str
}

console.log(
  'first two characters of the first string and the last 3 of the seecond one:',
  twoStrings('ciao', 'grande')
)

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi;
   ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

const generateRandomNumbersArray = () => {
  const randomNumbersArray = []
  for (let i = 0; i < 10; i++) {
    randomNumbersArray[i] = Math.floor(Math.random() * 101)
  }
  return randomNumbersArray
}
const arrayOfRandomNumbers = generateRandomNumbersArray()
console.log('random numbers 0 to 100 array', arrayOfRandomNumbers)

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const onlyEven = function (array) {
  const evenNumbers = array.filter((number) => number % 2 === 0)
  return evenNumbers
}
const onlyEvenNumbers = onlyEven(arrayOfRandomNumbers)
console.log('random numbers 0 to 100 array only even numbers:', onlyEvenNumbers)

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const arraySum = function (array) {
  let totale = 0
  array.forEach((number) => (totale += number))
  return totale
}
console.log('array sum:', arraySum(arrayOfRandomNumbers))

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const arraySum2 = function (array) {
  const sum = array.reduce((acc, number) => acc + number, 0)
  return sum
}
console.log('array of only even numbers sum:', arraySum2(onlyEvenNumbers))

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri,
   ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const arrayPlusN = function (array, n) {
  const plusN = array.map((number) => number + n)
  return plusN
}
console.log('array of random numbers + n', arrayPlusN(arrayOfRandomNumbers, 5))

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe,
   ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const verifyNumbers = function (array) {
  const numbers = array.map((word) => word.length)
  return numbers
}
const arrayOfWords = ['sedia', 'capitano', 'xilofono', 'mela', 'acido']
console.log(verifyNumbers(arrayOfWords))

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

const generateOddNumbers = function () {
  let j = 0
  const array = []
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
      array[j] = i
      j++
    }
  }
  return array
}

console.log(generateOddNumbers())

/* Questo array di film verrà usato negli esercizi a seguire.
Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const oldestFilm = function (array) {
  let oldest = movies[0].Year
  let name = ''
  array.forEach((movie) => {
    if (movie.Year < oldest) {
      oldest = movie.Year
      name = movie.Title
    }
  })
  return name
}

console.log('oldest film is', oldestFilm(movies))

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const howManyFilms = function (array) {
  let counter = 0
  array.forEach(() => counter++)
  return counter
}

console.log('number of movies', howManyFilms(movies))

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const titles = function (array) {
  const titles = array.map((movie) => movie.Title)
  return titles
}

console.log('array of titles only', titles(movies))

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const after1999 = function (array) {
  const newMovies = array.filter((movie) => movie.Year > 1999)
  return newMovies
}
console.log('array of movies released in current millennium', after1999(movies))

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti 
  i film contenuti nell'array fornito.
*/

const sumOfMovies = function (array) {
  const years = array.map((movie) => Number(movie.Year))
  const sum = years.reduce((acc, number) => {
    return acc + number
  }, 0)
  return sum
}

console.log('sum of movies years of production', sumOfMovies(movies))

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film 
  (la funzione riceve un imdbID come parametro).
*/

const findMovie = function (array, ID) {
  const found = array.find((movie) => {
    return movie.imdbID === ID
  })
  return found
}

console.log('find film', findMovie(movies, 'tt0399295'))

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito
   nell'anno fornito come parametro.
*/

const findI = function (array, year) {
  const n = array.findIndex((movie) => year === movie.Year)
  return n
}

console.log(movies[findI(movies, '2015')])
