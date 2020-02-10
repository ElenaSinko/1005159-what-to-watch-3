import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Render main screen`, () => {
  const tree = renderer
    .create(<Main
      movieTitle={`Test`} movieGenre={`Test`} movieYear={2020} smallMovieCardTitles={[`Test`, `Test`, `Test`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
