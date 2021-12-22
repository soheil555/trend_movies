type MOVIE = {
  title: string;
  poster_path: string;
  release_date: string;
  id: number;
};

export type MOVIES = {
  trendMovies?: MOVIE[];
  searched?: any[];
};

const initState: MOVIES = {
  trendMovies: [],
  searched: [],
};

interface Action {
  type: string;
  payload: MOVIES;
}

const moviesReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        trendMovies: action.payload.trendMovies,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
