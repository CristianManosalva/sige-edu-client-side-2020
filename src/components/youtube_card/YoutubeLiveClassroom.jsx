import React, { Component } from 'react'
import YouTube from 'react-youtube'
class YoutubeLiveClassroom extends Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.stopVideo()
  }
  render() {
    const opts = {
      height: '400',
      width: '470',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
    const { videoId } = this.props
    return (
      <div>
        <div className="row">
        <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
      </div>
      </div>
    )
  }
}
export default YoutubeLiveClassroom