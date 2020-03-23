import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const FULL_SCREEN_SIZE = 100 + `%`;

export default class VideoPlayerFullScreen extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();

    this.state = {
      isPlaying: true,
      progress: null,
      duration: 0.1,
    };
  }

  _handlePlayButtonClick() {
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying,
    }));
  }

  _getVideoDuration(wholeDuration) {
    this.setState({
      duration: wholeDuration,
    });
  }

  _getCurrentDuration(currentDuration) {
    if (currentDuration) {
      this.setState({
        progress: currentDuration,
      });
    }

  }

  componentDidMount() {
    const {isPlaying} = this.state;
    const video = this._videoRef.current;
    return isPlaying ? video.play() : video.pause();
  }

  render() {
    const {isPlaying} = this.state;
    const {src, poster, title, closeVideoPlayerFullScreen} = this.props;
    // const lessDuration = this.state.duration - this.state.progress;
    const progressBar = this.state.progress * 100 / this.state.duration;
    const lessDuration = this.state.duration - this.state.progress;
    return (
      <div className="player">
        <video
          ref={this._videoRef}
          className="player__video"
          poster={poster}
          width={FULL_SCREEN_SIZE}
          height={FULL_SCREEN_SIZE}
          src={src}
          autoPlay={true}
          getVideoDuration={(duration) => this._getVideoDuration(duration)}
        />

        <button
          onClick={closeVideoPlayerFullScreen}
          type="button"
          className="player__exit"
        >
          Exit
        </button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress
                className="player__progress"
                value={progressBar}
                max="100"
              ></progress>
              <div className="player__toggler" style={{left: `${progressBar}` + `%`}}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">{lessDuration}</div>
          </div>
          <div className="player__controls-row">
            <button
              onClick={() => this._handlePlayButtonClick()}
              type="button" className="player__play">
              {isPlaying
                ? <React.Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#play"></use>
                  </svg>
                  <span>Play</span>
                </React.Fragment>
                : <React.Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </React.Fragment>}
            </button>
            <div className="player__name">{title}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

VideoPlayerFullScreen.propTypes = {
  isPlaying: PropTypes.bool,
  src: PropTypes.string,
  poster: PropTypes.string,
  title: PropTypes.string,
  closeVideoPlayerFullScreen: PropTypes.func
};
