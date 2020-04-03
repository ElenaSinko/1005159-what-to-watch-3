import React from "react";
import renderer from "react-test-renderer";
import {Tabs} from "./tabs.jsx";
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

const rating = 8;
const movieRatingCount = 234;
const director = `sgdg`;
const starring = [`cdv`, `efwa`];
const description = `csdvsdz`;
const duration = 134;
const genre = `dsv`;
const movieYear = 2000;
const currentTab = 2;
const filmComments = [
  {
    id: 1,
    user: {id: 19, name: `Christina`},
    rating: 9.5,
    comment: `This movie really touched my heart.`,
    date: `2020-00-28T11:05:16.526Z`,
  }, {
    id: 2,
    user: {id: 19, name: `Christina`},
    rating: 9.5,
    comment: `This movie really touched my heart.`,
    date: `2020-00-28T11:05:16.526Z`,
  }];

it(`Render Tabs`, () => {
  const tree = renderer
    .create(<Provider store={store}><Tabs
      rating={rating}
      movieRatingCount={movieRatingCount}
      director={director}
      starring={starring}
      description={description}
      duration={duration}
      genre={genre}
      movieYear={movieYear}
      currentTab={currentTab}
      filmComments={filmComments}
    /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
