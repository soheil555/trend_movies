const baseUrl = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const trendMoviesURL = `${baseUrl}/trending/movie/week?api_key=${API_KEY}`;
