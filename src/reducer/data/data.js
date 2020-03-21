import {extend} from "../../utils.js";

const initialState = {
  initialFilmCards: [],
};

const ActionType = {
  LOAD_FILM_CARDS: `LOAD_FILM_CARDS`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILM_CARDS,
      payload: films,
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM_CARDS:
      return extend(state, {
        initialFilmCards: action.payload,
      });
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
