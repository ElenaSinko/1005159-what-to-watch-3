import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import {BrowserRouter} from "react-router-dom";
import movieCards from "../../mocks/films.js";


it(`Render movie-page`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <MoviePage
        movies={movieCards}
        id={`1`}
      />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
