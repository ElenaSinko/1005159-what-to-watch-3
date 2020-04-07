import * as React from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {FilmCard} from "../../types";

interface Props {
  smallMovieCards: FilmCard[];
}

const FilmsList: React.FunctionComponent<Props> = (props: Props) => {
  const {smallMovieCards} = props;
  return (
    <div className="catalog__movies-list">
      {smallMovieCards.map((smallMovieCard, i) => <SmallMovieCard
        key={i}
        smallMovieCard={smallMovieCard}
      />)}
    </div>
  );
};

export default FilmsList;
