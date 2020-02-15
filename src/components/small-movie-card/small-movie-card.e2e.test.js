import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";


const smallMovieCardInformation = {
  title: `Test`,
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  id: `Test`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Hover on SmallMovieCard should pass the information to the handler`, () => {
  const onMovieSmallCardHover = jest.fn();
  const smallMovieCard = shallow(
      <SmallMovieCard
        smallMovieCard={smallMovieCardInformation}
        onMovieSmallTitleClick={() => {}}
        onMovieSmallCardHover={onMovieSmallCardHover}
      />
  );
  smallMovieCard.props().onMouseEnter();
  // smallMovieCard.simulate(`hover`);

  expect(smallMovieCard).toHaveBeenCalledTimes(1);
  expect(smallMovieCard.mock.calls[0][0]).toBe(smallMovieCardInformation.id);
});
