import React, { useState, useCallback, useRef } from 'react'
import ImageViewer from 'react-simple-image-viewer'
import { ImgContainer, Img, CarouselContainer, Container } from './styles'

const PictureViewer = ({ images }) => {
  const refContainer = useRef()
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

  return (
    <Container>
      {images && images.length > 0 && (
        <CarouselContainer ref={refContainer}>
          {images.map((image, key) => (
            <ImgContainer key={key} onClick={() => openImageViewer(key)}>
              <Img src={image.url} alt="" width="100" />
            </ImgContainer>
          ))}
        </CarouselContainer>
      )}

      {isViewerOpen && (
        <ImageViewer
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

export default PictureViewer
