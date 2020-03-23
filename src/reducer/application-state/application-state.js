import {extend, dataAdapter} from "../../utils.js";
const FILMS_TO_SHOW_AT_ONCE = 8;

const initialState = {
  genre: `All genres`,
  filmCards: [],
  filmsToShow: FILMS_TO_SHOW_AT_ONCE,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  LOAD_FILM_CARDS: `LOAD_FILM_CARDS`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    genre,
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS
  }),
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILM_CARDS,
      payload: films,
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(dataAdapter(response.data)));
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      if (action.genre === `All genres`) {
        return initialState;
      }
      return extend(state, {
        genre: action.genre,
        filmCards: state.filmCards.filter((it) => it.genre === action.genre).slice(0, state.filmsToShow),
        filmsToShow: 8,
      });
    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        filmCards: state.genre === `All genres` ?
          state.filmCards :
          state.filmCards.filter((it) => it.genre === state.genre),
        filmsToShow: state.filmsToShow + FILMS_TO_SHOW_AT_ONCE,
      });
    case ActionType.LOAD_FILM_CARDS:
      return extend(state, {
        filmCards: action.payload,
      });
    default:
      return state;
  }
};
export {reducer, ActionType, Operation, ActionCreator};
