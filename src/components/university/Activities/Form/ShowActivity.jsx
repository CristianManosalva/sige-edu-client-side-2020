import React, { useState, useEffect } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Linkify from 'react-linkify'
import moment from 'moment'
import { Collapse } from 'reactstrap'
import {
  Tooltip,
  Row,
  Col,
  Container,
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import Dropzone from 'react-dropzone'
import '../styles/show-activity.css'
import { DialogContent } from '@material-ui/core'

const ShowActivity = ({
  toggleModal,
  //   onChange,
  edit,
  activity,
  //   loader,
  cancel,
  handleChange,
  deleteActivity,
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
  const [tooltipOpen2, setTooltipOpen2] = useState(false)
  const toggle = () => setTooltipOpen(!tooltipOpen)
  const toggle2 = () => setTooltipOpen2(!tooltipOpen2)

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

  const onDrop = (files) => {
    setInputs((inputs) => ({ ...inputs, files: files }))
  }

  const [modal, setModal] = useState(false)
  const toggleModalConfirmation = () => setModal(!modal)

  useEffect(() => {}, [])

  const { editing } = state
  const {
    codeSecction,
    descriptionSecction,
    nameSecction,
    files,
    uploadOnSecction,
    resources,
    responses,
  } = activity

  return (
    <Container fluid={true} className="add_activity_main">
      <Modal
        isOpen={modal}
        toggle={toggleModalConfirmation}
        keyboard={false}
        backdrop={'static'}
      >
        <ModalHeader>Confirmar Accion</ModalHeader>
        <ModalBody>
          <p style={{ fontSize: '18px', textAlign: 'center' }}>
            ¿Estas seguro que deseas eliminar esta activiadad?
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => {
              deleteActivity(activity)
              toggleModalConfirmation()
              toggleModal()
            }}
            size="sm"
          >
            Eliminar
          </Button>{' '}
          <Button color="primary" onClick={toggleModalConfirmation} size="sm">
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
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
                //backdrop={backdrop}
              >
                Editar
              </Tooltip>
              <Button
                style={{
                  display: 'inline-flex',
                  borderRadius: '50%',
                  padding: '10px',
                  // paddingRight: '8px',
                }}
                color="danger"
                size="sm"
                onClick={toggleModalConfirmation}
                id="delete_activity"
              >
                <i className="fa fa-trash-o" style={{ fontSize: '18px' }} />
              </Button>
              <Tooltip
                placement="right"
                isOpen={tooltipOpen2}
                target="delete_activity"
                toggle={toggle2}
              >
                Borrar
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
        {!editing && responses && responses.length > 0 && (
          <Col xs={12}>
            <h5>Entregas de los estudiantes</h5>
            <div className="activity_responses_secction">
              <div className="custom-container">
                {responses.map((value, key) => {
                  return <ResponseActivity response={value} key={key} />
                })}
              </div>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default ShowActivity

const ResponseActivity = (props) => {
  const [isOpen, setIsOpen] = useState(false) //temporal, estado inical debe ser false
  const toggle = () => setIsOpen(!isOpen)
  const {
    response,
    messageResponse,
    dateResponse,
    studentResponse,
  } = props.response
  const { codeStudent, user } = studentResponse
  /* inicio aux function */
  const auxParseName = (url) => {
    try {
      return url.split('/').reverse()[0]
    } catch (error) {
      return 'archivo'
    }
  }
  /* fin aux function  */

  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank">
      {text}
    </a>
  )

  return (
    <div className="mb-3">
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
          <span>{user.firstNameUser + user.lastNameUser}</span>
        </div>
        <div
          className="mr-1"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <i
            className="i-clock mr-1"
            style={{ fontSize: '1.2em', color: '#1eaedf' }}
          />
          <span>{moment(dateResponse).format('MMMM DD, hh:mm')}</span>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="response_content_container">
          <Linkify componentDecorator={componentDecorator}>
            {messageResponse}
          </Linkify>
          <p>{}</p>
          {response && (
            <p className="uprofile-list">
              <span>
                <i className="i-doc"></i>{' '}
                <a href={response} target="_blank">
                  {auxParseName(response)}
                </a>
              </span>
            </p>
          )}
        </div>
      </Collapse>
    </div>
  )
}

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
