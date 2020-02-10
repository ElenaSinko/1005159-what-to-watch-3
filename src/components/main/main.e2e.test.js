import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title be pressed`, () => {
  const onMovieSmallTitleClick = jest.fn();

  const main = shallow(
      <Main
        movieTitle={`Test`} movieGenre={`Test`} movieYear={2020} smallMovieCardTitles={[`Test`, `Test`, `Test`]}
      />
  );

  const smallMovieCardLinks = main.find(`small-movie-card__link`);
  smallMovieCardLinks.forEach((it) => it.props().onClick());

  expect(onMovieSmallTitleClick.mock.calls.length).toBe(smallMovieCardLinks.length);
});
