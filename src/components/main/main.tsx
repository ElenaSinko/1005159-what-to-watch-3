import * as React from "react";
import {Link} from "react-router-dom";
import FilmsList from "../films-list/films-list";
import {ServerIsNotAvailable} from "../server-is-not-available/server-is-not-available";
import GenresList from "../genres-list/genres-list";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/application-state/application-state";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthorizationStatus, getUserIMG} from "../../reducer/user/selectors";
import {getFilmCards, getGenre, getFilmsToShow, getServerAvailability} from "../../reducer/application-state/selectors";
import {unique} from "../../utils";
import {Button} from "../button/button";
import {PAGES, MAX_GENRES_TO_SHOW} from "../../consts";
import {Operation as DataOperation} from "../../reducer/application-state/application-state";
import {FilmCard} from "../../types";

interface Props {
  filmCards: FilmCard[];
  authorizationStatus: string;
  onGenreTitleClick: (genre: string) => void;
  onShowMoreClick: () => void;
  filmsToShow: number;
  serverIsAvailable: boolean;
  promoFilm: FilmCard;
  userIMG: string;
  onAddFilmToMyListButton: ({id, filmStatus}) => void;
}

interface State {
  playerIsWorking: boolean;
}


class Main extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      playerIsWorking: false,
    };
  }

  handleAddFilmButton() {
    const {onAddFilmToMyListButton, filmCards} = this.props;
    const promoFilm = filmCards[0];
    const {id, isFavorite} = promoFilm;
    const filmStatus = isFavorite ? 0 : 1;
    onAddFilmToMyListButton({id, filmStatus});
  }

  render() {
    const {filmCards, onGenreTitleClick, onShowMoreClick, filmsToShow, authorizationStatus, serverIsAvailable, userIMG} = this.props;
    if (!serverIsAvailable) {
      return <ServerIsNotAvailable />;
    }
    if (typeof filmCards === `undefined`) {
      return <div>Loading...</div>;
    }
    const currentCards = filmCards.slice(0, filmsToShow);
    const promoFilm = filmCards[0];
    const genres = [`All genres`].concat(unique(filmCards.map((movieCard) => movieCard.genre)).slice(0, MAX_GENRES_TO_SHOW));
    return <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.movieBG} alt={promoFilm.name}/>
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
          {authorizationStatus === AuthorizationStatus.AUTH && <div className="user-block">
            <Link to={PAGES.FILM_LIST} style={{textDecoration: `none`}}>
              <div className="user-block__avatar">
                <img src={`https://htmlacademy-react-3.appspot.com/` + userIMG} alt="User avatar" width="63" height="63"/>
              </div>
            </Link>
          </div>}
          {authorizationStatus === AuthorizationStatus.NO_AUTH && <div className="user-block">
            <Link to={PAGES.LOGIN} style={{textDecoration: `none`}}>
              <div className="user-block__link">Sign in</div>
            </Link>
          </div>}
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.img} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.movieYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <Link to={`${PAGES.PLAYER}/${promoFilm.id}`} style={{textDecoration: `none`, color: `#eee5b5`}}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </Link>
                </button>
                <button onClick={() => {
                  this.handleAddFilmButton();
                }} className="btn btn--list movie-card__button" type="button">
                  {promoFilm.isFavorite && <React.Fragment>
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                    <span>My list</span>
                  </React.Fragment>}

                  {!promoFilm.isFavorite && <React.Fragment>
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </React.Fragment>}
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
          {filmsToShow < filmCards.length && <Button onClick={onShowMoreClick}/>}
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

const mapStateToProps = (state) => ({
  filmCards: getFilmCards(state),
  filmsToShow: getFilmsToShow(state),
  genre: getGenre(state),
  authorizationStatus: getAuthorizationStatus(state),
  serverIsAvailable: getServerAvailability(state),
  userIMG: getUserIMG(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTitleClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onShowMoreClick() {
    dispatch(ActionCreator.showMoreFilms());
  },
  onAddFilmToMyListButton: ({id, filmStatus}) => {
    dispatch(DataOperation.addFilmToMyList({id, filmStatus}));
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Main);
export {connectedComponent as Main};

