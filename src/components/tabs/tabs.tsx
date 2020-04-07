import * as React from "react";
import {getFilmComments} from "../../reducer/application-state/selectors";
import {connect} from "react-redux";
import {FilmComment} from "../film-comment/film-comment";
import {RATING_INTERVALS, RATING_MARKS} from "../../consts";
import {FilmCard, Comment} from "../../types";

interface Props {
  movieCard: FilmCard;
  currentTab: number;
  filmComments: Comment[];
}

class Tabs extends React.PureComponent<Props, {}> {
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
    const {movieCard, currentTab, filmComments} = this.props;
    return <React.Fragment>
      {currentTab === 1 &&
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movieCard.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{this._ratingDetermination(movieCard.rating)}</span>
          <span className="movie-rating__count">{movieCard.movieRatingCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        {movieCard.description}
        <p className="movie-card__director"><strong>Director: {movieCard.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {movieCard.starring}</strong></p>
      </div>
    </React.Fragment>}
      {currentTab === 2 &&
      <React.Fragment>
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{movieCard.director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">{movieCard.starring.join(`     `)}
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{movieCard.duration}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{movieCard.genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{movieCard.movieYear}</span>
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
              key={i}
              comment={filmComment}
            />)}
          </div>
          <div className="movie-card__reviews-col">
            {filmComments.filter((e, i)=>(i % 2)).map((filmComment, i) => <FilmComment
              key={i}
              comment={filmComment}
            />)}
          </div>
        </div>
      </React.Fragment>}
    </React.Fragment>;
  }
}

const mapStateToProps = (state) => ({
  filmComments: getFilmComments(state),
});

const connectedComponent = connect(mapStateToProps)(Tabs);
export {connectedComponent as Tabs};
