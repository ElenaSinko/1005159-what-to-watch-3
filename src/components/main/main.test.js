import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {BrowserRouter} from "react-router-dom";

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
    .create(<BrowserRouter>
      <Main
        movieTitle={`Test`} movieGenre={`Test`} movieYear={2020} smallMovieCards={smallMovieCards} onMovieSmallTitleClick={() => {}}
      />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
