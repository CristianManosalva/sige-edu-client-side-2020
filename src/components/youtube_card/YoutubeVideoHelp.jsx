import React from 'react';
import PropTypes from 'prop-types';
import VideosYoutube from './VideosYoutube';


var BASEDIR = process.env.REACT_APP_BASEDIR;

const YoutubeVideoHelp = (props) => {

  return (
    <div className="row">
      {props.videoId.map((videoId) => {
        console.log(videoId);
        return (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" >
            <div className="team-member">
              <div className="col-12">
                <VideosYoutube videoId={videoId} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

YoutubeVideoHelp.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
}

export default YoutubeVideoHelp