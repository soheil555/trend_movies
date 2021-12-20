import axios from "axios";
import { trendMoviesURL, trendTVShowsURL, trendPeopleURL } from "api";

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
