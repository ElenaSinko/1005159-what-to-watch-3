import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list.jsx";

const genres = [`a`, `b`, `c`];

it(`Render App`, () => {
  const tree = renderer
    .create(<GenresList
      onGenreTitleClick={() => {}}
      genres={genres}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

