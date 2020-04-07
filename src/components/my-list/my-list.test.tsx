import * as React from "react";
import * as renderer from "react-test-renderer";
import {MyList} from "./my-list";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";

const mockStore = configureStore([]);
const IMG = `/wtw/static/avatar/6.jpg`;


it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.APPLICATION_STATE]: {
      filmCards: [],
    },
    [NameSpace.USER]: {
      userIMG: IMG,
    },
  });
  const tree = renderer
    .create(<Provider store={store}><MyList
      filmCards={[]}
      userIMG={IMG}
    /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

