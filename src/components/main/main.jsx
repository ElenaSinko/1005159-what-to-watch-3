import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import {ServerIsNotAvailable} from "../server-is-not-available/server-is-not-available.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/application-state/application-state.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus, getUserIMG} from "../../reducer/user/selectors.js";
import {getFilmCards, getGenre, getFilmsToShow, getServerAvailability, getPromoFilm} from "../../reducer/application-state/selectors.js";
import {unique} from "../../utils.js";
import {Button} from "../button/button.jsx";
import VideoPlayerFullScreen from "../video-player-full-screen/video-player-full-screen.jsx";
import {PAGES} from "../../consts";

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playerIsWorking: false,
    };
  }
/*
  handleMyListClick() {
    // alert(`ghbdtn!`);
    // const {addFilmToMyList, promoFilm} = this.props;
    // addFilmToMyList(promoFilm);
  }
*/
  render() {
    const {filmCards, onGenreTitleClick, showMore, filmsToShow, authorizationStatus, serverIsAvailable, promoFilm, userIMG, addFilmToMyList} = this.props;
    if (!serverIsAvailable) {
      return <ServerIsNotAvailable />;
    }
    if (typeof filmCards === `undefined`) {
      return <div>Loading...</div>;
    }
    const currentCards = filmCards.slice(0, filmsToShow);
    const genres = [`All genres`].concat(unique(filmCards.map((movieCard) => movieCard.genre)));
    return <React.Fragment>
      {!this.state.playerIsWorking &&
        <React.Fragment>
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
                  <div href="sign-in.html" className="user-block__link">Sign in</div>
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
                    <button onClick={() => {
                      this.setState({playerIsWorking: true});
                    }} className="btn btn--play movie-card__button" type="button">
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </button>
                    <button onClick={addFilmToMyList} className="btn btn--list movie-card__button" type="button">
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
          </div></React.Fragment>}
      {this.state.playerIsWorking && <VideoPlayerFullScreen playerIsWorking={this.state.playerIsWorking} src={filmCards[0].srcFullVideo} name={filmCards[0].name} poster={filmCards[0].img} closeVideoPlayerFullScreen={() => {
        this.setState({playerIsWorking: false});
      }}/>}
    </React.Fragment>;
  }
}

Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  filmCards: PropTypes.array,
  onGenreTitleClick: PropTypes.func,
  showMore: PropTypes.func,
  filmsToShow: PropTypes.number,
  onPlayButtonClick: PropTypes.func,
  serverIsAvailable: PropTypes.bool,
  promoFilm: PropTypes.object,
  userIMG: PropTypes.string,
  addFilmToMyList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filmCards: getFilmCards(state),
  filmsToShow: getFilmsToShow(state),
  genre: getGenre(state),
  authorizationStatus: getAuthorizationStatus(state),
  serverIsAvailable: getServerAvailability(state),
  promoFilm: getPromoFilm(state),
  userIMG: getUserIMG(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTitleClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  showMore() {
    dispatch(ActionCreator.showMoreFilms());
  },
  addFilmToMyList(movieCard) {
    dispatch(ActionCreator.addFilmToMyList(movieCard));
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Main);
export {connectedComponent as Main};

