import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const FilmsList = ({smallMovieCards}) => {
  return (
    <div className="catalog__movies-list">
      {smallMovieCards.map((smallMovieCard, i) => <SmallMovieCard
        key={i}
        id={smallMovieCard.id}
        smallMovieCard={smallMovieCard}
      />)}
    </div>
  );
};

FilmsList.propTypes = {
  smallMovieCards: PropTypes.array.isRequired,
};

export default FilmsList;
