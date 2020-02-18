import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = ({smallMovieCard, onMovieSmallTitleClick, onMovieSmallCardHover}) => {
  return <article onClick={onMovieSmallTitleClick} onMouseOver={() => onMovieSmallCardHover(smallMovieCard.id)} className="small-movie-card catalog__movies-card">
    <div className="small-movie-card__image">
      <img src={smallMovieCard.img} alt={smallMovieCard.title} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">{smallMovieCard.title}</a>
    </h3>
  </article>;
};

SmallMovieCard.propTypes = {
  smallMovieCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number,
  }).isRequired,
  onMovieSmallTitleClick: PropTypes.func,
  onMovieSmallCardHover: PropTypes.func,
};

export default SmallMovieCard;
