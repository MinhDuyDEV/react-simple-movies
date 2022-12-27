export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "064c0013dc4bf2e81cfdfaa8639df094";
const tmdbEndpoint = `https://api.themoviedb.org/3/movie`;
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  imageUrl: (size, url) => `https://image.tmdb.org/t/p/${size}/${url}`,
};
