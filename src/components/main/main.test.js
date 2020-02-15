import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const smallMovieCards = [
  {
    title: `Test`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }, {
    title: `Test`,
    img: `img/bohemian-rhapsody.jpg`,
  }
];

it(`Render main screen`, () => {
  const tree = renderer
    .create(<Main
      movieTitle={`Test`} movieGenre={`Test`} movieYear={2020} smallMovieCards={smallMovieCards} onMovieSmallTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
