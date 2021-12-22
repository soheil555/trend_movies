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
};

const initState: MOVIE = {
  detail: {},
  images: {},
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
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
