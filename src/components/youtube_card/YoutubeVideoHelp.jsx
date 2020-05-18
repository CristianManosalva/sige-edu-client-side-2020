import React from 'react';
import PropTypes from 'prop-types';
import VideosYoutube from './VideosYoutube';


var BASEDIR = process.env.REACT_APP_BASEDIR;

const YoutubeVideoHelp = (props) => {

  return (
    <div className="row">
      {props.videoId.map((videoId) => {
        // console.log(videoId.urlTutorial);
        return (
          <div className="col-xs-12 col-sm-6" >
            <div className="team-member">
              <div className="col-12">
                <VideosYoutube videoId={videoId.urlTutorial} />
              </div>
              <div className="user-info">
                <h3>
                  {videoId.nameTutorial}
                </h3>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default YoutubeVideoHelp