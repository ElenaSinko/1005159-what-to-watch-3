import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const smallMovieCardTitlesHandler = () => {};

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: -1,
    };
  }

  render() {
    const {smallMovieCards} = this.props;
    return (
      <div className="catalog__movies-list">
        {smallMovieCards.map((smallMovieCard, i) => <SmallMovieCard
          key={smallMovieCard + i}
          smallMovieCard={smallMovieCard}
          onMovieSmallTitleClick={smallMovieCardTitlesHandler}
          onMovieSmallCardHover={() => {
            this.setState({
              activeCard: smallMovieCard.id,
            });
          }}
        />)}
      </div>
    );
  }
}

FilmsList.propTypes = {
  smallMovieCards: PropTypes.array.isRequired,
};

export default FilmsList;
