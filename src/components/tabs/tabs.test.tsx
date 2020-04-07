import * as React from "react";
import * as renderer from "react-test-renderer";
import {Tabs} from "./tabs";
import NameSpace from "../../reducer/name-space";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const Comments = [
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

const movieCard = {
  name: `Gangs of new york`,
  img: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Gangs_of_New_York_Poster.jpg`,
  imgPrev: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/gangs_of_new_york.jpg`,
  movieBG: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/gangs_of_new_york.jpg`,
  BGColor: `#A6B7AC`,
  description: `In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.`,
  rating: 8.8,
  movieRatingCount: 370881,
  director: `Martin Scorsese`,
  starring: [`Leonardo DiCaprio`, `Cameron Diaz`, `Daniel Day-Lewis`],
  duration: 167,
  genre: `Crime`,
  released: 2002,
  id: 1,
  movieYear: 2000,
  isFavorite: false,
  srcFullVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Render Tabs`, () => {
  const store = mockStore({
    [NameSpace.APPLICATION_STATE]: {
      filmComments: Comments,
    },
  });

  const tree = renderer
    .create(<Provider store={store}><Tabs
      movieCard={movieCard}
      currentTab={1}
      filmComments={Comments}
    /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
