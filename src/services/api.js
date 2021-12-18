const API_KEY = 'e2a3eeb34b9aa98d20b3ab8441a3fdd8';
const BASE_URL = 'https://api.themoviedb.org/3';

export function getTrendingMovies() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
    },
  );
}

export function getMovieByQuery(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
  });
}

export function getMovieInfo(movieId) {
  return fetch(`
${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('No such movie'));
  });
}

export function getMovieCredit(movieId) {
  return fetch(`
${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
    },
  );
}

export function getMovieReview(movieId) {
  return fetch(`
${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`).then(
    res => res.json(),
  );
}
