import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {movieTitles, movieGenre, movieYear} = props;
  return (
    <Main movieTitles={movieTitles} movieGenre={movieGenre} movieYear={movieYear} />
  );
};

App.propTypes = {
  movieTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
};
export default App;
