import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = ({smallMovieCardTitle, onMovieSmallTitleClick}) => {
  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/shutter-island.jpg" alt="Shutter Island" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onMovieSmallTitleClick} className="small-movie-card__link" href="movie-page.html">{smallMovieCardTitle}</a>
      </h3>
    </article>
  </React.Fragment>;
};

SmallMovieCard.propTypes = {
  smallMovieCardTitle: PropTypes.string.isRequired,
  onMovieSmallTitleClick: PropTypes.func,
};

export default SmallMovieCard;
