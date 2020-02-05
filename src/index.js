import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_YEAR: 2000,
};

ReactDOM.render(
    <App movieTitle={Settings.MOVIE_TITLE} movieGenre={Settings.MOVIE_GENRE} movieYear={Settings.MOVIE_YEAR} />,
    document.querySelector(`#root`)
);
