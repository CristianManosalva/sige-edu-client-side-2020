import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
// import { Button, Collapse, Card, CardBody } from 'reactstrap'
import { Collapse, Container } from 'reactstrap'
import moment from 'moment'
import { Modal, AddResponseSection, DescriptionComponent } from 'components'
import {
  Card,
  CropImage,
  Image,
  TitleContainer,
  TimeContainer,
  ContentContainer,
  HeaderContainer,
  ResourceContainer,
  ToggleContainer,
  ScoreContainer,
  Score,
  ScoreTitle,
  ReponseContainer,
} from './styles'
import { config } from '_config'
import { error } from 'jquery'

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
  const [loaders, setLoaders] = useState({
    responding: false,
  })
  const [colapse, setColapse] = useState(false)
  const [response, setResponse] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [modal, setModal] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
    setIsOpen2(false)
  }
  const toggle2 = () => {
    setIsOpen2(!isOpen2)
    setIsOpen(false)
  }
  const toggleColapse = () => setColapse(!colapse)
  const toggleModal = () => setModal(!modal)
  const [activity, setActivity] = useState(props.activity)
  const [backup] = useState(props.activity)

  // const [modal, setModal] = useState(activity.codeSecction == 71)
  // const toggleModal = () => setModal(!modal)

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

  /* fetching data */
  function createResponseCourse({
    codeSecction,
    description,
    files,
    student_id,
  }) {
    setLoaders((loader) => ({ ...loader, responding: true }))
    const formdatafile = new FormData()
    formdatafile.append('secctionResponse', codeSecction)
    formdatafile.append('messageResponse', description)
    formdatafile.append('response', files[0])
    formdatafile.append('studentResponse', student_id)
    fetch(`${config.apiEndPoint}/secctions/responsesecction/create/`, {
      method: 'POST',
      body: formdatafile,
    })
      .then((response) => {
        if (response.status != 201) {
          throw new error('Algo anda mal')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Data resource for create response: ', data)
        setResponse(data)
        setLoaders((loader) => ({ ...loader, responding: false }))
        setTimeout(() => {
          setModal(!modal)
          swal('Excelente!!', 'Todo salió bien!! :)', 'success')
        }, 300)
      })
      .catch((error) => {
        console.log('El error: ', error)
        setLoaders((loader) => ({ ...loader, responding: false }))
        swal('UPSS..!!', 'Algo Sucedió, Intenta mas tarde!! :)', 'warning')
      })
      .finally(() => {})
  }
  /* close fetching data */

  /* aux function */
  const isResponse = (responses) => {
    responses.forEach((response) => {
      const { studentResponse } = response
      if (studentResponse.codeStudent == props.student.codeStudent) {
        setResponse(response)
        return
      }
      if (studentResponse == props.student.codeStudent) {
        setResponse(response)
        return
      }
    })
  }
  /* close aux function */

  useEffect(() => isResponse(activity.responses), [])

  const { responding } = loaders

  return (
    <Card>
      <Modal
        title="Responder Actividad"
        show={modal}
        backdrop="static"
        keyboard={false}
        toggle={toggleModal}
      >
        <AddResponseSection
          loader={responding}
          createResponseCourse={createResponseCourse}
          toggle={toggleModal}
          student_id={props.student.codeStudent}
          codeSecction={activity.codeSecction}
        />
      </Modal>
      <HeaderContainer>
        <div className="row">
          <CropImage className="col-12 col-md-3">
            <Image src={tempImg[1]} />
          </CropImage>
          <TitleContainer className="col-12 col-md-7">
            <h4>{activity.nameSecction}</h4>
            <TimeContainer>
              <div className="d-flex align-items-center">
                <i
                  className="i-clock mr-1"
                  style={{ fontSize: '1.2em', color: '#1eaedf' }}
                />
                Fecha de asignación{' '}
                {moment(activity.uploadOnSecction).format('MMMM DD')}
              </div>
              {false && (
                <div
                  className="d-flex align-items-center mt-1"
                  style={{ color: 'green' }}
                >
                  <i
                    className="i-clock mr-1"
                    style={{ fontSize: '1.2em', color: 'green' }}
                  />
                  La actividad cierra en{' '}
                  {/* {moment(activity.uploadOnSecction, 'YYYY-MM-DD').fromNow()} */}
                  {moment('2020-07-23', 'YYYY-MM-DD').fromNow()}
                  {/* {moment(activity.uploadOnSecction).format('MMMM DD, hh:mm')} */}
                </div>
              )}
            </TimeContainer>
          </TitleContainer>
          <ScoreContainer className="col-12 col-md-2">
            <Score>
              {!response && (
                <i style={{ color: 'rgb(118, 118, 118)' }} className="i-info" />
              )}
              {response && (
                <i style={{ color: 'rgb(118, 118, 118)' }} className="i-info" />
              )}
            </Score>
            <ScoreTitle>
              {!response && (
                <span style={{ color: 'rgb(118, 118, 118)' }}>
                  Sin entregar
                </span>
              )}
              {response && (
                <span style={{ color: 'rgb(118, 118, 118)' }}>
                  Tu profe esta calificando
                </span>
              )}
              {/* Tu nota <i className="i-star " /> */}
            </ScoreTitle>
          </ScoreContainer>
        </div>
      </HeaderContainer>
      <Collapse isOpen={colapse} className="mt-4">
        <ContentContainer>
          <div className="row">
            <div className="col-12">
              <DescriptionComponent>
                {activity.descriptionSecction}
              </DescriptionComponent>
            </div>
          </div>
        </ContentContainer>
        <ResourceContainer>
          <div className="row">
            {activity.lynks.length > 0 && (
              <div className="col-12 ">
                <a
                  href={activity.lynks[0].url}
                  target="_blank"
                  className="btn btn-primary btn-sm rounded-lg"
                >
                  Link's
                </a>
              </div>
            )}

            {activity.resources.length > 0 && (
              <div className="col-12">
                <SupportMaterialCollapse
                  type={'Archivos'}
                  resources={activity.resources}
                ></SupportMaterialCollapse>
              </div>
            )}
          </div>
        </ResourceContainer>
        <ReponseContainer>
          <div className="row">
            <div className="col-12">
              {response && <ResponseActivity response={response} />}
              {!response && (
                <div className="d-flex align-items-center">
                  <i style={{ fontSize: '1.3em' }} className="i-info mr-2 " />
                  <span>Aun no has hecho una entrega</span>
                  <button
                    onClick={toggleModal}
                    className="btn btn-primary ml-2 btn-sm rounded-lg pt-0 pb-0"
                  >
                    Hacer entrega
                  </button>
                </div>
              )}
            </div>
          </div>
        </ReponseContainer>
      </Collapse>
      <ToggleContainer open={colapse}>
        <div className="row">
          <div
            className="col-12 d-flex justify-content-between"
            onClick={toggleColapse}
            style={{ cursor: 'pointer' }}
          >
            <span>{colapse ? 'Ocular ' : 'Ver '} contenido</span>
            <span>
              <i
                style={{ fontSize: '1.4em' }}
                className={'fa fa-angle-' + (colapse ? 'up' : 'down')}
              />
            </span>
          </div>
        </div>
      </ToggleContainer>
    </Card>
  )
}

export default ActivityItem

const ResponseActivity = (props) => {
  const [isOpen, setIsOpen] = useState(false) //temporal, estado inical debe ser false
  const toggle = () => setIsOpen(!isOpen)
  const {
    response,
    messageResponse,
    dateResponse,
    // studentResponse,
  } = props.response
  // const { codeStudent, user } = studentResponse
  /* inicio aux function */
  const auxParseName = (url) => {
    try {
      return url.split('/').reverse()[0]
    } catch (error) {
      return 'archivo'
    }
  }
  /* fin aux function  */

  return (
    <div className="mb-3">
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
          <span>Aquí esta tu entrega</span>
        </div>
        <div
          className="mr-1"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <i
            className="i-clock mr-1"
            style={{ fontSize: '1.2em', color: '#1eaedf' }}
          />
          <span>{moment(dateResponse).format('MMMM DD, hh:mm')}</span>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="response_content_container">
          <DescriptionComponent>{messageResponse}</DescriptionComponent>
          {response && (
            <p className="uprofile-list mt-2">
              <span>
                <i className="i-doc"></i>{' '}
                <a href={response} target="_blank">
                  {auxParseName(response)}
                </a>
              </span>
            </p>
          )}
        </div>
      </Collapse>
    </div>
  )
}

const SupportMaterialCollapse = ({ resources, type }) => {
  const [isOpen, setIsOpen] = useState(false) //temporal, estado inical debe ser false
  const toggle = () => setIsOpen(!isOpen)
  /* inicio aux function */
  const auxParseName = (url) => {
    try {
      return url.split('/').reverse()[0]
    } catch (error) {
      return 'archivo'
    }
  }
  /* fin aux function  */
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
        <Container fluid>
          <p className="uprofile-list">
            {resources.map((value, key) => {
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
