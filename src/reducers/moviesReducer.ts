const initState = {
  trend: [],
  new: [],
  upcoming: [],
  searched: [],
};

interface Action {
  type: string;
}

const moviesReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return { ...state };
    default:
      return { ...state };
  }
};

export default moviesReducer;
