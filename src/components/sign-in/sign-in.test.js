import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";
import {Provider} from "react-redux";
import {createAPI} from "../../api";
import {applyMiddleware, createStore} from "redux";
import reducer from "../../reducer/reducer";
import thunk from "redux-thunk";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

it(`Render App`, () => {
  const tree = renderer
    .create(<Provider store={store}><SignIn
      onSubmit={() => {}}
      onReplayButtonClick={() => {}}
    /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

