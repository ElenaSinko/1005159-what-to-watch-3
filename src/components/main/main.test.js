import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const smallMovieCards = [
  {
    title: `Test`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 6,
  }, {
    title: `Test`,
    img: `img/bohemian-rhapsody.jpg`,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: 6,
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
