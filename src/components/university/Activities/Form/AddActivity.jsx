import React, { useState, useEffect } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { Spinner, Row, Col, Container, Button, Label, Input } from 'reactstrap'
import Dropzone from 'react-dropzone'
import '../styles/create-activity.css'
import { config } from '_config'

const AddActivity = ({ toggle, creating, createActivity, loader }) => {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    files: [],
    enlace: '',
  })
  const [loaders, setLoaders] = useState({
    postDescription: false,
  })
  const { description, name, files, enlace } = inputs

  const create = () => {
    if (!description) {
      alert('Por favor, escribe una descripcion')
    } else if (!name) {
      alert('Por favor, dale un nombre a la actividad')
    } else {
      createActivity({
        name,
        description,
        files,
        enlace,
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
        <Col xs={12} className="form-group">
          <Label for="name">Nombre de la Actvidad</Label>
          <Input type="text" name="name" id="name" onChange={handleChange} />
        </Col>
        <Col xs={12} className="form-group">
          <Label for="name">Descripcion de la actividad</Label>
          <div className="add_activity_description_container">
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={8}
              rowsMax={24}
              name="description"
              placeholder=""
              className="add_activity_description_container-text-aria"
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col xs={12} className="form-group">
          <Label for="name">Archivo</Label>
          <div className="dropzone" style={{ cursor: 'pointer' }}>
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
            <aside>
              <h6>Archivo a subir</h6>
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
        <Col xs={12} className="form-group">
          <Label for="enlace">Enlace destacado</Label>
          <Input
            type="text"
            name="enlace"
            id="enlace"
            onChange={handleChange}
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
          >
            {loader ? (
              <Spinner className="mr-2" size="sm" color="light" />
            ) : (
              <i className="fa fa-save mr-3"></i>
            )}
            Crear Actividad
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default AddActivity
