import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import movieCards from "./mocks/films.js";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_YEAR: 2000,
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        movieTitle={Settings.MOVIE_TITLE}
        movieGenre={Settings.MOVIE_GENRE}
        movieYear={Settings.MOVIE_YEAR}
        smallMovieCards={movieCards}
      />
    </Provider>,
    document.querySelector(`#root`)
);
