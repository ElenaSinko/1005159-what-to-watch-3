import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

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
      <Main
        movieTitle={`Test`} movieGenre={`Test`} movieYear={2020} smallMovieCards={smallMovieCards}
      />
  );

  const smallMovieCardLinks = main.find(`small-movie-card__link`);
  smallMovieCardLinks.forEach((it) => it.props().onClick());

  expect(onMovieSmallTitleClick.mock.calls.length).toBe(smallMovieCardLinks.length);
});
