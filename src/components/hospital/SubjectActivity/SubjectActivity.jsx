import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
import { Collapse, Container } from 'reactstrap'
import moment from 'moment'
import { Modal, AddResponseSection, DescriptionComponent } from 'components'
import Response from './Response/Response'
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
// import { error } from 'jquery'

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
    erasing: false,
  })
  const [colapse, setColapse] = useState(false)
  const [response, setResponse] = useState(null)
  const [modal, setModal] = useState(props.activity.codeSecction == 1804)
  const [activity, setActivity] = useState(props.activity)
  const [backup] = useState(props.activity)

  const toggleModal = () => setModal(!modal)
  const toggleColapse = () => setColapse(!colapse)

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
  function oldCreateResponseCourse({
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
          throw new Error('Algo anda mal')
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

  function createResponseCourse(
    secction_response,
    message_response,
    files,
    student_response,
    images
  ) {
    console.log('Mensaje: ', message_response)
    setLoaders((loader) => ({ ...loader, responding: true }))
    fetch(`${config.apiEndPoint}/secctions/responses/create/`, {
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
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta')
        }
        return response.json()
      })
      .then(async (newSecction) => {
        /* bloque de imagenes */
        let newImages = []
        for (let i = 0; i < images.length; i++) {
          let picture = await addPicture(images[i], newSecction.code_response)
          console.log('picture: ', picture)
          if (picture) {
            newImages.push(picture)
          }
        }
        newSecction.images = [...newImages]
        /* fin bloque de imagenes */

        let fileDone = true
        console.log('creating files')
        if (files.length > 0) {
          let homework = await addFile(files[0], newSecction.code_response)
          console.log('after done files')
          if (!homework) {
            fileDone = false
          } else {
            newSecction.homework = [homework]
          }
        }
        console.log('activity done', newSecction)
        setResponse(newSecction)
        setLoaders((loader) => ({ ...loader, responding: false }))
        setTimeout(() => {
          toggleModal()
          if (fileDone) {
            swal('Excelente!!', 'Todo salió bien!! :)', 'success')
          } else {
            swal(
              'Upss..!!',
              'Tu actividad se creo, pero no fue posible agregar tu archivo :(',
              'warning'
            )
          }
        }, 300)
      })
      .catch((error) => {
        console.log('El error: ', error)
        setLoaders((loader) => ({ ...loader, responding: false }))
        swal(
          'Upss..!!',
          'Algo salio mal, intenta mas tarde o contacta a soporte :(',
          'warning'
        )
      })
      .finally(() => {})
  }

  const addPicture = async (img, codeSecction) => {
    let formData = new FormData()
    formData.append('profile', img.file)

    let url = await fetch(
      `https://api-upload-pictures.vercel.app/api/v1/media/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        return null
      })
      .catch((error) => {
        console.log(error)
        return null
      })

    return fetch(`${config.apiEndPoint}/images/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url.data,
        name: 'generic_name',
        response: codeSecction,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        return null
      })
      .catch((error) => {
        console.log(error)
        return null
      })
  }

  function addFile(file, response_secction) {
    const formdata = new FormData()
    formdata.append('response_file', file)
    formdata.append('response_secction', response_secction)
    return fetch(`${config.apiEndPoint}/secctions/homework/create/`, {
      method: 'POST',
      body: formdata,
    })
      .then((response) => {
        if (response.ok) {
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
      if (student_response.codeStudent == props.student.codeStudent) {
        setResponse(response)
        return
      }
      if (student_response == props.student.codeStudent) {
        setResponse(response)
        return
      }
    })
  }
  /* close aux function */

  useEffect(() => isResponse(activity.response), [])

  const { responding, erasing } = loaders

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

// const ImgContainer = styled.div`
//   display: block;
//   max-height: 100px;
//   height: 100px;
//   width: 100px;
//   min-width: 100px;
//   position: relative;
//   margin-right: 4px;
//   position: relative;
// `
// const Img = styled.img`
//   object-fit: cover;
//   height: 100%;
//   width: 100%;
//   object-position: center;
//   max-width: 100%;
// `
/* 
<ImgContainer key={key}>
          <Img src={image.dataURL} alt="" width="100" />
          <DeleteButton onClick={() => onImageRemove(key)}>x</DeleteButton>
        </ImgContainer>
 */

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
