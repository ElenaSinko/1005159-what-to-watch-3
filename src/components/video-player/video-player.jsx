import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();

    this.state = {
      isPlaying: setTimeout(props.isPlaying, 1000),
    };
  }

  render() {
    const {src, poster} = this.props;
    return (
      <video ref={this._videoRef}
        src={src}
        className="player__video"
        poster={poster}
        width="280"
        height="175"
        muted
      />
    );
  }

  componentDidUpdate() {
    const {isPlaying} = this.props;
    const video = this._videoRef.current;
    return isPlaying ? video.play() : video.load();
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool,
  src: PropTypes.string,
  poster: PropTypes.string,
};
