import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilmCards} from "../../reducer/application-state/selectors.js";
import {Tabs} from "../tabs/tabs.jsx";
import {Operation as DataOperation} from "../../reducer/application-state/application-state.js";
import {PAGES} from "../../consts";
import {Link} from "react-router-dom";
import {getAuthorizationStatus, getUserIMG} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 1,
    };
  }

  _handleAddFilmButton() {
    const {onAddFilmToMyListClick, filmCards, id} = this.props;
    const movieCard = filmCards.filter((it) => it.id === parseInt(id, 10))[0];
    const {isFavorite} = movieCard;
    const filmStatus = isFavorite ? 0 : 1;
    onAddFilmToMyListClick({id, filmStatus});
  }

  componentDidMount() {
    const {loadFilmComments, id} = this.props;
    loadFilmComments(id);
  }

  componentDidUpdate() {
    const {loadFilmComments, id} = this.props;
    loadFilmComments(id);
  }

  render() {
    const {filmCards, id, userIMG, authorizationStatus} = this.props;
    const movieCard = filmCards.filter((it) => it.id === parseInt(id, 10))[0];
    const filmsMoreLikeThis = filmCards.filter((it) => it.genre === movieCard.genre).slice(0, 4);
    const {name,
      genre,
      movieYear,
      img,
      movieBG,
      rating,
      director,
      starring,
      duration,
      movieRatingCount,
      description,
      isFavorite} = movieCard;
    return <React.Fragment><section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={movieBG} alt={name}/>
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
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{movieYear}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <Link to={`${PAGES.PLAYER}/${movieCard.id}`} style={{textDecoration: `none`, color: `#eee5b5`}}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
              </button>
              <button onClick={() => {
                this._handleAddFilmButton();
              }} className="btn btn--list movie-card__button" type="button">
                {isFavorite && <React.Fragment>
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  <span>My list</span>
                </React.Fragment>}

                {!isFavorite && <React.Fragment>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </React.Fragment>}
              </button>
              {authorizationStatus === AuthorizationStatus.AUTH &&
                <Link to={`${PAGES.REVIEW}/${movieCard.id}`} style={{textDecoration: `none`}}>
                  <div className="btn movie-card__button">Add review</div>
                </Link>}
            </div>
          </div>
        </div>
      </div>
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={img} alt={name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li onClick={() => {
                  this.setState({tabIndex: 1});
                }} className="movie-nav__item movie-nav__item">
                  <div className="movie-nav__link">Overview</div>
                </li>
                <li onClick={() => {
                  this.setState({tabIndex: 2});
                }} className="movie-nav__item">
                  <div className="movie-nav__link">Details</div>
                </li>
                <li onClick={() => {
                  this.setState({tabIndex: 3});
                }} className="movie-nav__item">
                  <div className="movie-nav__link">Reviews</div>
                </li>
              </ul>
            </nav>
            <Tabs currentTab={this.state.tabIndex} rating={rating} genre={genre} description={description} director={director} duration={duration} movieRatingCount={movieRatingCount} starring={starring} movieYear={movieYear}/>
          </div>
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <div className="catalog__movies-list">
          {filmsMoreLikeThis.map((it, i) => <SmallMovieCard
            key={i}
            id={it.id}
            smallMovieCard={it}/>)}
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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

MoviePage.propTypes = {
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
        genre: PropTypes.string,
        movieYear: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
        srcFullVideo: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
  ),
  id: PropTypes.string,
  onAddFilmToMyListClick: PropTypes.func,
  userIMG: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
  loadFilmComments: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filmCards: getFilmCards(state),
  userIMG: getUserIMG(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAddFilmToMyListClick: ({id, filmStatus}) => {
    dispatch(DataOperation.addFilmToMyList({id, filmStatus}));
  },
  loadFilmComments: (id) => {
    dispatch(DataOperation.loadFilmComments(id));
  },
});

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(MoviePage);
export {connectedComponent as MoviePage};
