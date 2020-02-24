import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();

    this.state = {
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {

  }

  render() {
    const {src, img} = this.props;
    return (
      // <div className="player">
      <video ref={this._videoRef}
        src={src}
        className="player__video"
        poster={img}
        width="280"
        height="175"
        muted
      />
      /*
        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div> */ // </div>
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
  img: PropTypes.string,
};
