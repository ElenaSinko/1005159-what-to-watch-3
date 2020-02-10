import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      movieTitle={`Test`} movieGenre={`Test`} movieYear={2020} smallMovieCardTitles={[`Test`, `Test`, `Test`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
