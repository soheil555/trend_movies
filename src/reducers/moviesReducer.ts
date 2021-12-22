type MOVIE = {
  title: string;
  poster_path: string;
  release_date: string;
  id: number;
};

export type MOVIES = {
  trendMovies?: MOVIE[];
  searched?: MOVIE[];
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
    case "SEARCH_MOVIES":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCH":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
