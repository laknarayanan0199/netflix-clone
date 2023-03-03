const baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "addd930c4372e94ea28bccfa8a21828d";

const requests = {
  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-us`,
  thisYear: `{${baseURL}/discover/tv?api_key=${API_KEY}&language=en-US&region=IN&include_adult=false&page=1&primary_release_year=2023`,
  fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

// &with_genres=18&primary_release_year=2023

// /discover/movie?api_key=addd930c4372e94ea28bccfa8a21828d&primary_release_year=2023
// /discover/tv?api_key=addd930c4372e94ea28bccfa8a21828d&language=en-US&region=IN&include_adult=false&page=1&primary_release_year=2023
