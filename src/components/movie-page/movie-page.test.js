import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie-page.jsx";
import {AuthorizationStatus} from "../../reducer/user/user";
import {createAPI} from "../../api";
import {applyMiddleware, createStore} from "redux";
import reducer from "../../reducer/reducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);


const userIMG = `/wtw/static/avatar/6.jpg`;


it(`Render MoviePage`, () => {
  const tree = renderer
    .create(<Provider store={store}><MoviePage
      filmCards={[]}
      userIMG={userIMG}
      id={`1`}
      authorizationStatus={AuthorizationStatus.NO_AUTH}
    /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
