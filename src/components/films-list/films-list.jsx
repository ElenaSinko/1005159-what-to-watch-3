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
  smallMovieCards: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        imgPrev: PropTypes.string.isRequired,
        movieBG: PropTypes.string.isRequired,
        BGColor: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        movieRatingCount: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string).isRequired,
        duration: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        movieYear: PropTypes.number,
        id: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        srcFullVideo: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
  ),
};

export default FilmsList;
