import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import MoviePage from "../movie-page/movie-page.jsx";
import {PAGES} from "./../../consts.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import movieCards from "../../mocks/films.js";
import {unique} from "../../utils.js";

const genres = [`All genres`].concat(unique(movieCards.map((movieCard) => movieCard.genre)));

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmCards, onGenreTitleClick} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={PAGES.MAIN}>
            <Main
              movieTitle={filmCards[0].title}
              movieGenre={filmCards[0].genre}
              movieYear={filmCards[0].movieYear}
              smallMovieCards={filmCards}
              genres={genres}
              onGenreTitleClick={(evt) => {
                evt.preventDefault();
                onGenreTitleClick();
              }}
            />
          </Route>
          <Route exact path={`${PAGES.FILM}/:id`}>
            {(props) => {
              return <MoviePage
                movies={filmCards}
                id={props.match.params.id}
              />;
            }}
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
  smallMovieCards: PropTypes.array,
  filmCards: PropTypes.array,
  onGenreTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmCards: state.filmCards,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTitleClick() {
    dispatch(ActionCreator.changeGenre());
    dispatch(ActionCreator.changeFilmsForTheGenre());
  },
// onUserAnswer() {
//   dispatch(ActionCreator.incrementStep());
// },
});


// export default App;
export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
