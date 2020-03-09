import movieCards from "./mocks/films.js";
import {extend} from "./utils.js";

const initialState = {
  genre: `All genres`,
  filmCards: movieCards,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  FIND_FILMS_FOR_THE_GENRE: `FIND_FILMS_FOR_THE_GENRE`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    genre,
  }),
  changeFilmsForTheGenre: () => ({
    type: ActionType.FIND_FILMS_FOR_THE_GENRE,
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
        filmCards: movieCards.filter((it) => it.genre === action.genre)
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
