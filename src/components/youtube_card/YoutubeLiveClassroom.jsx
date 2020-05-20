var React = require('react');
var ReactDOM = require('react-dom');
var YoutubeLive = require('youtube-live-react');

//https://www.youtube.com/watch?v=_nBlN9yp9R8
//https://youtu.be/_nBlN9yp9R8

class YoutubeLiveClassroom extends Component {
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
      <div>
        <YoutubeLive
          iframeWidth={400}
          iframeHeight={300}
          maxResults={50}
          youtubeChannelId='UCcyMZE217fiWRcT2I92O1JQ'
          googleApiKey='AIzaSyCfXoR0zMPQzTzEN19A6njL5c35evBGP6w' 
          />
      </div>
    )
  }
}
export default YoutubeLiveClassroom