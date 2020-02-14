import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const smallMovieCard = {
  title: `test`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

it(`Render small movie card`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      smallMovieCard={smallMovieCard}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
