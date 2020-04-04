import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilmCards} from "../../reducer/application-state/selectors.js";
import {getUserIMG} from "../../reducer/user/selectors.js";
import {Operation as DataOperation} from "../../reducer/application-state/application-state.js";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: undefined,
      comment: ``,
    };
    this._handleRatingChange = this._handleRatingChange.bind(this);
    this._handleCommentChange = this._handleCommentChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleRatingChange(evt) {
    this.setState({rating: evt.target.value});
  }

  _handleCommentChange(evt) {
    this.setState({comment: evt.target.value});
  }

  _handleSubmit() {
    const {rating, comment} = this.state;
    const {id} = this.props;
    const {onReviewPostSubmit} = this.props;
    onReviewPostSubmit({rating, comment, id});
  }

  render() {
    const {userIMG, filmCards, id} = this.props;
    const carReviewFilm = filmCards.filter((it) => it.id === parseInt(id, 10))[0];
    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={carReviewFilm.movieBG} alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{carReviewFilm.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src={`https://htmlacademy-react-3.appspot.com/` + userIMG} alt="User avatar" width="63" height="63"/>
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={carReviewFilm.img} alt={carReviewFilm.name} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                <input onChange={this._handleRatingChange} className="rating__input" id="star-1" type="radio" name="rating" value={this.state.rating}/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input onChange={this._handleRatingChange} className="rating__input" id="star-2" type="radio" name="rating" value={this.state.rating}/>
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input onChange={this._handleRatingChange} className="rating__input" id="star-3" type="radio" name="rating" value={this.state.rating}/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input onChange={this._handleRatingChange} className="rating__input" id="star-4" type="radio" name="rating" value={this.state.rating}/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input onChange={this._handleRatingChange} className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea onChange={this._handleCommentChange} minLength="50" maxLength="400" value={this.state.comment} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
              <div className="add-review__submit">
                <button onClick={this._handleSubmit} disabled={this.state.comment.length < 50 || !this.state.rating} className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  filmCards: getFilmCards(state),
  userIMG: getUserIMG(state),
});

AddReview.propTypes = {
  filmCards: PropTypes.arrayOf(
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
        movieYear: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        srcFullVideo: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
  ),
  userIMG: PropTypes.string,
  id: PropTypes.string,
  onReviewPostSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onReviewPostSubmit: ({rating, comment, id}) => {
    dispatch(DataOperation.reviewPost({rating, comment, id}));
  },
});


const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(AddReview);
export {connectedComponent as AddReview};
