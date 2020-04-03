import React from "react";
import renderer from "react-test-renderer";
import {FilmComment} from "./film-comment.jsx";

const userComment = {
  id: 1,
  user: {id: 19, name: `Christina`},
  rating: 9.5,
  comment: `This movie really touched my heart.`,
  date: `2020-00-28T11:05:16.526Z`,
};

it(`Render FilmComment`, () => {
  const tree = renderer
    .create(<FilmComment
      comment={userComment}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
