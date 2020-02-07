import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  MOVIE_TITLES: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  MOVIE_GENRE: `Drama`,
  MOVIE_YEAR: 2000,
};

ReactDOM.render(
    <App movieTitles={Settings.MOVIE_TITLES} movieGenre={Settings.MOVIE_GENRE} movieYear={Settings.MOVIE_YEAR} />,
    document.querySelector(`#root`)
);
