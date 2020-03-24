import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import FilmsList from "../films-list/films-list.jsx";
import {ServerIsNotAvailable} from "../server-is-not-available/server-is-not-available.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/application-state/application-state.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getFilmCards, getGenre, getFilmsToShow, getServerAvailability} from "../../reducer/application-state/selectors.js";
import {unique} from "../../utils.js";
import {Button} from "../button/button.jsx";
import VideoPlayerFullScreen from "../video-player-full-screen/video-player-full-screen.jsx";


class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playerIsWorking: false,
    };
  }

  render() {
    const {filmCards, onGenreTitleClick, showMore, filmsToShow, authorizationStatus, serverIsAvailable} = this.props;
    const currentCards = filmCards.slice(0, filmsToShow);
    const genres = [`All genres`].concat(unique(filmCards.map((movieCard) => movieCard.genre)));
    if (filmCards.length === 0) {
      return <div>Loading...</div>;
    }
    return <React.Fragment>
      {!serverIsAvailable && <ServerIsNotAvailable />}
      {serverIsAvailable && !this.state.playerIsWorking &&
        <React.Fragment>
          <section className="movie-card">
            <div className="movie-card__bg">
              <img src={filmCards[0].movieBG} alt={name}/>
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
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
                </div>
              </div>}
              {authorizationStatus === AuthorizationStatus.NO_AUTH && <div className="user-block">
                <Link to={`/sign-in`}>
                  <div href="sign-in.html" className="user-block__link">Sign in</div>
                </Link>
              </div>}
            </header>
            <div className="movie-card__wrap">
              <div className="movie-card__info">
                <div className="movie-card__poster">
                  <img src={filmCards[0].img} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
                </div>
                <div className="movie-card__desc">
                  <h2 className="movie-card__title">{filmCards[0].name}</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">{filmCards[0].genre}</span>
                    <span className="movie-card__year">{filmCards[0].movieYear}</span>
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
          </div></React.Fragment>}
      {this.state.playerIsWorking && <VideoPlayerFullScreen playerIsWorking={this.state.playerIsWorking} src={filmCards[0].srcFullVideo} name={filmCards[0].name} poster={filmCards[0].img} closeVideoPlayerFullScreen={() => {
        this.setState({playerIsWorking: false});
      }}/>}
    </React.Fragment>;
  }
}

Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  filmCards: PropTypes.array.isRequired,
  onGenreTitleClick: PropTypes.func,
  showMore: PropTypes.func,
  filmsToShow: PropTypes.number,
  onPlayButtonClick: PropTypes.func,
  serverIsAvailable: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  filmCards: getFilmCards(state),
  filmsToShow: getFilmsToShow(state),
  genre: getGenre(state),
  authorizationStatus: getAuthorizationStatus(state),
  serverIsAvailable: getServerAvailability(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTitleClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  showMore() {
    dispatch(ActionCreator.showMoreFilms());
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Main);
export {connectedComponent as Main};

