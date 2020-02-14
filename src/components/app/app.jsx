import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {movieTitle, movieGenre, movieYear, smallMovieCards} = props;
  return (
    <Main movieTitle={movieTitle} movieGenre={movieGenre} movieYear={movieYear} smallMovieCards={smallMovieCards} />
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  smallMovieCards: PropTypes.array.isRequired,
};
export default App;
