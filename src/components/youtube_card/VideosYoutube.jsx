import React, { Component } from 'react'
import YouTube from 'react-youtube'

//https://www.youtube.com/watch?v=_nBlN9yp9R8
//https://youtu.be/_nBlN9yp9R8

class VideosYoutube extends Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.stopVideo()
  }
  render() {
    const opts = {
      height: '400',
      width: '450',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
    const { videoId } = this.props
    return (
      <div className="row">
        <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
      </div>
    )
  }
}
export default VideosYoutube
