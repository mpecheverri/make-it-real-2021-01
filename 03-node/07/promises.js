const movies = [
  {
    id: 1,
    title: 'Iron Man',
    year: 2008,
  },
  {
    id: 2,
    title: 'Thor',
    year: 2010,
  },
  {
    id: 3,
    title: 'Spiderman',
    year: 2015,
  },
];

const getMovies = () => {
  return new Promise((resolve, reject) => {
    //time simulation
    setTimeout(() => {
      //resolve or reject
      if (movies.length > 0) {
        resolve(movies);
      } else {
        reject('no data');
      }
    }, 3000);
  });
};

//then && catch
/*
getMovies() //
  .then((movies) => {
    movies.map((movie) => console.log(movie.title));
  })
  .catch((error) => {
    console.log(error);
  });
*/
//async await
const load = async () => {
  try {
    const data = await getMovies();
    data.map((d) => console.log(d.title));
  } catch (error) {
    console.log(error);
  }
};
load();
