import {
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
  SEARCH_BY_TITLE,
  SEARCH_BY_RATE
} from "../const/actionTypes";
import { movies } from "../const/data";

const initState = {
  movies,
  inputSearch: "",
  rateSearch: 0
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(e => e.id != action.payload)
      };

    case UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map(e =>
          e.id === action.id ? { ...e, ...action.payload } : e
        )
      };

    case SEARCH_BY_TITLE:
      return { ...state, inputSearch: action.payload };

    case SEARCH_BY_RATE:
      return { ...state, rateSearch: action.payload };

    default:
      return state;
  }
};
export default moviesReducer;
