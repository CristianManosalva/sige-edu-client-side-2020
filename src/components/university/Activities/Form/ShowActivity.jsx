import React, { useState, useEffect } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Utils from '@date-io/moment'
import AlarmIcon from '@material-ui/icons/AddAlarm'
import { IconButton, InputAdornment } from '@material-ui/core'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import moment from 'moment'
import { auxParseName } from '_helpers'
import {
  Collapse,
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
  UncontrolledTooltip,
  Spinner,
} from 'reactstrap'
import { DescriptionComponent, PictureViewer } from 'components'
import '../styles/show-activity.css'
import {
  CommentContainer,
  CommentTitle,
  MessageContainer,
} from '../styles/responseComment'
import { config } from '_config'
import { error } from 'jquery'

const auxCountNewLines = (text) => {
  return text.replace(/[^\n]/g, '').length
}

const ShowActivity = ({
  toggleModal,
  edit,
  activity,
  cancel,
  handleChange,
  deleteActivity,
  createComment,
  selectedDate,
  handleDateChange,
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
    response,
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
              <DescriptionComponent>{descriptionSecction}</DescriptionComponent>
            )}
          </div>
        </Col>
        <Col xs={12}>
          <div className="acticity_content_container">
            <Label for="enlace">
              Fecha de cierre{' '}
              <i
                style={{ fontSize: '16px' }}
                className="fa fa-question-circle"
                id="icon_question_close_time"
              />
            </Label>
            <p style={{ margin: 0 }}></p>
            {editing ? (
              <MuiPickersUtilsProvider utils={Utils}>
                <DateTimePicker
                  autoOk
                  ampm={false}
                  // disableFuture
                  value={selectedDate}
                  className="reformat-datepicker"
                  onChange={handleDateChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <AlarmIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </MuiPickersUtilsProvider>
            ) : (
              <p>{selectedDate.format('MMMM DD, H:MM')}</p>
            )}
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
        {!editing && response && response.length > 0 && (
          <Col xs={12}>
            <h5>Entregas de los estudiantes</h5>
            <div className="activity_responses_secction">
              <div className="custom-container">
                {response.map((value, key) => {
                  return (
                    <ResponseActivity
                      createComment={createComment}
                      response={value}
                      key={key}
                    />
                  )
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

const ResponseComment = ({
  comment,
  editLoader,
  deleteLoader,
  editResponse,
  deleteReponse,
  toggleEdit,
  editing,
}) => {
  const { codeComment, comment: comment_teacher, dateComment, score } = comment
  const [newComment, setNewComment] = useState(comment_teacher || '')

  const handleChange = (e) => {
    const { value } = e.target
    setNewComment(value)
  }

  const edit = async () => {
    //validacion
    if (true) {
      editResponse(codeComment, newComment)
    }
  }

  return (
    <CommentContainer>
      <ActionsButtonsCircleBar
        paddingDelete="6px 8px"
        paddingEdit="8px 5px 6px 7px"
        sizeDelete="16px"
        space="8px"
        style={{
          position: 'absolute',
          top: '2px',
          right: '2px',
          display: editing ? 'none' : 'block',
        }}
        editAction={toggleEdit}
        deleteLoader={deleteLoader}
        deleteAction={deleteReponse}
      />
      <CommentTitle>Retroalimentacion</CommentTitle>
      <MessageContainer>
        {!editing && (
          <DescriptionComponent style={{ padding: '14px 0' }}>
            {comment_teacher}
          </DescriptionComponent>
        )}
        {editing && (
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={auxCountNewLines(comment_teacher)}
            rowsMax={24}
            name="newComment"
            placeholder=""
            className="add_activity_description_container-text-aria"
            onChange={handleChange}
            value={newComment}
            style={{ fontSize: '14px', marginLeft: '-13.7px' }}
          />
        )}
        {editing && (
          <ComfirmActionTwoButtonsBar
            cancelAction={toggleEdit}
            confirmAction={edit}
            loader={editLoader}
          />
        )}
      </MessageContainer>
    </CommentContainer>
  )
}

const ResponseActivity = ({ response, createComment }) => {
  const [isOpen, setIsOpen] = useState(false) //temporal, estado inical debe ser false
  const [loaders, setLoaders] = useState({
    creatingCommentLoader: false,
    editCommentLoader: false,
    deleteCommentLoader: false,
  })
  const [editing, setEditing] = useState(false) // temporal
  const toggleEdit = () => setEditing(!editing)

  const toggle = () => setIsOpen(!isOpen)
  const {
    message_response,
    date_response,
    student_response,
    homework,
    comment,
    code_response,
    images,
  } = response

  const [own_comment, setComment] = useState(comment)
  const { user } = student_response

  const OldeditResponse = (codeComment, comment) => {
    return fetch(
      `${config.apiEndPoint}/secctions/commentsecction/update/${codeComment}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment,
        }),
      }
    )
  }

  const createCommentOwn = async (comment) => {
    setLoaders((loaders) => ({ ...loaders, creatingCommentLoader: true }))
    try {
      let newComment = await createComment(comment, code_response).then(
        (response) => {
          if (!response.ok) {
            return null
          }
          return response.json()
        }
      )
      if (newComment) {
        setComment(newComment)
      }
    } catch (error) {
      console.log('error al crear comentario')
    }
    setLoaders((loaders) => ({ ...loaders, creatingCommentLoader: false }))
  }

  const editResponse = async (codeComment, comment) => {
    setLoaders((loaders) => ({ ...loaders, editCommentLoader: true }))
    try {
      let done = await fetch(
        `${config.apiEndPoint}/secctions/commentsecction/update/${codeComment}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            comment,
          }),
        }
      ).then((response) => {
        if (!response.ok) {
          return null
        }
        return response.json()
      })
      if (done) {
        setComment((preComment) => ({ ...preComment, comment: comment }))
      }
    } catch (error) {
      console.log('error al editar comentario')
    }
    setLoaders((loaders) => ({ ...loaders, editCommentLoader: false }))
    toggleEdit()
  }

  const deleteReponse = async () => {
    console.log('Making')
    setLoaders((loaders) => ({ ...loaders, deleteCommentLoader: true }))
    try {
      let done = await fetch(
        `${config.apiEndPoint}/secctions/commentsecction/delete/${own_comment.codeComment}`,
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      ).then((response) => {
        if (!response.ok) {
          return null
        }
        return true
      })
      if (done) {
        setComment(null)
      }
    } catch (error) {
      console.log('error al borrar comentario')
    }
    setLoaders((loaders) => ({ ...loaders, deleteCommentLoader: false }))
  }

  const { editCommentLoader, deleteCommentLoader } = loaders

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
          <span>{user.firstNameUser + ' ' + user.lastNameUser}</span>
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
          <span>{moment(date_response).format('MMMM DD, hh:mm')}</span>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="response_content_container">
          <DescriptionComponent>{message_response}</DescriptionComponent>
          {images && <PictureViewer images={images} />}
          <p>{}</p>
          {homework && homework.length > 0 && (
            <p className="uprofile-list">
              <span>
                <i className="i-doc"></i>{' '}
                <a href={homework[0].response_file} target="_blank">
                  {auxParseName(homework[0].response_file)}
                </a>
              </span>
            </p>
          )}
          {own_comment && (
            <ResponseComment
              deleteReponse={deleteReponse}
              deleteLoader={deleteCommentLoader}
              editResponse={editResponse}
              editLoader={editCommentLoader}
              editing={editing}
              comment={own_comment}
              toggleEdit={toggleEdit}
            />
          )}
          {!own_comment && (
            <CreateComment
              loader={loaders.creatingCommentLoader}
              create={createCommentOwn}
            />
          )}
        </div>
      </Collapse>
    </div>
  )
}

const CreateComment = ({ loader, create, codeSecction }) => {
  const [comment, setComment] = useState('')
  const [creating, setCreating] = useState(false)
  const [errors, setErrors] = useState({
    nullComment: false,
  })
  const toggle = () => setCreating(!creating)

  const handleChange = (e) => {
    const { value } = e.target
    setComment(value)
  }

  const createComment = () => {
    if (comment.length > 0) {
      setErrors((errors) => ({ ...errors, nullComment: false }))
      create(comment)
    } else {
      setErrors((errors) => ({ ...errors, nullComment: true }))
    }
  }

  return (
    <div>
      {!creating && (
        <Button
          style={{ borderRadius: '6px' }}
          onClick={toggle}
          color="primary"
          size="sm"
        >
          Calificar
        </Button>
      )}
      {creating && errors.nullComment && <p>Escribe tu mensaje :)</p>}
      {creating && (
        <div>
          <CommentTitle>Retroalimentacion</CommentTitle>
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={1}
            rowsMax={24}
            name="newComment"
            placeholder=""
            className="add_activity_description_container-text-aria"
            onChange={handleChange}
            value={comment}
            style={{ fontSize: '14px', marginLeft: '-13.7px' }}
          />
        </div>
      )}
      {creating && (
        <ComfirmActionTwoButtonsBar
          loader={loader}
          confirmAction={createComment}
          cancelAction={toggle}
        />
      )}
    </div>
  )
}

const SupportMaterialCollapse = ({ resources, type }) => {
  const [isOpen, setIsOpen] = useState(false) //temporal, estado inical debe ser false
  const toggle = () => setIsOpen(!isOpen)
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

const ActionsButtonsCircleBar = ({
  editAction,
  deleteAction,
  paddingEdit,
  paddingDelete,
  sizeEdit,
  sizeDelete,
  space,
  style,
  deleteLoader,
}) => {
  const styleButtons = {
    display: 'inline-flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div style={style}>
      <Button
        style={{ ...styleButtons, padding: paddingEdit, marginRight: space }}
        color="primary"
        size="sm"
        onClick={editAction}
        id="edit_action_button"
      >
        <i className="fa fa-edit" style={{ fontSize: sizeEdit }} />
      </Button>
      <UncontrolledTooltip placement="right" target="edit_action_button">
        Editar
      </UncontrolledTooltip>
      <Button
        style={{ ...styleButtons, padding: paddingDelete }}
        color="danger"
        size="sm"
        onClick={deleteAction}
        id="delete_action_button"
      >
        {deleteLoader && <Spinner color="ligth" className="mr-1" size="sm" />}
        {!deleteLoader && (
          <i className="fa fa-trash-o" style={{ fontSize: sizeDelete }} />
        )}
      </Button>
      <UncontrolledTooltip placement="right" target="delete_action_button">
        Borrar
      </UncontrolledTooltip>
    </div>
  )
}

const ComfirmActionTwoButtonsBar = ({
  confirmAction,
  cancelAction,
  loader,
}) => {
  const styleButtons = {
    fontSize: '13px',
    padding: '2px 9px',
    borderRadius: '11px',
  }
  return (
    <div>
      <Button
        color="primary"
        size="sm"
        style={styleButtons}
        onClick={confirmAction}
      >
        {loader && <Spinner color="ligth" className="mr-1" size="sm" />}Guardar
      </Button>
      <Button size="sm" style={styleButtons} onClick={cancelAction}>
        Cancelar
      </Button>
    </div>
  )
}
