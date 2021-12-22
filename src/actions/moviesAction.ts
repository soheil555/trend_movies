import axios from "axios";
import {
  trendMoviesURL,
  trendTVShowsURL,
  trendPeopleURL,
  movieDetailURL,
  movieImagesURL,
} from "api";

//Action Creator

export const loadMovies = () => async (dispatch: any) => {
  const trendMovies = await axios.get(trendMoviesURL);
  const trendTVShows = await axios.get(trendTVShowsURL);
  const trendPeople = await axios.get(trendPeopleURL);
  dispatch({
    type: "FETCH_MOVIES",
    payload: {
      trendMovies: trendMovies.data.results,
      trendTVShows: trendTVShows.data.results,
      trendPeople: trendPeople.data.results,
    },
  });
};

export const fetchDetails = (id: number) => async (dispatch: any) => {
  const movieDetail = await axios.get(movieDetailURL(id));
  const movieImages = await axios.get(movieImagesURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: movieDetail.data,
      images: movieImages.data,
    },
  });
};
