import * as React from "react";
import * as renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";
import {BrowserRouter} from "react-router-dom";

const smallMovieCard = {
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
  id: 2,
  movieYear: 2000,
  isFavorite: false,
  srcFullVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Render small movie card`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <SmallMovieCard
        smallMovieCard={smallMovieCard}
      />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
