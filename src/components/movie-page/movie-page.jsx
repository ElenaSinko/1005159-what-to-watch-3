import React from "react";
import PropTypes from "prop-types";
const bigMovieCard = {
  movieTitle: `The Grand Budapest Hotel`,
  movieGenre: `Drama`,
  movieYear: 2014,
  moviePoster: `img/the-grand-budapest-hotel-poster.jpg`,
  movieBG: `img/bg-the-grand-budapest-hotel.jpg`,
  overView: {
    movieRatingScore: `8,9`,
    movieRatingLevel: `Very good`,
    movieRatingCount: `240 ratings`,
    movieDescription: ``,
    movieDirector: `Wes Andreson`,
    movieStarring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  },

};

const MoviePage = (props) => {
  const {bigMovieCard} = props;
  const {movieTitle, movieGenre, movieYear, moviePoster, movieBG, overView} = bigMovieCard;
  const {movieRatingScore, movieRatingLevel, movieRatingCount, movieDirector, movieStarring} = overView;
  return <section className="movie-card movie-card--full">
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={movieBG} alt={movieTitle}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{movieTitle}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{movieGenre}</span>
            <span className="movie-card__year">{movieYear}</span>
          </p>

          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
            <a href="add-review.html" className="btn movie-card__button">Add review</a>
          </div>
        </div>
      </div>
    </div>

    <div className="movie-card__wrap movie-card__translate-top">
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src={moviePoster} alt={movieTitle} width="218" height="327"/>
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li className="movie-nav__item movie-nav__item--active">
                <a href="#" className="movie-nav__link">Overview</a>
              </li>
              <li className="movie-nav__item">
                <a href="#" className="movie-nav__link">Details</a>
              </li>
              <li className="movie-nav__item">
                <a href="#" className="movie-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>

          <div className="movie-rating">
            <div className="movie-rating__score">{movieRatingScore}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{movieRatingLevel}</span>
              <span className="movie-rating__count">{movieRatingCount}</span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
              Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.</p>

            <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the
              sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously,
              Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

            <p className="movie-card__director"><strong>Director: {movieDirector}</strong></p>

            <p className="movie-card__starring"><strong>Starring: {movieStarring}</strong></p>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

MoviePage.propTypes = {
  bigMovieCard: PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    movieGenre: PropTypes.string.isRequired,
    movieYear: PropTypes.number.isRequired,
    moviePoster: PropTypes.string.isRequired,
    movieBG: PropTypes.string.isRequired,
    overView: PropTypes.shape({
      movieRatingScore: PropTypes.string.isRequired,
      movieRatingLevel: PropTypes.string.isRequired,
      movieRatingCount: PropTypes.string.isRequired,
      movieDescription: PropTypes.string,
      movieDirector: PropTypes.string.isRequired,
      movieStarring: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired,
};

export default MoviePage;
