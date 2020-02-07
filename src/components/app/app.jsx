import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {movieTitle, movieGenre, movieYear, smallMovieCardTitles} = props;
  return (
    <Main movieTitle={movieTitle} movieGenre={movieGenre} movieYear={movieYear} smallMovieCardTitles={smallMovieCardTitles} />
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  smallMovieCardTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default App;
