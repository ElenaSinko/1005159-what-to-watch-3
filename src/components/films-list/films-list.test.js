import * as React from "react";
import * as renderer from "react-test-renderer";
import FilmsList from "./films-list";
import {BrowserRouter} from "react-router-dom";

const smallMovieCards = [
  {
    title: `Test`,
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }, {
    title: `Test`,
    img: `img/bohemian-rhapsody.jpg`,
  }
];

it(`Render FilmsList`, () => {
  const tree = renderer
    .create(<BrowserRouter>
      <FilmsList
        smallMovieCards={smallMovieCards}
      />
    </BrowserRouter>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
