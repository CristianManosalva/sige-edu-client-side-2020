import React, { useState } from 'react'
import { Col, Row, Collapse, Container } from 'reactstrap'
import Linkify from 'react-linkify'
import moment from 'moment'
import { auxParseName } from '_helpers'
import './styles/activity-item.css'

const Activity = ({ activity }) => {
  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank">
      {text}
    </a>
  )
  const {
    codeSecction,
    nameSecction,
    descriptionSecction,
    uploadOnSecction,
    workspaceSecction,
    resources,
    lynks,
  } = activity
  return (
    <div className="activity_container">
      <Row>
        <Col xs={12}>
          <div className="activity_header_container">
            <h4 className="activity_header_container-name">
              <span className="">{nameSecction}</span>
            </h4>
            <div className="activity_header_container-date">
              <i
                className="i-clock mr-1"
                style={{ fontSize: '1.2em', color: '#1eaedf' }}
              ></i>
              {moment(uploadOnSecction).format('MMMM DD, hh:mm')}
            </div>
          </div>
        </Col>
        <Col xs={12}>
          <div className="acticity_content_container">
            {/* <div className="post_content_container-content"> */}
            <Linkify componentDecorator={componentDecorator}>
              {descriptionSecction}
            </Linkify>
            {/* </div> */}
          </div>
        </Col>
        <Col xs={12}>
          <div className="activity_support_material_container">
            <SupportMaterialCollapse
              type={'Archivos'}
              resources={resources}
            ></SupportMaterialCollapse>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Activity

const SupportMaterialCollapse = ({ resources, type }) => {
  const [isOpen, setIsOpen] = useState(false) //temporal, estado inical debe ser false
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <div
        style={{
          margin: '0',
          width: '100%',
          padding: '0 0',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #1eaedf',
          fontSize: '1em',
          cursor: 'pointer',
        }}
        onClick={toggle}
      >
        <div>
          <i
            className={
              'fa ' +
              (isOpen ? 'fa-folder-open-o' : 'fa-folder-o') +
              ' ml-1 mr-2'
            }
            style={{ fontSize: '1.2em', color: '#1eaedf' }}
          ></i>
          <span>{type}</span>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <Container>
          <p className="uprofile-list">
            {resources &&
              resources.map((value, key) => {
                return (
                  <span key={key}>
                    <i className="i-doc"></i>{' '}
                    <a href={value.resource} target="_blank">
                      {auxParseName(value.resource)}
                    </a>
                  </span>
                )
              })}
          </p>
        </Container>
      </Collapse>
    </div>
  )
}
