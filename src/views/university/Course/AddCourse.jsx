import React, { useState, useEffect } from 'react'
import { Row, Col, Label, Input } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'

//import img
import logoCard1 from 'assets/img/background-card1.jpg'
import logoCard2 from 'assets/img/background-card2.jpeg'
import logoCard3 from 'assets/img/background-card3.jpeg'

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

const AddCourse = () => {
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
  const [grupos, setGrupos] = useState([])
  const [selected, setSelected] = useState({
    sGroup: '',
    sMateria: '',
    sWorkSpace: '',
  })

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

  const styleButton = {
    backgroundColor: '#1EAEDF',
  }

  const styleTeamMember = {
    borderRadius: 20,
    margin: 20,
  }

  const styleTeamImg = {
    width: 300,
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

  const styleDivCreate = {
    textAlign: 'center',
  }

  const styleIconCreate = {
    marginTop: '-0.5rem',
    border: "solid",
  }

  const styleCenter = {
    textAlign: 'center',
  }

  const styleGrayColor = {
    color: '#415359',
    textAlign: 'center',
  }
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

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

  const stylesLabels = {
    fontSize: 25,
    color: 'white',
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
  function handleChange(e) {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }

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
        console.log(value.nameWorkSpace)
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
        console.log(data)
        alert('Seccion creada con exito')
      })
      .catch((error) => console.log(error))
      .finally(() => {})
  }

  useEffect(() => {
    getGroups(teacher_id)
  }, [])

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

  const { name, description, enlace } = inputs

  async function handleSubmit(e) {
    e.preventDefault()

    if (name && description) {
      let body = {
        nameSecction: name,
        descriptionSecction: description,
        workspaceSecction: selected.sWorkSpace,
      }
      console.log('BODY: ', body)
      createSecction(body)
    } else {
      alert('Por favor escribe el nombre y la descripcion de la actividad')
    }
  }

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Actividades</h1>
                <div className="title">
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    onClick={handleShow}
                    style={styleButton}
                  >
                    <span class="material-icons">add_circle_outline</span>
                    ACTIVIDAD
                  </Button>

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
                              <Label
                                htmlFor="exampleSelect3"
                                style={stylesLabels}
                              >
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
                              <Label
                                htmlFor="exampleSelect3"
                                style={stylesLabels}
                              >
                                Materia
                              </Label>
                              <Select
                                options={subjects}
                                defaultValue={subjects[0]}
                                onChange={handleChangeSelectMateria}
                              />
                            </div>

                            {/* <div className="form-group col-md-12">
                              <Label htmlFor="exampleFile" style={stylesLabels}>
                                Cargar Archivo
                              </Label>
                              <Input type="file" name="file" color="primary" id="exampleFile" />
                            </div> */}
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

                      {/* <div style={styleModal} className="row margin-0">
                        <div style={backgroundBlue} className="col-12">
                          <section className="box " style={backgroundBlue}>
                            
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
                                    <Label
                                      htmlFor="exampleSelect3"
                                      style={stylesLabels}
                                    >
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
                                    <Label
                                      htmlFor="exampleSelect3"
                                      style={stylesLabels}
                                    >
                                      Materia
                                    </Label>
                                    <Select
                                      options={subjects}
                                      defaultValue={subjects[0]}
                                      onChange={handleChangeSelectMateria}
                                    />
                                  </div>

                                  {/* <div className="form-group col-md-12">
                              <Label htmlFor="exampleFile" style={stylesLabels}>
                                Cargar Archivo
                              </Label>
                              <Input type="file" name="file" color="primary" id="exampleFile" />
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
                          </section>
                        </div>
                      </div> */}
                    </Modal.Body>
                    {/* <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer> */}
                  </Modal>
                  {/*FIN MODAL*/}

                  <div
                    style={styleHeightDiv}
                    className="col-9"
                  >
                    <div style={styleTeamMember} className="team-member">
                      <div style={styleTeamImg} className="team-img">
                        <img className="img-fluid" src={logoCard3} alt="" />
                      </div>
                      <div style={styleDivCreate}>
                        <span style={styleIconCreate} class="material-icons">
                          create
                        </span>
                      </div>
                      <div style={styleGrayColor} className="team-info">
                        <h3>
                          {/* <NavLink to={BASEDIR + '/university/student-profile'}>
                      {/* {this.props.students[i].name} 
                    </NavLink> */}
                          Circunferencia
                        </h3>
                        <span style={styleCenter}>0 respuestas</span>
                        {/* <span>{this.props.students[i].position}</span> /{' '} */}
                        {/* <span>{this.props.students[i].age} years old</span> */}
                      </div>
                    </div>

                    <div style={styleTeamMember} className="team-member">
                      <div style={styleTeamImg} className="team-img">
                        <img className="img-fluid" src={logoCard2} alt="" />
                      </div>
                      <div style={styleDivCreate}>
                        <span style={styleIconCreate} class="material-icons">
                          create
                        </span>
                      </div>
                      <div style={styleGrayColor} className="team-info">
                        <h3>
                          {/* <NavLink to={BASEDIR + '/university/student-profile'}>
                      {/* {this.props.students[i].name} 
                    </NavLink> */}
                          Circunferencia
                        </h3>
                        <span style={styleCenter}>0 respuestas</span>
                        {/* <span>{this.props.students[i].position}</span> /{' '} */}
                        {/* <span>{this.props.students[i].age} years old</span> */}
                      </div>
                    </div>

                    <div style={styleTeamMember} className="team-member">
                      <div style={styleTeamImg} className="team-img">
                        <img className="img-fluid" src={logoCard3} alt="" />
                      </div>
                      <div style={styleDivCreate}>
                        <span style={styleIconCreate} class="material-icons">
                          create
                        </span>
                      </div>
                      <div style={styleGrayColor} className="team-info">
                        <h3>
                          {/* <NavLink to={BASEDIR + '/university/student-profile'}>
                      {/* {this.props.students[i].name} 
                    </NavLink> */}
                          Circunferencia
                        </h3>
                        <span style={styleCenter}>0 respuestas</span>
                        {/* <span>{this.props.students[i].position}</span> /{' '} */}
                        {/* <span>{this.props.students[i].age} years old</span> */}
                      </div>
                    </div>

                    <div style={styleTeamMember} className="team-member">
                      <div style={styleTeamImg} className="team-img">
                        <img className="img-fluid" src={logoCard2} alt="" />
                      </div>
                      <div style={styleDivCreate}>
                        <span style={styleIconCreate} class="material-icons">
                          create
                        </span>
                      </div>
                      <div style={styleGrayColor} className="team-info">
                        <h3>
                          {/* <NavLink to={BASEDIR + '/university/student-profile'}>
                      {/* {this.props.students[i].name} 
                    </NavLink> */}
                          Circunferencia
                        </h3>
                        <span style={styleCenter}>0 respuestas</span>
                        {/* <span>{this.props.students[i].position}</span> /{' '} */}
                        {/* <span>{this.props.students[i].age} years old</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AddCourse
