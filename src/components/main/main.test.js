import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from "./../../reducer/reducer.js";
import thunk from "redux-thunk";
import {createAPI} from "../../api";


const api = createAPI(() => {});

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

const smallMovieCards = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imgPrev: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    id: 1,
    srcFullVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
    movieYear: 2014,
    duration: 137,
    moviePoster: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    movieBG: `/img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    movieRatingLevel: `Very good`,
    movieRatingCount: `240 ratings`,
    movieDescription: ``,
    director: `Wes Andreson`,
    description: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    onOverviewTabClick: () => {},
  }, {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imgPrev: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    id: 1,
    srcFullVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
    movieYear: 2014,
    duration: 137,
    moviePoster: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    movieBG: `/img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    movieRatingLevel: `Very good`,
    movieRatingCount: `240 ratings`,
    movieDescription: ``,
    director: `Wes Andreson`,
    description: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    onOverviewTabClick: () => {},
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
