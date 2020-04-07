import * as React from "react";

interface Props {
  genres: string[];
  onGenreTitleClick: (string) => void;
}

const GenresList: React.FunctionComponent<Props> = (props: Props) => {
  const {genres, onGenreTitleClick} = props;
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => <li onClick={() => onGenreTitleClick(genre)} className="catalog__genres-item" key={genre + i}>
        <a className="catalog__genres-link">{genre}</a>
      </li>)}
    </ul>
  );
};

export default GenresList;
