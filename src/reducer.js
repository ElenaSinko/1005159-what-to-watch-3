import movieCards from "./mocks/films.js";
import {extend} from "./utils.js";

const initialState = {
  genre: `All genres`,
  filmCards: movieCards.slice(0, 8),
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    genre,
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      if (action.genre === `All genres`) {
        return initialState;
      }
      return extend(state, {
        genre: action.genre,
        filmCards: movieCards.filter((it) => it.genre === action.genre).slice(0, 8),
      });
    case ActionType.SHOW_MORE_FILMS:
      return initialState;
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
