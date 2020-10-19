import React, { useState, useRef, useCallback } from 'react'
import { Collapse, UncontrolledTooltip, Spinner } from 'reactstrap'
import ImageViewer from 'react-simple-image-viewer'
// import Gallery from 'react-grid-gallery'
import moment from 'moment'
import { deleteFetch, deleteImage } from '_api-urls'
import { DescriptionComponent } from 'components'
import {
  DeleteIcon,
  ImgContainer,
  Img,
  CarouselContainer,
  Container,
  DeleteButton,
  ActionsContainer,
} from './style'
import './styles-css.css'

const Response = ({ response, deleteResponse, loader }) => {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)
  const {
    homework,
    message_response,
    date_response,
    code_response,
    comment,
    images,
  } = response
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
          {images && <PictureViewer images={images} />}
          <UncontrolledTooltip placement="right" target="delete_response">
            Borrar
          </UncontrolledTooltip>

          <DescriptionComponent>{message_response}</DescriptionComponent>
          {homework && homework.length > 0 && (
            <p className="uprofile-list mt-2">
              <span>
                <i className="i-doc"></i>{' '}
                <a href={homework[0].response_file} target="_blank">
                  {auxParseName(homework[0].response_file)}
                </a>
              </span>
            </p>
          )}
        </div>
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

//Este tiene la libreria mas completa de PictureViewer

// const PictureViewer
//= ({ images }) => {
//   const parsePictures = images.map((value) => ({
//     src: value.url,
//     thumbnail: value.url,
//     thumbnailWidth: 100,
//     thumbnailHeight: 100,
//   }))
//   return (
//     <>
//       <Gallery
//         style={{ border: '2px solid red' }}
//         rowHeight={100}
//         images={parsePictures}
//       />
//     </>
//   )
// }

const PictureViewer = ({ images: inImages }) => {
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

/* 

 const onImageRemove = (value, key) => {
    const { url, options } = deleteImage(value.id)
    deleteFetch(url, options, setIsLoading, setError)
    const auxArray = images.slice()
    auxArray.splice(key, 1)
    setImages(auxArray)
  }

*/
