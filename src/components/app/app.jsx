import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import MoviePage from "../movie-page/movie-page.jsx";
import {PAGES} from "./../../consts.js";
import movieCards from "../../mocks/films.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mode: 0,
    };
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={PAGES.MAIN}>
            <Main
              movieTitle={movieCards[0].title}
              movieGenre={movieCards[0].genre}
              movieYear={movieCards[0].movieYear}
              smallMovieCards={movieCards}
              onMovieSmallTitleClick={(evt) => {
                evt.preventDefault();
                this.setState({
                  mode: 2,
                });
              }}
            />
          </Route>
          <Route exact path={`${PAGES.FILM}/:id`}>
            {(props) => {
              return <MoviePage
                movies={movieCards}
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
};
export default App;
