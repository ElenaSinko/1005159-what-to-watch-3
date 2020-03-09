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
  changeGenre: () => ({
    type: ActionType.CHANGE_GENRE,
  }),
  changeFilmsForTheGenre: () => ({
    type: ActionType.FIND_FILMS_FOR_THE_GENRE,
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      console.log(state);
      return extend(state, {
        genre: action.genre,
      });

    case ActionType.FIND_FILMS_FOR_THE_GENRE:
      // if (action.genre === `All genres`) {
        // return initialState;
        // alert(`все классно`);
      // }
      // return extend(state, {
        // filmCards: movieCards.filter((it) => it.genre === state.genre),
      // });
      alert(`FIND_FILMS_FOR_THE_GENRE`);
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
