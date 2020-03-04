import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {BrowserRouter} from "react-router-dom";

const smallMovieCard = {
  title: `test`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

it(`Render small movie card`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <SmallMovieCard
        smallMovieCard={smallMovieCard}
      />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
