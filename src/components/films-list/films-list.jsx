import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

// const smallMovieCardTitlesHandler = () => {};

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: -1,
    };
  }

  render() {
    const {smallMovieCards, onMovieSmallTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {smallMovieCards.map((smallMovieCard, i) => <SmallMovieCard
          key={smallMovieCard + i}
          id={smallMovieCard.id}
          smallMovieCard={smallMovieCard}
          onMovieSmallTitleClick={onMovieSmallTitleClick}
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
  onMovieSmallTitleClick: PropTypes.func,
};

export default FilmsList;
