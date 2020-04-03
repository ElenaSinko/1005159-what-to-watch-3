import React from "react";
import renderer from "react-test-renderer";
import {Button} from "./button.jsx";


it(`Render App`, () => {
  const tree = renderer
    .create(<Button
      onClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

