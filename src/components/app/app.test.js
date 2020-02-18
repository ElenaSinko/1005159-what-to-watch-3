import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const smallMovieCards = [
  {
    title: `Test`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    id: 2,
  }, {
    title: `Test`,
    img: `img/bohemian-rhapsody.jpg`,
    id: 3,
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movieTitle={`Test`} movieGenre={`Test`} movieYear={2020} smallMovieCards={smallMovieCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
