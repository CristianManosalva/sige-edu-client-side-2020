import React, { useState, useEffect } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { Spinner, Row, Col, Container, Button, Label, Input, Form, FormGroup, FormText } from 'reactstrap'
import Dropzone from 'react-dropzone'
import swal from 'sweetalert';
import { Divcardactivity } from '../stylesAddResponseSection'
import { config } from '_config'

// secctionResponse = secctioncode,
// messageResponse = messageResponse,
// response = files,
// studentResponse = codeestudent,

const AddResponseSection = ({ toggle, creating, createResponseCourse, loader, student_id, codeSecction }) => {
  const [inputs, setInputs] = useState({
    description: '',
    files: [],
  })
  const [loaders, setLoaders] = useState({
    postDescription: false,
  })
  const { description, files, enlace } = inputs
  const id_student = student_id
  const codeSecctions = codeSecction

  const create = () => {
    if (!description) {
      swal("Algo nos falta!!", "Debes escribir tu respuesta!!", "error");
    } else if (inputs.files.length <= 0) {
      swal("¿Sin Archivo?", "Vas a enviar tu respuesta sin ningún archivo. \n ¿quieres continuar?", "warning");
    } else {
      createResponseCourse({
        codeSecctions,
        description,
        files,
        student_id,
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }

  const onDrop = (files) => {
    setInputs((inputs) => ({ ...inputs, files: files }))
    // files.forEach((file) => {
    //   const formdata = new FormData()
    //   formdata.append('resource', file)
    //   formdata.append('secctionResource', 4)
    //   fetch(`${config.apiOficial}/secctions/resource/create/`, {
    //     method: 'POST',
    //     // headers: {
    //     //   // Accept: 'application/json',
    //     //   // 'Content-Type': 'multipart/form-data',
    //     // },
    //     body: formdata,
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // addLink(enlace, data.codeSecction)
    //       console.log('Response por create: ', data)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //       alert('Error al subir el archivo, contacta el soporte de SIGE')
    //     })
    //     .finally(() => {})
    // })
  }

  useEffect(() => {}, [])

  return (
    <Container fluid={true} className="add_activity_main">
      <Row>
        {/* <Col xs={12} className="form-group">
          <Label for="name">Nombre de la Actvidad</Label>
          <Input type="text" name="name" id="name" onChange={handleChange} />
        </Col> */}
        <Col xs={12} className="form-group">
          <Label for="name" style={{ color: '#000000' }}>Respuesta a la actividad</Label>
          <Input 
            type="textarea" 
            name="description" 
            placeholder="Tu respuesta..." 
            aria-label="minimum height"
            onChange={handleChange} />
            {/* <TextareaAutosize
              aria-label="minimum height"
              rowsMin={8}
              rowsMax={24}
              name="description"
              placeholder=""
              className="add_activity_description_container-text-aria"
              onChange={handleChange}
            /> */}
        </Col>
        <Col xs={12} className="form-group">
          <Label for="name" style={{ color: '#000000' }}>Archivo</Label>
          <div className="dropzone" style={{ cursor: 'pointer', color: '#000000' }}>
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
        {/* <Col xs={12} className="form-group">
          <Label for="enlace" style={{ color: '#000000' }}>Enlace destacado (opcional)</Label>
          <Input
            type="text"
            name="enlace"
            id="enlace"
            onChange={handleChange}
          />
        </Col> */}
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
