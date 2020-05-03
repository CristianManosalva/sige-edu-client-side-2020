import React, { useState, useEffect } from 'react'
import { Row, Col, Label, Input, Spinner, Table } from 'reactstrap'
import { useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import moment from 'moment'

var api = process.env.REACT_APP_API_END_POINT

const AddProfessor = (props) => {
  const [teacher, setTeacher] = useState({
    id: '',
    national_id: '',
    national_type_id: -1,
    name: ' ',
    surname: '',
    email: '',
    phone_number: '',
    address: '',
    password: '',
    birthdate: '2000-01-01',
    last_connection: '',
    gender: '',
    blood_type_id: 1,
    is_active: 1,
  })
  const [institutions] = useState([
    {
      name: 'Institución Educativa Central de Bachillerato Integrado',
      dane: 176364000015,
      is_active: 1,
      headquarters: [
        {
          name: 'Central de Bachillerato',
          institution_dane: 176364000015,
          dane: 1,
          is_active: 1,
        },
        {
          name: 'Manuela Beltran',
          institution_dane: 176364000015,
          dane: 2,
          is_active: 2,
        },
      ],
    },
    {
      name: 'Institución Educativa Alfredo Bonilla Montaño',
      dane: 276364000141,
      is_active: 1,
      headquarters: [
        {
          name: 'Alfredo Bonilla Montaño',
          dane: 1,
          institution_dane: 276364000141,
          is_active: 1,
        },
        {
          name: 'José Antonio Galán',
          dane: 2,
          institution_dane: 276364000141,
          is_active: 1,
        },
        {
          name: 'Maria Inmaculada',
          dane: 3,
          institution_dane: 276364000141,
          is_active: 1,
        },
        {
          name: 'Terranova',
          dane: 5,
          institution_dane: 276364000141,
          is_active: 1,
        },
      ],
    },
  ])
  const [loaders, setLoaders] = useState({
    firstLoad: false,
    updateLoad: false,
  })
  const [sedes, setSedes] = useState([])
  //   const [grados, setGrados] = useState(moment())
  const [grados] = useState({
    grado: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    sub: ['1', '2', '3', '4'],
    materia: ['Ingles', 'Español', 'Matematica'],
  })
  const [materias, setMaterias] = useState([])
  const [combox, setCombox] = useState({
    selectIns: -1,
    selectHead: -1,
    selectGrade: -1,
    selectSub: -1,
    selectMateria: -1,
  })
  //{ ins: '112233', sede: '2', grupo: '6-2', materia: 'Español' },
  const [carga, setCarga] = useState([])
  const { user } = useSelector((state) => state.authentication.user)
  function handleChange(e) {
    const { name, value } = e.target
    console.log(name, ' v ', value)
    setTeacher((teacher) => ({
      ...teacher,
      [name]: value,
    }))
  }

  function handleChangeDate(date) {
    console.log(date)
    setTeacher((teacher) => ({
      ...teacher,
      birthdate: date.format('YYYY-MM-DD'),
    }))
  }

  function handleChangeInstitucions(e) {
    const { name, value } = e.target
    setCombox((combox) => ({
      ...combox,
      [name]: value,
    }))

    institutions.forEach((item) => {
      if (item.dane == value) {
        setSedes(item.headquarters)
      }
    })
  }

  function addRow() {
    let objeto = {}
    let {
      selectIns,
      selectHead,
      selectGrade,
      selectMateria,
      selectSub,
    } = combox
    if (
      selectIns == '-1' ||
      selectHead == '-1' ||
      selectGrade == '-1' ||
      selectMateria == '-1' ||
      selectSub == '-1'
    ) {
      // setErrors((erros) => ({...erros, failAdd: true}))
      alert('Por favor selecciona los datos correctamente')
    } else {
      objeto.national_id = user.national_id
      objeto.ins = selectIns
      objeto.sede = selectHead
      objeto.grupo = selectGrade + '-' + selectSub
      objeto.materia = selectMateria
      setCarga((carga) => [...carga, objeto])
      createCarga(objeto)
    }
  }

  function getTeacher() {
    setLoaders((loaders) => ({
      ...loaders,
      firstLoad: true,
    }))

    fetch(api + `/teachers/${user.national_id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        setTeacher(data)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoaders((loaders) => ({
          ...loaders,
          firstLoad: false,
        }))
      })
  }

  function updateTeacher(id, teacher) {
    setLoaders((loaders) => ({
      ...loaders,
      updateLoad: true,
    }))
    fetch(api + `/teachers/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacher),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('content for put ', data)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoaders((loaders) => ({
          ...loaders,
          updateLoad: false,
        }))
      })
  }

  function createCarga(cargaitem) {
    fetch(api + `/cargas/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cargaitem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('content for post ', data)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        /* setLoaders((loaders) => ({
          ...loaders,
          cargaLoad: false,
        })) */
      })
  }

  function getCarga() {
    fetch(api + `/cargas/${user.national_id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        data && setCarga(data)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        /* setLoaders((loaders) => ({
          ...loaders,
          cargaLoad: false,
        })) */
      })
  }

  function getMaterias() {
    fetch(api + `/materias/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        data && setMaterias(data)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        /* setLoaders((loaders) => ({
          ...loaders,
          cargaLoad: false,
        })) */
      })
  }

  function handleSubmitCarga(e) {
    e.preventDefault()
    /* setLoaders((loaders) => ({
      ...loaders,
      cargaLoad: true,
    })) */
  }

  useEffect(() => {
    getTeacher()
    getCarga()
    getMaterias()
  }, [])

  const {
    id,
    national_id,
    national_type_id,
    name,
    surname,
    email,
    phone_number,
    address,
    birthdate,
    gender,
  } = teacher

  function handleSubmit(e) {
    e.preventDefault()
    updateTeacher(id, teacher)
  }

  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Mi Perfil</h1>
              </div>
            </div>

            <div className="row margin-0">
              <div className="col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">
                      Informacion Personal{' '}
                      {loaders.firstLoad && (
                        <Spinner
                          style={{ width: '1.3rem', height: '1.3rem' }}
                          color="info"
                        />
                      )}
                    </h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                        <form onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label htmlFor="name">Nombres</label>
                              <input
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                placeholder=""
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="surname">Apellidos</label>
                              <input
                                name="surname"
                                onChange={handleChange}
                                value={surname}
                                type="text"
                                className="form-control"
                                id="surname"
                                placeholder=""
                              />
                            </div>
                            {/* <div className="form-row col-md-12"> */}
                            <div className="form-group col-sm-12 col-md-6">
                              <label htmlFor="document-group">Documento</label>
                              <select
                                onChange={handleChange}
                                value={national_type_id}
                                name="national_type_id"
                                id="document-group"
                                className="form-control"
                                contentEditable={false}
                              >
                                {/* <option value={-1}>Tipo</option> */}
                                <option value={0}>Cedula de cuidadania</option>
                                {/* <option value={1}>Pasaporte</option> */}
                              </select>
                            </div>
                            <div className="form-group col-sm-12 col-md-6">
                              <label htmlFor="number-group">
                                <br />
                              </label>
                              <input
                                onChange={handleChange}
                                disabled={true}
                                id="number-group"
                                type="number"
                                name="national_id"
                                value={national_id}
                                className="form-control"
                                placeholder="numero"
                              />
                            </div>
                            {/* </div> */}
                            <div className="form-group col-sm-12 col-md-6">
                              <label>Fecha de Nacimiento</label>
                              <div className="controls" style={{ margin: 0 }}>
                                <DatePicker
                                  name="birthdate"
                                  selected={moment(birthdate)}
                                  onChange={handleChangeDate}
                                  showMonthDropdown
                                  showYearDropdown
                                  dropdownMode="select"
                                />
                              </div>
                            </div>
                            <div className="form-group col-sm-12 col-md-6">
                              <Label htmlFor="gender">Genero</Label>
                              <Input
                                onChange={handleChange}
                                type="select"
                                name="gender"
                                id="gender"
                                value={gender}
                              >
                                <option value={-1}>Genero</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Masculino">Masculino</option>
                              </Input>
                            </div>
                            {/* PARTE DE CONTACTO  +++++++++++++++++++++++++++++++++++++++++++*/}
                            <div className="form-group col-sm-12 col-md-6">
                              <label htmlFor="email">Email</label>
                              <input
                                onChange={handleChange}
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="example@gmail.com"
                              />
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <Label htmlFor="field-11">Telefono Movil</Label>
                              <InputMask
                                onChange={handleChange}
                                id="field-11"
                                name="phone_number"
                                value={phone_number}
                                className="form-control"
                                mask="999 999 9999"
                                maskChar="_"
                              />
                            </div>
                            <div className="form-group col-sm-12">
                              <label htmlFor="addres">Direccion</label>
                              <input
                                onChange={handleChange}
                                value={address}
                                type="text"
                                className="form-control"
                                name="address"
                                id="addres"
                                placeholder="Carrera 1E #12A - 02, Jamundi"
                              />
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Guardar{' '}
                            {loaders.updateLoad && (
                              <Spinner
                                style={{ width: '1.3rem', height: '1.3rem' }}
                                color="light"
                              />
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="col-12">
                <section className="box ">
                  <header className="panel_header">
                    <h2 className="title float-left">Informacion Laboral</h2>
                  </header>
                  <div className="content-body">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-8">
                        <form onSubmit={handleSubmitCarga}>
                          <div className="form-row">
                            <div className="form-group col-sm-12 col-md-10">
                              <Label htmlFor="institution">
                                Institucion en la que Labora
                              </Label>
                              <Input
                                type="select"
                                id="selectIns"
                                name="selectIns"
                                value={combox.selectIns}
                                onChange={handleChangeInstitucions}
                              >
                                <option value={-1}>
                                  Selecciona una institucion
                                </option>
                                {institutions.map(({ dane, name }, key) => {
                                  return (
                                    <option key={key} value={dane}>
                                      {name}
                                    </option>
                                  )
                                })}
                              </Input>
                            </div>
                            <div className="form-group col-sm-12 col-md-10">
                              <Label htmlFor="headquarters">
                                Sede en la que labora
                              </Label>
                              <Input
                                type="select"
                                name="selectHead"
                                value={combox.selectHead}
                                id="selectHead"
                                onChange={handleChangeInstitucions}
                              >
                                <option value={-1}>Selecciona una sede</option>
                                {sedes.map((value, key) => {
                                  return (
                                    <option key={value.dane} value={value.dane}>
                                      {value.name}
                                    </option>
                                  )
                                })}
                              </Input>
                            </div>
                            <div className="form-group col-sm-4">
                              <Label htmlFor="materia">Grado</Label>
                              <Input
                                type="select"
                                name="selectMateria"
                                // value={combox.selectHead}
                                id="materia"
                                value={combox.selectMateria}
                                onChange={handleChangeInstitucions}
                              >
                                <option value={-1}>Materia</option>
                                {/* {grados.materia.map((value, key) => {
                                  return (
                                    <option key={key} value={value}>
                                      {value}
                                    </option>
                                  )
                                })} */}
                                {materias.map((value, key) => {
                                  return (
                                    <option key={key} value={value.name}>
                                      {value.name}
                                    </option>
                                  )
                                })}
                              </Input>
                            </div>
                            <div className="form-group col-sm-2">
                              <Label htmlFor="grade">Grado</Label>
                              <Input
                                type="select"
                                name="selectGrade"
                                // value={combox.selectHead}
                                id="selectGrade"
                                value={combox.selectGrade}
                                onChange={handleChangeInstitucions}
                              >
                                <option value={-1}>Grado</option>
                                {grados.grado.map((value, key) => {
                                  return (
                                    <option key={key} value={value}>
                                      {value}
                                    </option>
                                  )
                                })}
                              </Input>
                            </div>
                            <div className="form-group col-sm-2">
                              <Label htmlFor="sub">Sub</Label>
                              <Input
                                type="select"
                                name="selectSub"
                                // value={combox.selectHead}
                                id="selectSub"
                                value={combox.selectSub}
                                onChange={handleChangeInstitucions}
                              >
                                <option value={-1}>Sub</option>
                                {grados.sub.map((value, key) => {
                                  return (
                                    <option key={key} value={value}>
                                      {value}
                                    </option>
                                  )
                                })}
                              </Input>
                            </div>
                            <div className="form-group col-sm-2">
                              <Label htmlFor="sub">Añadir</Label>
                              <button
                                className="btn btn-primary"
                                onClick={addRow}
                              >
                                <i
                                  style={{ width: '1.3rem', height: '1.3rem' }}
                                  className="i-plus"
                                ></i>
                              </button>
                            </div>

                            <div className="form-group col-sm-10">
                              <Table borderless>
                                <thead>
                                  <tr>
                                    <th>Grupo</th>
                                    <th>Materia</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {carga.map((value, key) => {
                                    return (
                                      <tr key={key}>
                                        <td>{value.grupo}</td>
                                        <td>{value.materia}</td>
                                      </tr>
                                    )
                                  })}
                                </tbody>
                              </Table>
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

export default AddProfessor
