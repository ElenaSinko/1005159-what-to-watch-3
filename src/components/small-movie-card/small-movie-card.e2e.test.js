import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

const smallMovieCardInformation = {
  title: `Test`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  id: 1
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Hover on SmallMovieCard should pass the information to the handler`, () => {
  const onMovieSmallCardHover = jest.fn();
  const smallMovieCard = shallow(
      <SmallMovieCard
        smallMovieCard={smallMovieCardInformation}
        onMovieSmallCardHover={onMovieSmallCardHover}
      />);
  smallMovieCard.props().onMouseOver();

  expect(onMovieSmallCardHover).toHaveBeenCalledTimes(1);
  expect(onMovieSmallCardHover.mock.calls[0][0]).toBe(smallMovieCardInformation.id);
});

it(`Click on SmallMovieCard should change url`, () => {
  delete window.location;

  window.location = {assign: jest.fn()};

  const smallMovieCard = shallow(
      <SmallMovieCard
        smallMovieCard={smallMovieCardInformation}
        onMovieSmallCardHover={() => {}}
      />);
  smallMovieCard.props().onClick();
  expect(global.window.location.assign).toHaveBeenCalledTimes(1);
});
