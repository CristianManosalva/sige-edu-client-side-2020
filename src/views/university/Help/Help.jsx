import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import YoutubeVideoHelp from '../../../components/youtube_card/YoutubeVideoHelp';
const videoIdTutoriales = ['9koZzkKjQrE'];


const Help = () => {
  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Compartamos Experiencias</h1>
              </div>
            </div>
            <div className="col-xl-12">
              <section className="box ">
                <header className="panel_header">
                  <h2 className="title float-left">Tutoriales</h2>
                </header>
                <div className="content-body">
                  <div className="row">
                    <div className="col-4">
                     
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-12">
                      <YoutubeVideoHelp videoId={videoIdTutoriales} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Help
