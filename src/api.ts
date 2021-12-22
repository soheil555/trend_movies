const baseUrl = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

export const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
export const trendMoviesURL = `${baseUrl}/trending/movie/week?api_key=${API_KEY}`;
export const trendTVShowsURL = `${baseUrl}/trending/tv/week?api_key=${API_KEY}`;
export const trendPeopleURL = `${baseUrl}/trending/person/week?api_key=${API_KEY}`;
export const movieDetailURL = (id: number) =>
  `${baseUrl}/movie/${id}?api_key=${API_KEY}`;
export const movieImagesURL = (id: number) =>
  `${baseUrl}/movie/${id}/images?api_key=${API_KEY}`;
