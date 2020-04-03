import React from "react";
import renderer from "react-test-renderer";
import {ServerIsNotAvailable} from "./server-is-not-available.jsx";


it(`Render ServerIsNotAvailable`, () => {
  const tree = renderer
    .create(<ServerIsNotAvailable />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

