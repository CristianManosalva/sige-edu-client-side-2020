import React, { useRef } from 'react'
import ImageUploading from 'react-images-uploading'
import {
  ImgContainer,
  Img,
  CarouselContainer,
  Container,
  SquareAdd,
  DeleteButton,
  AddPictureButton,
  Icon,
  TextButton,
} from './style.js'

const ImageUploader = ({ images, setImages }) => {
  const refContainer = useRef()
  const onClickRight = () => {
    refContainer.current.scrollLeft = refContainer.current.scrollWidth
  }
  const maxNumber = 69
  const onChange = (imageList) => {
    setImages(imageList)
    onClickRight()
    setImages(imageList)
  }

  return (
    <>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({ imageList, onImageUpload, onImageRemoveAll, onImageRemove }) => (
          <Container>
            {imageList.length > 0 && (
              <CarouselContainer ref={refContainer}>
                {imageList.map((image, key) => (
                  <ImgContainer key={key}>
                    <Img src={image.dataURL} alt="" width="100" />
                    <DeleteButton onClick={() => onImageRemove(key)}>
                      x
                    </DeleteButton>
                  </ImgContainer>
                ))}
                {imageList.length > 0 && (
                  <SquareAdd onClick={onImageUpload}>
                    <i className="fa fa-plus" />
                  </SquareAdd>
                )}
              </CarouselContainer>
            )}

            {imageList.length > 0 && (
              <AddPictureButton onClick={onImageRemoveAll}>
                <Icon color={'red'} className="fa fa-trash-o" />
                <TextButton>Borrar todas las imagenes</TextButton>
              </AddPictureButton>
            )}
            {imageList.length == 0 && (
              <AddPictureButton onClick={onImageUpload}>
                <Icon color={'rgb(30, 174, 223)'} className="fa fa-picture-o" />
                <TextButton>Subir Foto</TextButton>
              </AddPictureButton>
            )}
          </Container>
        )}
      </ImageUploading>
    </>
  )
}

export default ImageUploader
