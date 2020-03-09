import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page.jsx";
import {BrowserRouter} from "react-router-dom";
import movieCards from "../../mocks/films.js";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./../../reducer.js";

const store = createStore(reducer);


it(`Render movie-page`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <BrowserRouter>
        <MoviePage
          filmCards={movieCards}
          id={`1`}
        />
      </BrowserRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
