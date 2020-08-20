import React, { useState, useEffect } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { Spinner, Row, Col, Container, Button } from 'reactstrap'

const CreateFeed = ({ toggle, creating, makePost, loader }) => {
  const [inputs, setInputs] = useState({
    description: '',
  })
  const [loaders, setLoaders] = useState({
    postDescription: false,
  })
  const { description } = inputs

  const share = () => {
    // if(description.length > 0) {
    if (description) {
      makePost(description)
    } else {
      alert('Por favor, escribe una descripcion')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }

  useEffect(() => {}, [])

  return (
    <Container fluid={true}>
      <Row>
        <Col xs={12}>
          <p>
            Escribe todo lo que quieras, has descripciones detalladas, utiliza
            salto de linea(enter), incluso pega enlaces.
          </p>
        </Col>
        <Col xs={12}>
          <div className="description_container">
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={8}
              rowsMax={24}
              name="description"
              placeholder="¿Que quieres compartir?"
              className="description_container-text-aria"
              onChange={handleChange}
            />
          </div>
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
            onClick={share}
          >
            {loader ? (
              <Spinner className="mr-2" size="sm" color="light" />
            ) : (
              <i className="fa fa-bullhorn mr-3"></i>
            )}
            Compartir
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateFeed