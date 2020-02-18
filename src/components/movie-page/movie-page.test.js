import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const bigMovieCard = {
  movieTitle: `Test`,
  movieGenre: `Test`,
  movieYear: 1000,
  moviePoster: `Test`,
  movieBG: `Test`,
  overView: {
    movieRatingScore: `Test`,
    movieRatingLevel: `Test`,
    movieRatingCount: `Test`,
    movieDescription: `Test`,
    movieDirector: `Test`,
    movieStarring: `Test`,
  }
};

it(`Render movie-page`, () => {
  const tree = renderer
    .create(<MoviePage
      bigMovieCard={bigMovieCard}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
