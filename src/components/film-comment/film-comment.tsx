import * as React from "react";
import * as moment from 'moment';
import {Comment} from "../../types";

interface Props {
  comment: Comment;
}

export const FilmComment: React.FunctionComponent<Props> = (props: Props) => {
  const {comment} = props;
  return <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{comment.comment}</p>

      <footer className="review__details">
        <cite className="review__author">{comment.user.name}</cite>
        <time className="review__date" dateTime="2015-11-18">{moment(comment.date).format(`MMMM DD, YYYY`)}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{comment.rating}</div>
  </div>;
};
