import * as React from "react";
import VideoPlayer from "../video-player/video-player";
import {Link} from "react-router-dom";
import {PAGES} from "../../consts";
import {FilmCard} from "../../types";

interface Props {
  smallMovieCard: FilmCard;
}

interface State {
  isPlaying: boolean;
}

class SmallMovieCard extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  render() {
    const {smallMovieCard} = this.props;
    return (
      <article
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
            <span style={{color: `white`}} className="small-movie-card__link">{smallMovieCard.name}</span>
          </h3>
        </Link>
      </article>
    );
  }
}

export default SmallMovieCard;
