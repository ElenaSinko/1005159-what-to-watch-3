import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

export const FilmComment = ({comment}) => {
  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment.comment}</p>

      <footer className="review__details">
        <cite className="review__author">{comment.user.name}</cite>
        <time className="review__date" dateTime="2015-11-18">{moment(comment.date).format(`MMMM DD, YYYY`)}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{comment.rating}</div>
  </div>;
};

FilmComment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

