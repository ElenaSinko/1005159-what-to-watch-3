import * as React from "react";
import {connect} from "react-redux";
import {history} from "../../utils";
import {getFilmCards} from "../../reducer/application-state/selectors";
import {FilmCard} from "../../types";

const FULL_SCREEN_SIZE = 100 + `%`;

interface Props {
  filmCards: FilmCard[];
  isPlaying: boolean;
  id: number | string;
}

interface State {
  isPlaying: boolean;
  isLoading: boolean;
  progress: null | number;
  duration: number;
}

class Player extends React.PureComponent<Props, State> {
  private videoRef: React.RefObject<HTMLVideoElement>;
  private wholeDuration: number;
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();

    this.wholeDuration = null;


    this.state = {
      isPlaying: true,
      isLoading: true,
      progress: null,
      duration: 0.1,
    };
    this._requestFullscreen = this._requestFullscreen.bind(this);
  }

  _handlePlayButtonClick() {
    this.setState((prevState) => ({
      isPlaying: !prevState.isPlaying,
    }));
  }

  _getVideoDuration(wholeDuration) {
    this.wholeDuration = wholeDuration;
  }

  _getCurrentDuration(currentDuration) {
    this.setState({
      progress: currentDuration,
    });
  }

  _requestFullscreen() {
    const videoParent = this.videoRef.current.parentElement;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoParent.requestFullscreen({navigationUI: `show`});
    }
  }


  componentDidMount() {
    const {isPlaying} = this.state;
    const video = this.videoRef.current;

    video.oncanplaythrough = () => {
      this.setState({isLoading: false});
      this._getVideoDuration(Math.floor(video.duration));
    };
    video.ontimeupdate = () => {
      this.setState({
        progress: Math.floor(video.currentTime),
      });
      this._getCurrentDuration(Math.floor(video.currentTime));
    };
    return isPlaying ? video.play() : video.pause();
  }

  render() {
    const {isPlaying} = this.state;
    const {filmCards, id} = this.props;
    const filmToPlay = filmCards.filter((it) => it.id === parseInt(`${id}`, 10))[0];
    const lessDuration = this.wholeDuration - this.state.progress;
    const hours = Math.floor(lessDuration / 3600);
    const minutes = Math.floor((lessDuration - hours * 3600) / 60);
    const seconds = lessDuration % 60;
    const progressBar = this.state.progress * 100 / this.wholeDuration;
    return (
      <div className="player">
        <video
          ref={this.videoRef}
          className="player__video"
          poster={filmToPlay.imgPrev}
          width={FULL_SCREEN_SIZE}
          height={FULL_SCREEN_SIZE}
          src={filmToPlay.src}
          autoPlay={true}
        />
        <button
          onClick={() => {
            history.goBack();
          }}
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
            <div className="player__time-value">{hours}:{minutes}:{seconds}</div>
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
            <div className="player__name">{filmToPlay.name}</div>

            <button onClick={this._requestFullscreen} type="button" className="player__full-screen">
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

const mapStateToProps = (state) => ({
  filmCards: getFilmCards(state),
});

const connectedComponent = connect(mapStateToProps)(Player);
export {connectedComponent as Player};

