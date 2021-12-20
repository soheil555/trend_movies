type MOVIE = {
  title: string;
  poster_path: string;
  release_date: string;
  id: number;
};

type TVSHOW = {
  name: string;
  poster_path: string;
  first_air_date: string;
  id: number;
};

export type MOVIES = {
  trendMovies?: MOVIE[];
  trendTVShows?: TVSHOW[];
  trendPeople?: any[];
  searched?: any[];
};

const initState: MOVIES = {
  trendMovies: [],
  trendTVShows: [],
  trendPeople: [],
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
        trendTVShows: action.payload.trendTVShows,
        trendPeople: action.payload.trendPeople,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
