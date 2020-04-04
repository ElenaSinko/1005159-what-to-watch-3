import React from "react";
import PropTypes from "prop-types";

const GenresList = ({genres, onGenreTitleClick}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => <li onClick={() => onGenreTitleClick(genre)} className="catalog__genres-item" key={genre + i}>
        <a className="catalog__genres-link">{genre}</a>
      </li>)}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  onGenreTitleClick: PropTypes.func,
};

export default GenresList;
