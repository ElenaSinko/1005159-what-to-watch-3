// import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

export const getFilms = (state) => {
  return state[NameSpace.DATA].initialFilmCards;
};
