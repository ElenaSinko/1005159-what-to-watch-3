import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {Link} from "react-router-dom";
import {PAGES} from "../../consts.js";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {smallMovieCard, onMovieSmallCardHover} = this.props;
    return (
      <article
        onMouseOver={() => onMovieSmallCardHover(smallMovieCard.id)}
        onMouseEnter={() => {
          this.setState({isPlaying: true});
        }}
        onMouseLeave={() => {
          this.setState({isPlaying: false});
        }}
        className="small-movie-card catalog__movies-card">
        <Link to={`${PAGES.FILM}/${smallMovieCard.id}`}>
          <div className="small-movie-card__image">
            <VideoPlayer src={smallMovieCard.src} isPlaying={this.state.isPlaying} poster={smallMovieCard.imgPrev} isMute={true}/>
          </div>
          <h3 className="small-movie-card__title">
            <span className="small-movie-card__link" href="movie-page.html">{smallMovieCard.name}</span>
          </h3>
        </Link>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  smallMovieCard: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    imgPrev: PropTypes.string,
    id: PropTypes.number,
    src: PropTypes.string,
  }),
  onMovieSmallCardHover: PropTypes.func,
};

export default SmallMovieCard;
