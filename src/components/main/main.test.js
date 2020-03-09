import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./../../reducer.js";

const store = createStore(reducer);

const smallMovieCards = [
  {
    title: `Test`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 6,
    genre: `Test`,
    movieYear: 2000,
    moviePoster: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    movieBG: `/img/bg-the-grand-budapest-hotel.jpg`,
    overView: {
      movieRatingScore: `0`,
      movieRatingLevel: `0`,
      movieRatingCount: `0`,
      movieDescription: ``,
      movieDirector: `0`,
      movieStarring: `0`,
    },
  }, {
    title: `Test`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 6,
    genre: `Test`,
    movieYear: 2000,
    moviePoster: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    movieBG: `/img/bg-the-grand-budapest-hotel.jpg`,
    overView: {
      movieRatingScore: `0`,
      movieRatingLevel: `0`,
      movieRatingCount: `0`,
      movieDescription: ``,
      movieDirector: `0`,
      movieStarring: `0`,
    },
  }
];

it(`Render main screen`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <BrowserRouter>
        <Main
          filmCards={smallMovieCards} onGenreTitleClick={() => {}}
        />
      </BrowserRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
