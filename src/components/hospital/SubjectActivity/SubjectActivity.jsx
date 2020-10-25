import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import { Collapse, Container } from 'reactstrap'
import moment from 'moment'
import { Modal, AddResponseSection, DescriptionComponent } from 'components'
import Response from './Response/Response'
import { auxParseName } from '_helpers'
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

const tempImg = [
  'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
]

const SubjectActivity = ({ activity, student }) => {
  const [loaders, setLoaders] = useState({
    responding: false,
    erasing: false,
  })
  const [colapse, setColapse] = useState(false)
  const [response, setResponse] = useState(null)
  const [modal, setModal] = useState(false)
  const [component, setComponent] = useState('')
  const [titleModal, setTitleModal] = useState('')

  const toggleModal = () => setModal(!modal)
  const toggleColapse = () => setColapse(!colapse)

  const toggleComponent = (component, title) => {
    setComponent(component)
    setTitleModal(title)
    toggleModal()
  }

  /* fetching data */
  const createResponseCourse = async (
    secction_response,
    message_response,
    files,
    student_response,
    images,
    setImagesLoadCharge,
    setFilesLoadCharge
  ) => {
    setLoaders((loader) => ({ ...loader, responding: true }))
    let header = 'Excelente!!'
    let message = 'Todo salió bien!! :)'
    let type = 'success'

    try {
      const newSecction = await fetch(
        `${config.apiEndPoint}/secctions/responses/create/`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message_response,
            secction_response,
            student_response,
          }),
        }
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })

      const promisesPictures = images.map((value) => {
        return addPicture(value, newSecction.code_response, setImagesLoadCharge)
      })

      const promisesFiles = files.map((value) => {
        return addFile(value, newSecction.code_response, setFilesLoadCharge)
      })

      await Promise.all(promisesPictures).then(
        (response) => (newSecction.images = [...response])
      )

      await Promise.all(promisesFiles).then(
        (response) => (newSecction.homework = [...response])
      )
      setResponse(newSecction)
    } catch (error) {
      console.log('Error: ', error.message)
      header = 'Upss..!!'
      message =
        'Algo salio mal, por favor intenta mas tarde o contacta con soporte'
      type = 'warning'
    }
    setTimeout(() => {
      setLoaders((loader) => ({ ...loader, responding: false }))
    }, 300)
    setTimeout(() => {
      toggleModal()
      swal(header, message, type)
    }, 500)
  }

  const addPicture = (img, codeSecction, setCounter) => {
    let formData = new FormData()
    formData.append('profile', img.file)

    return fetch(
      `https://api-upload-pictures.vercel.app/api/v1/media/database/${codeSecction}`,
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        setCounter((prev) => prev + 1)
        return response.json()
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  function addFile(file, response_secction, setCounter) {
    const formdata = new FormData()
    formdata.append('response_file', file)
    formdata.append('response_secction', response_secction)
    return fetch(`${config.apiEndPoint}/secctions/homework/create/`, {
      method: 'POST',
      body: formdata,
    })
      .then((response) => {
        if (response.ok) {
          setCounter((prev) => prev + 1)
          return response.json()
        }
        return null
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  function deleteResponse(id) {
    swal({
      title: '¿Estas Seguro?',
      text: 'Una vez borrada tu respuesta, no podrá recuperarse',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setLoaders((loader) => ({ ...loader, erasing: true }))
        fetch(`${config.apiEndPoint}/secctions/responses/delete/${id}`, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Error al eleminar la respuesta')
            }
            setLoaders((loader) => ({ ...loader, erasing: false }))
            setTimeout(() => {
              setResponse(null)
              swal('Excelente!!', 'Todo salió bien!! :)', 'success')
            }, 300)
          })
          .catch((error) => {
            setLoaders((loader) => ({ ...loader, erasing: false }))
            console.log(error)
            swal(
              'Upss!!',
              'Ocurrio un error al borrar tu entrega, contacta a soporte :)',
              'error'
            )
          })
          .finally(() => {})
      }
    })
  }
  /* close fetching data */

  /* aux function */
  const isResponse = (responses) => {
    responses.forEach((response) => {
      const { student_response } = response
      if (student_response.codeStudent == student.codeStudent) {
        setResponse(response)
        return
      }
      if (student_response == student.codeStudent) {
        setResponse(response)
        return
      }
    })
  }
  /* close aux function */

  useEffect(() => isResponse(activity.response), [])

  const { responding, erasing } = loaders

  const components = {
    AddResponseSection: (
      <AddResponseSection
        loader={responding}
        createResponseCourse={createResponseCourse}
        toggle={toggleModal}
        student_id={student.codeStudent}
        codeSecction={activity.codeSecction}
      />
    ),
  }

  return (
    <Card>
      <Modal
        title={titleModal}
        show={modal}
        backdrop="static"
        keyboard={false}
        toggle={toggleModal}
      >
        <SwitchComponent component={component} components={components} />
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
            <div className="col-12 mb-3">
              {activity.lynks.length > 0 && (
                <a
                  href={activity.lynks[0].url}
                  target="_blank"
                  className="btn btn-primary btn-sm rounded-lg"
                >
                  Link's
                </a>
              )}
              {activity.lynks.length <= 0 && (
                <div className="d-flex align-items-center">
                  <i style={{ fontSize: '1.3em' }} className="i-info mr-2 " />
                  <span>Tu profe no incluyó enlaces</span>
                </div>
              )}
            </div>

            <div className="col-12">
              {activity.resources.length > 0 && (
                <SupportMaterialCollapse
                  type={'Archivos'}
                  resources={activity.resources}
                ></SupportMaterialCollapse>
              )}
              {activity.resources.length <= 0 && (
                <div className="d-flex align-items-center">
                  <i style={{ fontSize: '1.3em' }} className="i-info mr-2 " />
                  <span>Tu profe no incluyó archivos</span>
                </div>
              )}
            </div>
          </div>
        </ResourceContainer>
        <ReponseContainer>
          <div className="row">
            <div className="col-12">
              {response && (
                <Response
                  deleteResponse={deleteResponse}
                  response={response}
                  loader={erasing}
                />
              )}
              {!response && (
                <div className="d-flex align-items-center">
                  <i style={{ fontSize: '1.3em' }} className="i-info mr-2 " />
                  <span>Aun no has hecho una entrega</span>
                  <button
                    onClick={() =>
                      toggleComponent(
                        'AddResponseSection',
                        'Responder Actividad'
                      )
                    }
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

export default SubjectActivity

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

const SwitchComponent = ({ component, components }) => {
  return components[component]
}
