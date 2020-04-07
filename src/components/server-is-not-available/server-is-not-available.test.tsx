import * as React from "react";
import * as renderer from "react-test-renderer";
import {ServerIsNotAvailable} from "./server-is-not-available";


it(`Render ServerIsNotAvailable`, () => {
  const tree = renderer
    .create(<ServerIsNotAvailable />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

