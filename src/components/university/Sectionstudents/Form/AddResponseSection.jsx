import React, { useState } from 'react'
import { Spinner, Row, Col, Container, Button, Label, Input } from 'reactstrap'
import Dropzone from 'react-dropzone'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import swal from 'sweetalert'
import styled from 'styled-components'

const ReponseDescription = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  font-size: 13px;
  line-height: normal;
`

const AddResponseSection = ({
  createResponseCourse,
  loader,
  student_id,
  codeSecction,
}) => {
  const [inputs, setInputs] = useState({
    description: '',
    files: [],
  })

  const { description, files } = inputs
  const create = () => {
    if (!description) {
      swal('Algo nos falta!!', 'Debes escribir tu respuesta!!', 'error')
    } else if (inputs.files.length <= 0) {
      swal(
        '¿Sin Archivo?',
        'Vas a enviar tu respuesta sin ningún archivo. \n',
        'info'
      )
    } else {
      createResponseCourse(codeSecction, description, files, student_id)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }

  const onDrop = (files) => {
    setInputs((inputs) => ({ ...inputs, files: files }))
  }

  return (
    <Container fluid={true} className="add_activity_main">
      <Row>
        <Col xs={12} className="form-group">
          <Label for="name" style={{ color: '#000000' }}>
            Respuesta a la actividad
            <ReponseDescription className="mt-1">
              Escribe todo lo que quieras, has descripciones detalladas, utiliza
              salto de linea(enter), incluso pega enlaces.
            </ReponseDescription>
          </Label>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={8}
            rowsMax={24}
            name="description"
            placeholder="Escribe lo que necesites contarle a tu profe..."
            className="description_container-text-aria"
            onChange={handleChange}
          />
        </Col>
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
              style={{ minHeight: '0' }}
            >
              <p>
                Arrastra hasta aqui el archivo que deseas agregar o{' '}
                <strong style={{ color: '#1EAEDF' }}>
                  has click aquí para seleccionarlo
                </strong>
              </p>
            </Dropzone>
          </div>
          {inputs.files.length > 0 && (
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
          )}
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
          >
            {loader ? (
              <Spinner className="mr-2" size="sm" color="light" />
            ) : (
              <i className="fa fa-save mr-3"></i>
            )}
            Guardar Respuesta
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default AddResponseSection
