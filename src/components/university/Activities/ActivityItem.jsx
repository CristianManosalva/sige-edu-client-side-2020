import React, { useState } from 'react'
import { Button, Collapse, Card, CardBody } from 'reactstrap'
import { Modal, ShowActivity } from 'components'
import { config } from '_config'
import Linkify from 'react-linkify'
import moment from 'moment'

const tempImg = [
  'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
]

const ActivityItem = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
    setIsOpen2(false)
  }
  const toggle2 = () => {
    setIsOpen2(!isOpen2)
    setIsOpen(false)
  }
  const [activity, setActivity] = useState(props.activity)
  const [backup] = useState(props.activity)

  const [modal, setModal] = useState(activity.codeSecction == 71)
  const toggleModal = () => setModal(!modal)

  const handleChange = (e) => {
    const { name, value } = e.target
    setActivity((activity) => ({ ...activity, [name]: value }))
  }

  const editActivity = () => {
    fetch(
      `${config.apiEndPoint}/secctions/secction/update/${activity.codeSecction}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(activity),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('data editada: ', data)
      })
      .catch((error) => console.log(error))
      .finally(() => {})
  }

  const goBack = () => {
    setActivity(backup)
  }

  const auxParseName = (url) => {
    try {
      return url.split('/').reverse()[0]
    } catch (error) {
      return 'archivo'
    }
  }
  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank">
      {text}
    </a>
  )
  return (
    <div className="col-xl-12">
      <Modal
        style={{ minWidth: '800px' }}
        title="Gestionar Actividad"
        show={modal}
        toggle={toggleModal}
      >
        <ShowActivity
          loader={null}
          createActivity={null}
          toggleModal={toggleModal}
          activity={activity}
          handleChange={handleChange}
          edit={editActivity}
          cancel={goBack}
          deleteActivity={props.deleteActivity}
        />
      </Modal>
      <section className="box profile-page">
        <div className="content-body">
          <div className="col-12">
            <div className="row uprofile">
              <div
                className="uprofile-image col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12"
                style={{ display: 'flex' }}
              >
                <img
                  alt=""
                  src={
                    activity.picture
                      ? activity.picture
                      : tempImg[Math.floor(Math.random() * 20)]
                  }
                  style={{ maxHeight: '100%', objectFit: 'cover' }}
                  className="img-fluid"
                />
              </div>
              <div className="uprofile-name col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12">
                <h3 className="uprofile-owner">
                  <a href="#!">{activity.nameSecction}</a>
                </h3>
                <button
                  onClick={toggleModal}
                  className="btn btn-primary btn-sm profile-btn"
                >
                  Ver
                </button>
                {/* <button className="btn btn-primary btn-sm profile-btn">
                  Cerrar Entregas
                </button> */}
                <div className="clearfix"></div>
                <p className="uprofile-title">
                  <i
                    className="i-clock mr-1"
                    style={{ fontSize: '1.2em', color: '#1eaedf' }}
                  />
                  Fecha de Creacion:{' '}
                  {moment(activity.uploadOnSecction).format('MMMM DD, hh:mm')}
                </p>
                <div className="clearfix"></div>
                <div className="post_content_container-content">
                  <Linkify componentDecorator={componentDecorator}>
                    {activity.descriptionSecction}
                  </Linkify>
                </div>
                {/* <p>{activity.descriptionSecction}</p> */}
                {/* Panel de expancion */}
                <Button
                  color="primary"
                  onClick={toggle}
                  style={{ marginBottom: '.5rem' }}
                  size="sm"
                >
                  Archivos
                </Button>
                <Button
                  color="primary"
                  onClick={toggle2}
                  style={{ marginBottom: '.5rem' }}
                  size="sm"
                >
                  Enlaces
                </Button>
                <Collapse isOpen={isOpen}>
                  <Card>
                    <CardBody>
                      <p
                        className="uprofile-list"
                        // style={{ position: 'absolute', bottom: '0', left: '15px' }}
                      >
                        {activity &&
                          activity.resources &&
                          activity.resources.map((value, key) => {
                            return (
                              <span key={key}>
                                <i className="i-doc"></i>{' '}
                                <a href={value.resource} target="_blank">
                                  {auxParseName(value.resource)}
                                </a>
                              </span>
                            )
                          })}
                        {/* <span>
                          <i className="i-doc"></i> taller.pdf
                        </span>
                        <span>
                          <i className="i-doc"></i> guia_de_apoyo.pdf
                        </span> */}
                      </p>
                    </CardBody>
                  </Card>
                </Collapse>
                <Collapse isOpen={isOpen2}>
                  <Card>
                    <CardBody>
                      <p
                        className="uprofile-list"
                        // style={{ position: 'absolute', bottom: '0', left: '15px' }}
                      >
                        {activity.lynks.map((value, key) => {
                          return (
                            <span key={key}>
                              <i className="i-link"></i>{' '}
                              <a href={value.url} target="_blank">
                                {value.url}
                              </a>
                            </span>
                          )
                        })}
                        {/* <span>
                          <i className="i-control-play"></i> historia del
                          renacimiento
                        </span>
                        <span>
                          <i className="i-control-play"></i> arte colonial
                        </span> */}
                      </p>
                    </CardBody>
                  </Card>
                </Collapse>
                {/* <div className="clearfix"></div> */}
                <p
                  className="uprofile-list"
                  style={{ marginTop: '.8rem', marginBottom: '0' }}
                >
                  <span>
                    <i className="i-user"></i>{' '}
                    {activity.responses && activity.responses.length}{' '}
                    Estudiantes han entregado
                  </span>
                  <span>
                    <i className="i-briefcase"></i> Fecha de Cierre: 2020-05-15
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ActivityItem
