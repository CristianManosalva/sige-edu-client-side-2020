import React, { useState, useEffect } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import './styles/create-post.css'
import { config } from '_config'
import { Spinner, Row, Col, Container, Button } from 'reactstrap'

const CreateHotRoute = ({ toggle, creating, makePost, loader }) => {
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

export default CreateHotRoute
/* <div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-12">
            <label htmlFor="start_id">Escribe todo lo que necesites</label>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={8}
              placeholder="Minimum 3 rows"
              className="description-text-aria"
            />
          </div>
        </div>
        <div
          className="col-12"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {creating && <Spinner className="mr-2" color="primary" />}
          {!creating && (
            <button type="submit" className="btn btn-primary text-center">
              Compartir
            </button>
          )}
          {!creating && (
            <span onClick={toggle} className="btn btn-danger text-center">
              Cancelar
            </span>
          )}
        </div>
      </form>
    </div> */
