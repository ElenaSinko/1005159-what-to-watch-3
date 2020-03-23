import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import VideoPlayerFullScreen from "../video-player-full-screen/video-player-full-screen.jsx";
import {getFilmCards} from "../../reducer/application-state/selectors.js";
import {Tabs} from "../tabs/tabs.jsx";
import {ActionCreator} from "../../reducer/application-state/application-state";

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playerIsWorking: false,
      tabIsShowing: 2,
    };
  }

  render() {
    const {filmCards, id} = this.props;
    const movieCard = filmCards.filter((it) => it.id === parseInt(id, 10))[0];
    const {name, genre, movieYear, img, imgPrev, movieBG, srcFullVideo, rating, director, starring, duration, movieRatingCount, description} = movieCard;
    return <section className="movie-card movie-card--full">
      {!this.state.playerIsWorking && <React.Fragment><div className="movie-card__hero">
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
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
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
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
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
                  this.setState({tabIsShowing: 1});
                }} className="movie-nav__item movie-nav__item">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li onClick={() => {
                  this.setState({tabIsShowing: 2});
                }} className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li onClick={() => {
                  this.setState({tabIsShowing: 3});
                }} className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>
            <Tabs currentTab={this.state.tabIsShowing} rating={rating} genre={genre} description={description} director={director} duration={duration} movieRatingCount={movieRatingCount} starring={starring} movieYear={movieYear}/>
          </div>
        </div>
      </div></React.Fragment>}

      {this.state.playerIsWorking && <VideoPlayerFullScreen playerIsWorking={this.state.playerIsWorking} src={srcFullVideo} name={name} poster={imgPrev} duration={duration} closeVideoPlayerFullScreen={() => {
        this.setState({playerIsWorking: false});
      }}/>}
    </section>;
  }
}

MoviePage.propTypes = {
  filmCards: PropTypes.array,
  id: PropTypes.string,
  onOverviewTabClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filmCards: getFilmCards(state),
});

const connectedComponent = connect(mapStateToProps)(MoviePage);
export {connectedComponent as MoviePage};
