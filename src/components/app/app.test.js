import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import reducer from "./../../reducer/reducer.js";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {createAPI} from "../../api";
import thunk from "redux-thunk";

const api = createAPI(() => {});

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

const smallMovieCards = [
  {
    title: `Test`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    id: 2,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }, {
    title: `Test`,
    img: `img/bohemian-rhapsody.jpg`,
    id: 3,
    src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  }
];

it(`Render App`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <App
        movieTitle={`Test`} movieGenre={`Test`} movieYear={2020} smallMovieCards={smallMovieCards}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
