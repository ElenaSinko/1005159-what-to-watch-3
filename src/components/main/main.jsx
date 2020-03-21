import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/application-state/application-state.js";
import {getFilmCards, getGenre, getFilmsToShow} from "../../reducer/application-state/selectors.js";
import {unique} from "../../utils.js";
import {Button} from "../button/button.jsx";


class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmCards, onGenreTitleClick, showMore, filmsToShow} = this.props;
    const currentCards = filmCards.slice(0, filmsToShow);
    const genres = [`All genres`].concat(unique(filmCards.map((movieCard) => movieCard.genre)));
    return <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
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
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{filmCards[0].title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{filmCards[0].genre}</span>
                <span className="movie-card__year">{filmCards[0].movieYear}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} onGenreTitleClick={onGenreTitleClick}/>
          <FilmsList smallMovieCards={currentCards} />
          {filmsToShow < filmCards.length && <Button onClick={showMore}/>}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>;
  }
}

Main.propTypes = {
  filmCards: PropTypes.array.isRequired,
  onGenreTitleClick: PropTypes.func,
  showMore: PropTypes.func,
  filmsToShow: PropTypes.number,
  onPlayButtonClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filmCards: getFilmCards(state),
  filmsToShow: getFilmsToShow(state),
  genre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTitleClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  showMore() {
    dispatch(ActionCreator.showMoreFilms());
  }

});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Main);
export {connectedComponent as Main};

