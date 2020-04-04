import {extend, dataAdapter, movieCardAdapter} from "../../utils.js";
import {history} from "../../utils";
import {AuthorizationStatus} from "../user/user.js";
const FILMS_TO_SHOW_AT_ONCE = 8;
import {store} from "../../index.js";


const initialState = {
  genre: `All genres`,
  filmCards: undefined,
  filmComments: [],
  filmsToShow: FILMS_TO_SHOW_AT_ONCE,
  serverIsAvailable: true,
  promoFilm: {},
  myList: [],
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  LOAD_FILM_CARDS: `LOAD_FILM_CARDS`,
  LOAD_FILM_COMMENTS: `LOAD_FILM_COMMENTS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_MY_LIST: `LOAD_MY_LIST`,
  CHANGE_SERVER_STATE: `CHANGE_SERVER_STATE`,
  ADD_FILM_IN_LIST: `ADD_FILM_IN_LIST`,
  REVIEW_POST: `REVIEW_POST`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    genre,
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
  }),
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILM_CARDS,
      payload: films,
    };
  },
  loadFilmComments: (comments) => {
    return {
      type: ActionType.LOAD_FILM_COMMENTS,
      payload: comments,
    };
  },
  loadMyList: (myFilms) => {
    return {
      type: ActionType.LOAD_MY_LIST,
      payload: myFilms,
    };
  },
  loadPromoFilm: (promoFilm) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: promoFilm,
    };
  },
  changeServerState: () => ({
    type: ActionType.CHANGE_SERVER_STATE,
  }),
  addFilmToMyList: (film) => {
    return {
      type: ActionType.ADD_FILM_IN_LIST,
      payload: film,
    };
  },
  reviewPost: (reviewData) => {
    return {
      type: ActionType.REVIEW_POST,
      payload: reviewData,
    };
  },
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(dataAdapter(response.data)));
      })
      .catch(() => dispatch(ActionCreator.changeServerState()));
  },
  loadFilmComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadFilmComments(response.data));
      });
  },
  loadMyList: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadMyList(dataAdapter(response.data)));
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoFilm(movieCardAdapter(response.data)));
      });
  },
  addFilmToMyList: ({id, filmStatus}) => (dispatch, getState, api) => {
    const state = store.getState();
    if (state.USER.authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(`/login`);
    } else {
      return api.post(`/favorite/${id}/${filmStatus}`)
       .then((response) => {
         dispatch(ActionCreator.addFilmToMyList(response.data));
       });
    }
    return api.post(`/favorite/${id}/${filmStatus}`);
  },
  reviewPost: ({rating, comment, id}) => (dispatch, getState, api) => {
    return api.post(`comments/${id}`, {
      comment,
      rating,
    }).then(history.push(`/film/${id}`));
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
    case ActionType.LOAD_FILM_COMMENTS:
      return extend(state, {
        filmComments: action.payload,
      });
    case ActionType.LOAD_MY_LIST:
      return extend(state, {
        myList: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });
    case ActionType.CHANGE_SERVER_STATE:
      return extend(state, {
        serverIsAvailable: false,
      });
    case ActionType.ADD_FILM_IN_LIST:
      return extend(state, {
        filmCards: state.filmCards.map((film) => film.id === action.payload.id ? Object.assign({}, film, {isFavorite: action.payload.is_favorite}) : film),
      });
    default:
      return state;
  }
};
export {reducer, ActionType, Operation, ActionCreator};

