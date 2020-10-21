import React, { useState } from 'react'
import { Spinner, Row, Col, Container, Button, Label } from 'reactstrap'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Dropzone from 'react-dropzone'
import { ImageUploader, ProgressCustom } from 'components'
import swal from 'sweetalert'
import styled from 'styled-components'
import './styles/fix-radio.css'

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
    notSentField: false,
  })
  const [imagesLoadCharge, setImagesLoadCharge] = useState(0)
  const [filesLoadCharge, setFilesLoadCharge] = useState(0)
  const [images, setImages] = useState([])
  const [checked, setChecked] = useState(false)

  const { description, files } = inputs
  const create = () => {
    if (!description) {
      swal('Algo nos falta!!', 'Debes escribir tu respuesta!!', 'error')
    } else if (!checked && inputs.files.length <= 0) {
      swal(
        '¿Sin Archivo?',
        'Vas a enviar tu respuesta sin ningún archivo. \n',
        'info'
      )
    } else {
      createResponseCourse(
        codeSecction,
        description,
        checked ? [] : files,
        student_id,
        images,
        setImagesLoadCharge,
        setFilesLoadCharge
      )
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
            rowsMin={2}
            rowsMax={24}
            name="description"
            placeholder="Escribe lo que necesites contarle a tu profe..."
            className="description_container-text-aria"
            onChange={handleChange}
          />
        </Col>
        <Col xs={12} className="form-group">
          <ImageUploader
            images={images}
            setImages={setImages}
            loadIndex={imagesLoadCharge}
            loader={loader}
          />
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
            {loader && inputs.files.length > 0 && (
              <ProgressCustom
                parcial={filesLoadCharge}
                total={inputs.files.length}
                label="Subiendo archivos..."
              />
            )}
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
            onClick={create}
            disabled={loader}
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
