import React, { useState, useRef, useCallback } from 'react'
import { Collapse, UncontrolledTooltip, Spinner } from 'reactstrap'
import ImageViewer from 'react-simple-image-viewer'
import moment from 'moment'
import { deleteFetch, deleteImage, addPictures } from '_api-urls'
import { auxParseName } from '_helpers'
import { DescriptionComponent, Modal, AddPictures } from 'components'
import {
  DeleteIcon,
  ImgContainer,
  Img,
  CarouselContainer,
  Container,
  DeleteButton,
  ActionsContainer,
  SquareAdd,
} from './style'
import './styles-css.css'

const Response = ({ response: incomeResponse, deleteResponse, loader }) => {
  const [titleModal, setTitleModal] = useState('')
  const [isOpen, setIsOpen] = useState(true)
  const [modal, setModal] = useState(false)
  const [response, setResponse] = useState(incomeResponse)
  const [component, setComponent] = useState('')
  const [loaderIn, setLoader] = useState(false)

  const {
    homework,
    message_response,
    date_response,
    code_response,
    comment,
    images,
  } = response

  const toggleModal = () => setModal(!modal)
  const toggleComponent = (component, title) => {
    setComponent(component)
    setTitleModal(title)
    toggleModal()
  }
  const toggle = () => setIsOpen(!isOpen)

  const addPicture = async (images, setCharge) => {
    setLoader(true)
    try {
      const pictures = await addPictures(images, code_response, setCharge)
      console.log('Response: ', pictures)
      const tempResponse = response
      tempResponse.images = [...tempResponse.images, ...pictures]
      setResponse([])
      setResponse(tempResponse)
    } catch (error) {
      console.log('error: ', error)
    }
    setTimeout(() => {
      setLoader(false)
    }, 500)
    setTimeout(() => {
      toggleModal()
    }, 700)
  }

  const components = {
    AddPictures: <AddPictures loader={loaderIn} addPicture={addPicture} />,
  }

  return (
    <div className="mb-3">
      <Modal
        title={titleModal}
        show={modal}
        backdrop="static"
        keyboard={false}
        toggle={toggleModal}
      >
        <SwitchComponent component={component} components={components} />
      </Modal>
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
          <span>{moment(date_response).format('MMMM DD, hh:mm')}</span>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="response_content_container">
          <ActionsContainer>
            <DeleteIcon
              onClick={() => deleteResponse(code_response)}
              className="btn btn-danger btn-sm"
              id="delete_response"
              loader={loader}
              disabled={loader}
            >
              {loader && <Spinner color="ligth" size="sm" />}
              {!loader && (
                <i className="fa fa-trash-o" style={{ fontSize: '18px' }} />
              )}
            </DeleteIcon>
          </ActionsContainer>
          <UncontrolledTooltip placement="right" target="delete_response">
            Borrar
          </UncontrolledTooltip>

          <DescriptionComponent>{message_response}</DescriptionComponent>
          {homework && homework.length > 0 && (
            <p className="uprofile-list mt-2">
              {homework.map((value, key) => (
                <span key={key}>
                  <i className="i-doc"></i>{' '}
                  <a href={value.response_file} target="_blank">
                    {auxParseName(value.response_file)}
                  </a>
                </span>
              ))}
            </p>
          )}
        </div>
        {images && (
          <PictureViewer
            images={images}
            allowAdd={true}
            setModal={() => toggleComponent('AddPictures', 'Añade imagenes')}
          />
        )}
      </Collapse>

      {comment && (
        <div className="d-flex align-items-center mt-4">
          <i style={{ fontSize: '1.3em' }} className="i-info mr-2 " />
          <span>Mensaje de tu profe</span>
        </div>
      )}
      {comment && (
        <div className="message-teacher-contianer ml-3 mt-1">
          <DescriptionComponent>{comment.comment}</DescriptionComponent>
        </div>
      )}
    </div>
  )
}

export default Response

const PictureViewer = ({ images: inImages, allowAdd, setModal }) => {
  const refContainer = useRef()
  const [images, setImages] = useState(inImages)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const imagesForViewer = images.map((value) => value.url)

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  const onImageRemove = async (value, key) => {
    const { url, options } = deleteImage(value.id)
    deleteFetch(url, options, setIsLoading, setError)
    const auxArray = images.slice()
    auxArray.splice(key, 1)
    setImages(auxArray)
  }

  return (
    <Container>
      {images && images.length > 0 && (
        <CarouselContainer ref={refContainer}>
          {/* {error && error} */}
          {/* {isLoading && 'Borrando'} */}
          {images.map((image, key) => (
            <ImgContainer key={key} onClick={() => openImageViewer(key)}>
              <Img src={image.url} alt="" width="100" />
              <DeleteButton
                onClick={(e) => {
                  e.stopPropagation()
                  onImageRemove(image, key)
                }}
              >
                x
              </DeleteButton>
            </ImgContainer>
          ))}
          {allowAdd && (
            <SquareAdd onClick={() => setModal(true)}>
              <i className="fa fa-plus" />
            </SquareAdd>
          )}
        </CarouselContainer>
      )}

      {isViewerOpen && (
        <ImageViewer
          style={{ zIndex: 9000 }}
          src={imagesForViewer}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}
        />
      )}
    </Container>
  )
}

const SwitchComponent = ({ component, components }) => {
  return components[component]
}
