import React, { useState } from 'react'
import { Spinner, Row, Col, Container, Button } from 'reactstrap'
import { ImageUploader } from 'components'

const AddPictures = ({ addPicture, loader }) => {
  const [imagesLoadCharge, setImagesLoadCharge] = useState(0)
  const [images, setImages] = useState([])

  const create = () => {
    addPicture(images, setImagesLoadCharge)
  }

  return (
    <Container fluid={true} className="add_activity_main">
      <Row>
        <Col xs={12} className="form-group">
          <ImageUploader
            images={images}
            setImages={setImages}
            loadIndex={imagesLoadCharge}
            loader={loader}
          />
        </Col>
        <Col xs={12}>
          <Button
            style={{
              display: 'block',
              width: '100%',
              backgroundColor: '#1EAEDF',
            }}
            color="primary"
            size="sm"
            onClick={create}
            disabled={loader || images.length == 0}
          >
            {loader ? (
              <Spinner className="mr-2" size="sm" color="light" />
            ) : (
              <i className="fa fa-save mr-3"></i>
            )}
            Subir imagenes
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default AddPictures
