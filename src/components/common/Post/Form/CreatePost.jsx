import React, { useState, useEffect } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Dropzone from 'react-dropzone'
import './styles/create-post.css'
import swal from 'sweetalert'
import { config } from '_config'
import { Spinner, Row, Col, Container, Button, Label } from 'reactstrap'

const CreateHotRoute = ({ toggle, creating, makePost, loader }) => {
  const [checked, setChecked] = useState(false)
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
      swal('Algo nos falta!!', 'Debes escribir Lo que deseas Compartir!!', 'error')
      
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }
  const onDrop = (files) => {
    setInputs((inputs) => ({ ...inputs, files: files }))
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
              rowsMax={20}
              style={{ minHeight:'90px', maxHeight:'300px', height:'90px' }}
              name="description"
              placeholder="¿Que quieres compartir?"
              className="description_container-text-aria"
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col xs={12} className="special_input_check_box">
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                name="checked"
                color="primary"
              />
            }
            label="No agregar archivo"
          />
        </Col>
        {!checked && (
          <Col xs={12} className="form-group">
            <Label for="name" style={{ color: '#000000' }}>
              Archivo
            </Label>
            <div
              className="dropzone"
              style={{ cursor: 'pointer', color: '#000000' }}
            >
              <Dropzone
                onDrop={onDrop}
                className="droparea"
                style={{ minHeight: '0'}}
                
              >
                <p>
                  Arrastra hasta aqui el archivo que deseas agregar o{' '}
                  <strong style={{ color: '#1EAEDF' }}>
                    has click aquí para seleccionarlo
                  </strong>
                </p>
              </Dropzone>
            </div>
            {/* {inputs.files.length > 0 && (
              <aside style={{ color: '#000000' }}>
                <h6>Archivo</h6>
                <ul>
                  {inputs.files.map((f) => (
                    <li key={f.name}>
                      {f.name} - {f.size} bytes
                    </li>
                  ))}
                </ul>
              </aside>
            )} */}
          </Col>
        )}
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
