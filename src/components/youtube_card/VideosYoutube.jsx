import React, { Component } from 'react'
import YouTube from 'react-youtube'

class VideosYoutube extends Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.stopVideo()
  }
  render() {
    const { videoId } = this.props
    const opts = {
      height: '400',
      width: '450',
      playerVars: {
        autoplay: 1,
      },
    }
    
    return (
      <div className="row">
        <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
      </div>
    )
  }
}
export default VideosYoutube
