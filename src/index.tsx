import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import {Operation as DataOperation} from "./reducer/application-state/application-state";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user";
import {createAPI} from "./api";
import {createLogger} from "redux-logger";
const loggerMiddleware = createLogger();


const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

export const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api), loggerMiddleware)
);
if (DataOperation) {
  store.dispatch(DataOperation.loadFilms());
  store.dispatch(DataOperation.loadMyList());
  store.dispatch(DataOperation.loadPromoFilm());
  store.dispatch(UserOperation.checkAuth());
}

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`) || document.createElement(`div`)
);
