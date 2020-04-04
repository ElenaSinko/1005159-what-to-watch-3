import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {getTabToShow, getFilmComments} from "../../reducer/application-state/selectors.js";
import {connect} from "react-redux";
import {FilmComment} from "../film-comment/film-comment.jsx";
import {RATING_INTERVALS, RATING_MARKS} from "../../consts.js";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
  }

  _ratingDetermination(rating) {
    if (rating >= RATING_INTERVALS.BAD_LOWER_LEVEL && rating < RATING_INTERVALS.BAD_HIGHEST_LEVEL) {
      return RATING_MARKS.BAD;
    }
    if (rating >= RATING_INTERVALS.NORMAL_LOWER_LEVEL && rating < RATING_INTERVALS.NORMAL_HIGHEST_LEVEL) {
      return RATING_MARKS.NORMAL;
    }
    if (rating >= RATING_INTERVALS.GOOD_LOWER_LEVEL && rating < RATING_INTERVALS.GOOD_HIGHEST_LEVEL) {
      return RATING_MARKS.GOOD;
    }
    if (rating >= RATING_INTERVALS.VERY_GOOD_LOWER_LEVEL && rating < RATING_INTERVALS.VERY_GOOD_HIGHEST_LEVEL) {
      return RATING_MARKS.VERY_GOOD;
    }
    if (rating >= RATING_INTERVALS.AWESOME_LOWER_LEVEL) {
      return RATING_MARKS.AWESOME;
    }
    return `no rating`;
  }

  render() {
    const {rating, movieRatingCount, director, starring, description, duration, genre, movieYear, currentTab, filmComments} = this.props;
    return <React.Fragment>
      {currentTab === 1 &&
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{this._ratingDetermination(rating)}</span>
          <span className="movie-rating__count">{movieRatingCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </React.Fragment>}
      {currentTab === 2 &&
      <React.Fragment>
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">{starring.join(`     `)}
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{duration}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{movieYear}</span>
            </p>
          </div>
        </div>
      </React.Fragment>}
      {currentTab === 3 &&
      filmComments.length > 0 &&
      <React.Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {filmComments.filter((e, i)=>!(i % 2)).map((filmComment, i) => <FilmComment
              key={filmComment + i}
              comment={filmComment}
            />)}
          </div>
          <div className="movie-card__reviews-col">
            {filmComments.filter((e, i)=>(i % 2)).map((filmComment, i) => <FilmComment
              key={filmComment + i}
              comment={filmComment}
            />)}
          </div>
        </div>
      </React.Fragment>}
    </React.Fragment>;
  }
}

Tabs.propTypes = {
  genre: PropTypes.string,
  rating: PropTypes.number,
  movieRatingCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.array,
  description: PropTypes.string,
  duration: PropTypes.number,
  movieYear: PropTypes.number,
  currentTab: PropTypes.number,
  filmComments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  tabIsShowing: getTabToShow(state),
  filmComments: getFilmComments(state),
});

const connectedComponent = connect(mapStateToProps)(Tabs);
export {connectedComponent as Tabs};
