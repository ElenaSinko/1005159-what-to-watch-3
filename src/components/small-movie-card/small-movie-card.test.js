import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

it(`Render small movie card`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      smallMovieCardTitle={`Test`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
