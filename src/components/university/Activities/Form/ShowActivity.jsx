import React, { useState, useEffect } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Linkify from 'react-linkify'
import moment from 'moment'
import { Collapse } from 'reactstrap'
import { Tooltip, Row, Col, Container, Button, Label, Input } from 'reactstrap'
import Dropzone from 'react-dropzone'
import '../styles/show-activity.css'

const ShowActivity = ({
  //   toggle,
  //   onChange,
  edit,
  activity,
  //   loader,
  cancel,
  handleChange,
}) => {
  const [state, setState] = useState({
    editing: false,
  })
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    files: [],
  })
  const [loaders, setLoaders] = useState({
    postDescription: false,
  })
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const toggle = () => setTooltipOpen(!tooltipOpen)

  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank">
      {text}
    </a>
  )

  const create = () => {
    // if (!description) {
    //   alert('Por favor, escribe una descripcion')
    // } else if (!name) {
    //   alert('Por favor, dale un nombre a la actividad')
    // } else {
    //   createActivity({
    //     name,
    //     description,
    //     files,
    //   })
    // }
  }

  //   const handleChange = (e) => {
  //     const { name, value } = e.target
  //     setInputs((inputs) => ({ ...inputs, [name]: value }))
  //   }

  const onDrop = (files) => {
    setInputs((inputs) => ({ ...inputs, files: files }))
  }

  useEffect(() => {}, [])

  const { editing } = state
  const {
    descriptionSecction,
    nameSecction,
    files,
    uploadOnSecction,
    resources,
  } = activity

  return (
    <Container fluid={true} className="add_activity_main">
      <Row>
        {/* <Col xs={12} className="form-group">
          <Label for="name">Nombre de la Actvidad</Label>
          <p>{nameSecction}</p>
          <Input
            value={nameSecction}
            type="text"
            name="nameSecction"
            id="name"
            onChange={handleChange}
          />
        </Col>
        <Col xs={12} className="form-group">
          <Label for="name">Descripcion de la actividad</Label>
          <div className="add_activity_description_container">
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={8}
              rowsMax={24}
              name="descriptionSecction"
              placeholder=""
              className="add_activity_description_container-text-aria"
              onChange={handleChange}
              value={descriptionSecction}
            />
            <div>{descriptionSecction}</div>
          </div>
        </Col> */}
        {/* <Col xs={12} className="form-group">
          <Label for="name">Archivo</Label>
          <div className="dropzone">
            <Dropzone
              onDrop={onDrop}
              className="droparea"
              style={{ minHeight: '0' }}
            >
              <p>
                Arrastra hasta aqui el archivo que deseas agregar o has click
                para buscarlo
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
            Compartir
          </Button>
        </Col> */}
      </Row>
      <Row>
        <Col xs={12} style={{ textAlign: 'end' }}>
          {editing ? (
            <div>
              <Button
                color="primary"
                size="sm"
                onClick={() => {
                  edit()
                  setState((state) => ({ ...state, editing: false }))
                }}
              >
                Guardar
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  cancel()
                  setState((state) => ({ ...state, editing: false }))
                }}
              >
                Cancelar
              </Button>
            </div>
          ) : (
            <div>
              <Button
                style={{
                  display: 'inline-flex',
                  borderRadius: '50%',
                  padding: '10px',
                  paddingRight: '8px',
                }}
                color="primary"
                size="sm"
                onClick={() =>
                  setState((state) => ({ ...state, editing: true }))
                }
                id="TooltipExample"
              >
                <i className="fa fa-edit" style={{ fontSize: '16px' }} />
              </Button>
              <Tooltip
                placement="right"
                isOpen={tooltipOpen}
                target="TooltipExample"
                toggle={toggle}
              >
                Editar
              </Tooltip>
            </div>
          )}
        </Col>
        <Col xs={12}>
          <div className="activity_header_container">
            {editing ? (
              <div>
                <Label for="name">Nombre de la Actvidad</Label>
                <Input
                  value={nameSecction}
                  type="text"
                  name="nameSecction"
                  id="name"
                  onChange={handleChange}
                />
              </div>
            ) : (
              <h4 className="activity_header_container-name">
                <span className="">{nameSecction}</span>
              </h4>
            )}
            {!editing && (
              <div className="activity_header_container-date">
                <i
                  className="i-clock mr-1"
                  style={{ fontSize: '1.2em', color: '#1eaedf' }}
                ></i>
                {moment(uploadOnSecction).format('MMMM DD, hh:mm')}
              </div>
            )}
          </div>
        </Col>
        <Col xs={12}>
          <div className="acticity_content_container">
            {/* <div className="post_content_container-content"> */}

            {editing ? (
              <div>
                <Label for="name">Descripcion de la actividad</Label>
                <TextareaAutosize
                  aria-label="minimum height"
                  rowsMin={8}
                  rowsMax={24}
                  name="descriptionSecction"
                  placeholder=""
                  className="add_activity_description_container-text-aria"
                  onChange={handleChange}
                  value={descriptionSecction}
                />
              </div>
            ) : (
              <Linkify componentDecorator={componentDecorator}>
                {descriptionSecction}
              </Linkify>
            )}

            {/* </div> */}
          </div>
        </Col>
        <Col xs={12}>
          <div className="activity_support_material_container">
            <SupportMaterialCollapse
              type={'Archivos'}
              resources={resources}
            ></SupportMaterialCollapse>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ShowActivity

const SupportMaterialCollapse = ({ resources, type }) => {
  const [isOpen, setIsOpen] = useState(false) //temporal, estado inical debe ser false
  const toggle = () => setIsOpen(!isOpen)
  /* inicio aux function */
  const auxParseName = (url) => {
    try {
      return url.split('/').reverse()[0]
    } catch (error) {
      return 'archivo'
    }
  }
  /* fin aux function  */
  return (
    <div>
      <div
        style={{
          margin: '0',
          width: '100%',
          padding: '0 0',
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #1eaedf',
          fontSize: '1em',
          cursor: 'pointer',
        }}
        onClick={toggle}
      >
        <div>
          <i
            className={
              'fa ' +
              (isOpen ? 'fa-folder-open-o' : 'fa-folder-o') +
              ' ml-1 mr-2'
            }
            style={{ fontSize: '1.2em', color: '#1eaedf' }}
          ></i>
          <span>{type}</span>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <Container>
          <p className="uprofile-list">
            {resources &&
              resources.map((value, key) => {
                return (
                  <span key={key}>
                    <i className="i-doc"></i>{' '}
                    <a href={value.resource} target="_blank">
                      {auxParseName(value.resource)}
                    </a>
                  </span>
                )
              })}
          </p>
        </Container>
      </Collapse>
    </div>
  )
}
