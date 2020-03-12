import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class GenresList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {genres, onGenreTitleClick} = this.props;
    return (
      <ul className="catalog__genres-list">
        {genres.map((genre, i) => <li onClick={() => onGenreTitleClick(genre)} className="catalog__genres-item" key={genre + i}>
          <a className="catalog__genres-link">{genre}</a>
        </li>)}
      </ul>
    );
  }
}

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
  onGenreTitleClick: PropTypes.func,
};

export default GenresList;
