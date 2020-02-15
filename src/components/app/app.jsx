import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import MoviePage from "../movie-page/movie-page.jsx";

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

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mode: 0,
    };
  }

  _renderMainScreen() {
    const {mode} = this.state;
    const {movieTitle, movieGenre, movieYear, smallMovieCards} = this.props;

    if (mode === 0) {
      return (
        <Main
          movieTitle={movieTitle}
          movieGenre={movieGenre}
          movieYear={movieYear}
          smallMovieCards={smallMovieCards}
          onMovieSmallTitleClick={(evt) => {
            evt.preventDefault();
            this.setState({
              mode: 2,
            });
          }}
        />
      );
    }

    if (mode === 2) {
      return (<MoviePage
        bigMovieCard = {bigMovieCard}
      />);
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/dev-movie-page">
            <MoviePage
              bigMovieCard = {bigMovieCard}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }


}

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  smallMovieCards: PropTypes.array.isRequired,
};
export default App;
