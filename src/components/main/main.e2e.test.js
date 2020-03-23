import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main.jsx";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from "./../../reducer/reducer.js";
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
  }, {
    title: `Test`,
    img: `img/bohemian-rhapsody.jpg`,
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title be pressed`, () => {
  const onMovieSmallTitleClick = jest.fn();

  const main = shallow(
      <Provider store={store}>
        <Main
          filmCards={smallMovieCards}
        />
      </Provider>
  );

  const smallMovieCardLinks = main.find(`small-movie-card__link`);
  smallMovieCardLinks.forEach((it) => it.props().onClick());

  expect(onMovieSmallTitleClick.mock.calls.length).toBe(smallMovieCardLinks.length);
});
