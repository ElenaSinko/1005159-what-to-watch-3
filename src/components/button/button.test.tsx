import * as React from "react";
import * as renderer from "react-test-renderer";
import {Button} from "./button";
import {noop} from "../../utils";


it(`Render App`, () => {
  const tree = renderer
    .create(<Button
      onClick={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

