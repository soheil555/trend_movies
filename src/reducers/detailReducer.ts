type ProductionCompany = {
  name: string;
  logo_path?: string;
};

type MovieGenre = {
  name: string;
};

type MovieDetail = {
  title?: string;
  genres?: MovieGenre[];
  overview?: string;
  production_companies?: ProductionCompany[];
  release_date?: string;
};

type Poster = {
  file_path: string;
};

type MovieImage = {
  posters?: Poster[];
};

export type MOVIE = {
  detail: MovieDetail;
  images: MovieImage;
  isLoading: boolean;
};

const initState: MOVIE = {
  detail: {},
  images: {},
  isLoading: false,
};

interface Action {
  type: string;
  payload: MOVIE;
}

const detailReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        detail: action.payload.detail,
        images: action.payload.images,
        isLoading: false,
      };

    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default detailReducer;
