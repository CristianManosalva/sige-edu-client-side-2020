import React, { useState, useEffect } from 'react'
import { Row, Col, Label, Input } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { config } from '_config'
import Button from '@material-ui/core/Button'
import {
  NavBarLogout,
  NewsCarouselItem,
  Carousel,
  ClientCarouselItem,
  ContactIcon,
  LoginForm,
  ActivityCarouselItem,
} from 'components'
import { Container } from 'reactstrap'
import { news, clients, contact } from 'api/fakedata'
//import img
import logoCard1 from 'assets/img/background-card1.jpg'
import logoCard2 from 'assets/img/background-card2.jpeg'

// import InputMask from 'react-input-mask';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Select from 'react-select'

import { makeStyles } from '@material-ui/core/styles'
import Modal from 'react-bootstrap/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import { /* grupos, */ materias } from 'api/fakedata'

const api = `http://api.sige-edu.com:8000/api/courses/academiccharge/byteacher`
const apiSecction = `http://api.sige-edu.com:8000/api/secctions/secction/create/`
const styleButton = {
  margin: '1rem 0 0 1rem',
  backgroundColor: '#1EAEDF',
}
const styleModal = {
  width: 'auto',
  overflow: 'auto',
  backgroundColor: '#1EAEDF',
}
const backgroundBlue = {
  backgroundColor: '#1EAEDF',
  color: 'white',
}
const stylesLabels = {
  fontSize: 25,
  color: 'white',
}
const stylesLabelsTitle = {
  fontSize: 30,
  textAlign: 'center',
  justifyContent: 'center',
  color: 'white',
}
const styleInputFile = {
  color: 'white',
  backgroundColor: 'DodgerBlue',
  padding: '10px',
  fontFamily: 'Arial',
}
const styleHeightDiv = {
  height: 'auto',
  whiteSpace: 'nowrap',
  overflowX: 'auto',
}
const styleButtonSave = {
  backgroundColor: '#29F441',
  width: '100%',
  fontWeight: 'bold',
}
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const AddCourse = () => {
  // Inicio Declaraciones de estado
  const { teacher } = useSelector(
    (state) => state.authentication.user.user_data
  )
  const [inputs, setInputs] = useState({
    name: '',
    enlace: '',
    description: '',
  })
  const teacher_id = teacher.codeTeacher
  const [data, setData] = useState([])
  const [full, setFull] = useState([])
  const [selected, setSelected] = useState({
    sGroup: '',
    sMateria: '',
    sWorkSpace: '',
  })
  const [show, setShow] = useState(false)
  const [show2modal, setShow2modal] = useState(false)
  const [options, setOptions] = useState([
    {
      value: -1,
      label: 'Escoge un grupo',
    },
  ])
  const [subjects, setSubjects] = useState([
    {
      value: -1,
      label: 'Escoge un materia',
    },
  ])
  const [activities, setActivities] = useState([])
  const [lastActivities, setLastActivities] = useState([])
  // Fin Declaraciones de estado

  // Inicio funciones auxiliares
  function removeDuplicity(array) {
    let hash = Object.create(null)
    return array.reduce((result, value) => {
      if (!hash[value.groupDictate.nameGroup]) {
        hash[value.groupDictate.nameGroup] = true
        result.push(value)
      }
      return result
    }, [])
  }

  function removeDuplicityWork(array, codeMateria) {
    let hash = Object.create(null)
    let filter = array.reduce((result, value) => {
      if (!hash[value.nameWorkSpace]) {
        hash[value.nameWorkSpace] = true
        result.push(value)
      }
      return result
    }, [])

    return filter.reduce((result, value) => {
      if (value.academicCharge.courseDictate.codeCourse == codeMateria) {
        result.push(value)
      }
      return result
    }, [])
  }

  function removeDuplicityAcademic(array) {
    let hash = Object.create(null)
    return array.reduce((result, value) => {
      if (
        !hash[value.groupDictate.nameGroup + value.courseDictate.nameCourse]
      ) {
        hash[
          value.groupDictate.nameGroup + value.courseDictate.nameCourse
        ] = true
        result.push(value)
      }
      return result
    }, [])
  }

  function selecGroups(array) {
    return array.map((value, key) => {
      let name = value.groupDictate.nameGroup
        ? value.groupDictate.nameGroup.split('-')[0] +
          '-' +
          value.groupDictate.nameGroup.split('-')[1]
        : 'Grupo *?*?'
      return {
        value: value.groupDictate.nameGroup,
        label: name,
      }
    })
  }
  function formatSecctions(array) {
    return array.reduce((result, { secctions }) => {
      if (secctions.length) {
        result.push(...secctions)
      }
      return result
    }, [])
  }
  // Fin funciones auxiliares

  //Inicio Fecth information
  function getMaterias(array, selectedGroup) {
    // let hash = Object.create(null)
    return array.reduce((result, value) => {
      if (value.groupDictate.nameGroup == selectedGroup) {
        result.push({
          label: value.courseDictate.nameCourse,
          value: value.courseDictate.codeCourse,
        })
      }
      return result
    }, [])
  }

  function getGroups(teacher_id) {
    fetch(api + `/${teacher_id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let depuredArray = removeDuplicity(data)
        setOptions(selecGroups(depuredArray))
        setData(removeDuplicity(depuredArray))
        setFull(data)
      })
      .catch((error) => console.log(error))
      .finally(() => {})
  }

  function getSecctionsByTeacher(teacherId) {
    fetch(`${config.apiOficial}/workspaces/only/secctions/${teacherId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let formartSecctionsArray = formatSecctions(data)
        console.log('data for gerSecctioins by teacher ', formartSecctionsArray)
        formartSecctionsArray.length && setActivities(formartSecctionsArray)
      })
      .catch((error) => console.log(error))
      .finally(() => {})
  }

  function getWorkSpaces(teacher_id, grupo_id, codeMateria) {
    fetch(
      `http://api.sige-edu.com:8000/api/workspaces/courses/${teacher_id}/${grupo_id}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        let depuredData = removeDuplicityWork(data, codeMateria)
        let codeWorkSpace = depuredData && depuredData[0].codeWorkSpace
        setSelected((selected) => ({ ...selected, sWorkSpace: codeWorkSpace }))
        return codeWorkSpace
      })
      .catch((error) => console.log(error))
      .finally(() => {})
  }
  //Fin Fecth information

  //Inicio post request
  function createSecction(body) {
    fetch(apiSecction, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Seccion creada con exito')
      })
      .catch((error) => console.log(error))
      .finally(() => {})
  }
  //Fin post request

  // Inicio Handle functions
  const handleChangeSelect = async ({ value }) => {
    let materiasPro = await removeDuplicityAcademic(full)
    let materias = await getMaterias(materiasPro, value)
    setSelected((selected) => ({ ...selected, sGroup: value }))
    setSubjects(materias)
  }
  const handleChangeSelectMateria = ({ value }) => {
    setSelected((selected) => ({ ...selected, sMateria: value }))
    getWorkSpaces(teacher_id, selected.sGroup, value)
  }
  function handleChange(e) {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }
  function handleSubmit(e) {
    e.preventDefault()

    if (name && description) {
      let body = {
        nameSecction: name,
        descriptionSecction: description,
        workspaceSecction: selected.sWorkSpace,
      }
      createSecction(body)
    } else {
      alert('Por favor escribe el nombre y la descripcion de la actividad')
    }
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // Fin Handle functions

  useEffect(() => {
    getGroups(teacher_id)
    getSecctionsByTeacher(teacher_id)
  }, [])

  const { name, description, enlace } = inputs

  return (
    <div>
      <div className="content">
        {/*MODAL*/}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={backgroundBlue} closeButton>
            <Modal.Title>AÑADIR ACTIVIDAD</Modal.Title>
          </Modal.Header>
          <Modal.Body style={backgroundBlue}>
            <div className="content-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputname4"
                      placeholder=""
                      name="name"
                      placeholder="Nombre de la actividad"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder="Descripcion de la Actividad"
                      value={description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <Label htmlFor="exampleSelect3" style={stylesLabels}>
                      Grupo
                    </Label>
                    <Select
                      options={options}
                      defaultValue={options[0]}
                      onChange={handleChangeSelect}
                      placeholder="Grupos"
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <Label htmlFor="exampleSelect3" style={stylesLabels}>
                      Materia
                    </Label>
                    <Select
                      options={subjects}
                      defaultValue={subjects[0]}
                      onChange={handleChangeSelectMateria}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="input4"
                      placeholder=""
                      name="enlace"
                      value={enlace}
                      onChange={handleChange}
                      placeholder="Enlace"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={styleButtonSave}
                >
                  Guardar
                </button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
        {/*FIN MODAL*/}
        {/* SEGUNDO MODAL */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={backgroundBlue} closeButton>
            <Modal.Title>AÑADIR ACTIVIDAD</Modal.Title>
          </Modal.Header>
          <Modal.Body style={backgroundBlue}>
            <div className="content-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="inputname4"
                      placeholder=""
                      name="name"
                      placeholder="Nombre de la actividad"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder="Descripcion de la Actividad"
                      value={description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <Label htmlFor="exampleSelect3" style={stylesLabels}>
                      Grupo
                    </Label>
                    <Select
                      options={options}
                      defaultValue={options[0]}
                      onChange={handleChangeSelect}
                      placeholder="Grupos"
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <Label htmlFor="exampleSelect3" style={stylesLabels}>
                      Materia
                    </Label>
                    <Select
                      options={subjects}
                      defaultValue={subjects[0]}
                      onChange={handleChangeSelectMateria}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="input4"
                      placeholder=""
                      name="enlace"
                      value={enlace}
                      onChange={handleChange}
                      placeholder="Enlace"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={styleButtonSave}
                >
                  Editar
                </button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
        {/* FIN SEGUNDO  MODAL */}
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Actividades</h1>
              </div>
            </div>
            <div className="col-xl-12">
              <section className="box ">
                <header className="panel_header">
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={handleShow}
                    style={styleButton}
                  >
                    <span className="material-icons">add_circle_outline</span>
                    ACTIVIDAD
                  </Button>
                </header>
                <div className="content-body">
                  <div className="row">
                    <div className="col-12">
                      {activities.length > 0 && (
                        <div className="last-activities">
                          <h1>Tus Ultimas Actividades </h1>
                          <div style={styleHeightDiv} className="col-12">
                            {activities.slice(0, 5).map((value, key) => {
                              return (
                                <ActivityCarouselItem
                                  key={key}
                                  activity={value}
                                />
                              )
                            })}
                          </div>
                        </div>
                      )}
                      {!activities.length && (
                        <p>No tienes actividades creadas</p>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AddCourse
