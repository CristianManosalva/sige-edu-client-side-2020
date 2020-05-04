import React, { useState, useEffect } from 'react'
import { Row, Col, Label, Input } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
// import InputMask from 'react-input-mask';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Select from 'react-select'
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

  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Añadir Actividad Online</h1>
              </div>
            </div>
            <div className="row margin-0">
              <div className="col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">Datos Básicos</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                        <form onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group col-md-12">
                              <label htmlFor="inputname4">
                                Nombre de la Actividad
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="inputname4"
                                placeholder=""
                                name="name"
                                value={name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <label htmlFor="description">
                                Descripcion de la Actividad
                              </label>
                              <Input
                                type="textarea"
                                name="description"
                                id="description"
                                placeholder=""
                                value={description}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="exampleSelect3">Grupo</Label>
                              <Select
                                options={options}
                                defaultValue={options[0]}
                                onChange={handleChangeSelect}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="exampleSelect3">Materia</Label>
                              <Select
                                options={subjects}
                                defaultValue={subjects[0]}
                                onChange={handleChangeSelectMateria}
                              />
                            </div>

                            <div className="form-group col-md-12">
                              <Label htmlFor="exampleFile">
                                Cargar Archivo
                              </Label>
                              <Input type="file" name="file" id="exampleFile" />
                            </div>
                            <div className="form-group col-md-12">
                              <label htmlFor="input4">Enlace</label>
                              <input
                                type="text"
                                className="form-control"
                                id="input4"
                                placeholder=""
                                name="enlace"
                                value={enlace}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Guardar
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AddCourse
