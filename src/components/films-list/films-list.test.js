import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

const smallMovieCards = [
  {
    title: `Test`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }, {
    title: `Test`,
    img: `img/bohemian-rhapsody.jpg`,
  }
];

it(`Render FilmsList`, () => {
  const tree = renderer
    .create(<FilmsList
      smallMovieCards={smallMovieCards}
      onMovieSmallTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
