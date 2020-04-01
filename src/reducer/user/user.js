import {history} from "../../utils.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userIMG: ``,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  USER_LOGIN: `USER_LOGIN`,
  ADD_A_FILM_AS_A_FAVOURITE: `ADD_A_FILM_AS_A_FAVOURITE`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  loginSuccess: (loginData) => {
    return {
      type: ActionType.USER_LOGIN,
      payload: loginData,
    };
  },
  addFilmToMyList: (filmdstatus) => {
    return {
      type: ActionType.ADD_A_FILM_AS_A_FAVOURITE,
      payload: filmdstatus,
    };
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.USER_LOGIN:
      return Object.assign({}, state, {
        userIMG: action.payload.avatar_url,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.loginSuccess(response.data));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: ({email, password}) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email,
      password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.loginSuccess(response.data));
        history.push(`/`);
      });
  },
};

export {ActionCreator, AuthorizationStatus, Operation, ActionType, reducer};
