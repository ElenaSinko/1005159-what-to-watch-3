import * as React from "react";

interface Props {
  isPlaying: boolean;
  src: string;
  poster: string;
  isMute?: boolean;
}

interface State {
  process: null | number;
  isLoading: boolean;
}

export default class SmallMovieCard extends React.PureComponent<Props, State> {
  private videoRef: React.RefObject<HTMLVideoElement>;
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();

    this.state = {
      process: null,
      isLoading: true,
    };
  }

  render() {
    const {src, poster} = this.props;
    return (
      <video ref={this.videoRef}
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
    const video = this.videoRef.current;
    return isPlaying ? video.play() : video.load();
  }
}
