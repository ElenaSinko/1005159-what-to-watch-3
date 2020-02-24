import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {smallMovieCard, onMovieSmallTitleClick, onMovieSmallCardHover} = this.props;
    return (
      <article onClick={onMovieSmallTitleClick}
        onMouseOver={() => onMovieSmallCardHover(smallMovieCard.id)}
        onMouseEnter={() => {
          this.setState({isPlaying: true});
        }}
        onMouseLeave={() => {
          this.setState({isPlaying: false});
        }}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <VideoPlayer src={SmallMovieCard.src} isPlaying={this.state.isPlaying} poster={smallMovieCard.img}/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{smallMovieCard.title}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  smallMovieCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number,
    src: PropTypes.string,
  }).isRequired,
  onMovieSmallTitleClick: PropTypes.func,
  onMovieSmallCardHover: PropTypes.func,
};

export default SmallMovieCard;
