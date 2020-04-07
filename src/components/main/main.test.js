import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {noop} from "../../utils";

const mockStore = configureStore([]);

const smallMovieCards = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imgPrev: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    id: 1,
    srcFullVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
    movieYear: 2014,
    duration: 137,
    moviePoster: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    movieBG: `/img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    movieRatingLevel: `Very good`,
    movieRatingCount: `240 ratings`,
    movieDescription: ``,
    director: `Wes Andreson`,
    description: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  }, {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    imgPrev: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    id: 1,
    srcFullVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`,
    movieYear: 2014,
    duration: 137,
    moviePoster: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    movieBG: `/img/bg-the-grand-budapest-hotel.jpg`,
    rating: `8,9`,
    movieRatingLevel: `Very good`,
    movieRatingCount: `240 ratings`,
    movieDescription: ``,
    director: `Wes Andreson`,
    description: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  }
];

it(`Render main screen`, () => {
  const store = mockStore({
    [NameSpace.APPLICATION_STATE]: {
      filmCards: smallMovieCards,
      filmsToShow: 8,
      genre: `All genres`,
      serverIsAvailable: true,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userIMG: ``,
    },
  });
  const tree = renderer
    .create(<Provider store={store}>
      <BrowserRouter>
        <Main
          filmCards={smallMovieCards}
          onGenreTitleClick={noop}
          showMore={noop}
          filmsToShow={8}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          serverIsAvailable={true}
          userIMG={``}
        />
      </BrowserRouter>
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

