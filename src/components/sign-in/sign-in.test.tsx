import * as React from "react";
import * as renderer from "react-test-renderer";
import {SignIn} from "./sign-in";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {noop} from "../../utils";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
  });
  const tree = renderer
    .create(<Provider store={store}><SignIn
      onSubmit={noop}
    /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

