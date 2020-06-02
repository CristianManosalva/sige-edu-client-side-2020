import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import './styles/styles.css'
import Avatar from '@material-ui/core/Avatar'
import Linkify from 'react-linkify'

const Post = ({ post }) => {
  const { user, dateCommunity, descriptionCommunity } = post
  const { firstNameUser, lastNameUser } = user
  // const description =
  // 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse quod perspiciatis, assumenda illo dolorem! Architecto, provident iure, vero fuga autem tempore laudantium, dignissimos distinctio aspernatur quaerat blanditiis laborum numquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Error esse quod perspiciatis, assumenda illo dolorem! Architecto, provident iure, vero fuga autem tempore laudantium, dignissimos distinctio aspernatur quaerat blanditiis laborum numquam?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Error esse quod perspiciatis, assumenda illo dolorem! Architecto, provident iure, vero fuga autem tempore laudantium, dignissimos distinctio aspernatur quaerat blanditiis laborum numquam?\n\nhttps://www.hackerrank.com/'

  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank">
      {text}
    </a>
  )

  if (!user) {
    return null
  }

  return (
    <div>
      <div className="post_container">
        <Row>
          <Col xs={12}>
            <div className="post_header_container">
              <Avatar style={{ display: 'inline-flex' }}>
                {firstNameUser.length > 0 ? firstNameUser[0] : 'U'}
              </Avatar>
              <div className="post_container_name_container  ml-3">
                <span className="post_container_header-name">
                  {firstNameUser + ' ' + lastNameUser}
                </span>
                <span className="post_container_header-date">
                  {dateCommunity}
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className="post_content_container">
              <div className="post_content_container-content">
                <Linkify componentDecorator={componentDecorator}>
                  {descriptionCommunity}
                </Linkify>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Post
