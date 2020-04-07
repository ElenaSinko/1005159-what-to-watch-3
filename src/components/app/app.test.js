import * as React from "react";
import * as renderer from "react-test-renderer";
import App from "./app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Render App`, () => {
  {
    const store = mockStore({});
    const tree = renderer
    .create(<Provider store={store}>
      <App />
    </Provider>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  }
});
