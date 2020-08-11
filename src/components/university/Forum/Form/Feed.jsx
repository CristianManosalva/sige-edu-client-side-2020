import React, { useState } from 'react'
import {
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
} from 'reactstrap'
import Avatar from '@material-ui/core/Avatar'
import Linkify from 'react-linkify'
import moment from 'moment'
import { config } from '_config'
import { Modal, EditPost } from 'components'
import useUserPhoto from 'hooks/useUserPhoto'
// import './styles/styles.css'

const Feed = (props) => {
  const [post, setPost] = useState(props.post)
  const { user, date_feed, description_feed, code_feed } = post
  const { firstNameUser, lastNameUser, documentIdUser, profile_picture } = user
  const [modal, setModal] = useState(false)
  const [loader, setLoader] = useState(false)
  const toggle = () => setModal(!modal)

  const editPost = (description_feed) => {
    setLoader(true)
    const newPost = {
      description_feed,
      title_feed: 'Generic title',
    }
    console.log('Feed ', newPost)
    fetch(`${config.apiEndPoint}/forum/update/${code_feed}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setLoader(false)
          data.user = user
          // data.date_feed = moment().format('YYYY-MM-DD')
          setPost((prePost) => ({
            ...prePost,
            description_feed: data.description_feed,
          }))
          toggle()
        }, 100)
      })
      .catch((error) => {
        setLoader(false)
        console.log('error: ', error)
      })
      .finally(() => {})
  }

  // const deletePost = (id) => {
  //   swal("Good job", "You deleted post", "success")
  // }
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
      <Modal show={modal} toggle={toggle} title="Editar publicación">
        <EditPost
          descriptionIn={description_feed}
          loader={loader}
          editPost={editPost}
          toggle={toggle}
        />
      </Modal>
      <div className="post_container">
        <Row>
          <Col xs={12}>
            <div className="post_header_container">
              <Avatar style={{ display: 'inline-flex' }}>
                <img src={profile_picture || 'https://res.cloudinary.com/sigeedu/image/upload/v1595432004/userphoto_lxksb1.png'} />
              </Avatar>
              <div className="post_container_name_container  ml-3">
                <span className="post_container_header-name">
                  {firstNameUser + ' ' + lastNameUser}
                </span>
                <div
                  className="post_container_header-date_container"
                  id={'tooltip-' + code_feed + documentIdUser}
                >
                  <i className="i-clock mr-1"></i>
                  <span className="post_container_header-date">
                    {moment(date_feed).fromNow()}
                  </span>
                  <UncontrolledTooltip
                    placement="bottom"
                    target={'tooltip-' + code_feed + documentIdUser}
                  >
                    {moment(date_feed, 'YYYY-MM-DD').format('YYYY-MM-DD')}
                  </UncontrolledTooltip>
                </div>
              </div>
              {props.hostUser.documentIdUser === documentIdUser && (
                <div className="post_header_container-settings">
                  <UncontrolledDropdown className="post_header_container_settings-toggle">
                    <DropdownToggle caret>
                      <i className="i-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={toggle}>Editar</DropdownItem>
                      <DropdownItem onClick={() => props.deletePost(code_feed)}>
                        Eliminar
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              )}
            </div>
          </Col>
          <Col xs={12}>
            <div className="post_content_container">
              <div className="post_content_container-content">
                <Linkify componentDecorator={componentDecorator}>
                  {description_feed}
                </Linkify>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Feed
