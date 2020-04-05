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
        name: PropTypes.string,
        img: PropTypes.string,
        imgPrev: PropTypes.string,
        movieBG: PropTypes.string,
        BGColor: PropTypes.string,
        description: PropTypes.string,
        rating: PropTypes.number,
        movieRatingCount: PropTypes.number,
        director: PropTypes.string,
        starring: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.number,
        genre: PropTypes.string,
        movieYear: PropTypes,
        id: PropTypes.number,
        isFavorite: PropTypes.bool,
        srcFullVideo: PropTypes.string,
        src: PropTypes.string,
      })
  ),
};

export default FilmsList;
