import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/application-state/application-state.js";
import {createAPI} from "./api.js";


const api = createAPI(() => {});

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_YEAR: 2000,
};

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(DataOperation.loadFilms());

ReactDOM.render(
    <Provider store={store}>
      <App
        movieTitle={Settings.MOVIE_TITLE}
        movieGenre={Settings.MOVIE_GENRE}
        movieYear={Settings.MOVIE_YEAR}
      />
    </Provider>,
    document.querySelector(`#root`)
);
