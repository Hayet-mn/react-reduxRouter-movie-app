import {
  ADD_MOVIE,
  DELETE_MOVIE,
  UPDATE_MOVIE,
  SEARCH_BY_RATE,
  SEARCH_BY_TITLE
} from "../const/actionTypes";

export const addMovie = payload => {
  return { type: ADD_MOVIE, payload };
};
export const deleteMovie = payload => {
  return { type: DELETE_MOVIE, payload };
};
export const updateMovie = (id, payload) => {
  return { type: UPDATE_MOVIE, id, payload };
};

export function searchTitle(payload) {
  return { type: SEARCH_BY_TITLE, payload };
}
export function searchRate(payload) {
  return { type: SEARCH_BY_RATE, payload };
}
