import React, { Component, useState, useEffect } from "react";
import { Spinner } from 'reactstrap'
import './styles/styleforms.css'
import DatePicker from 'react-datepicker'
import { config } from '_config'

const backgroundBlue = {
  backgroundColor: '#1EAEDF',
  color: 'white',
}

const whiteText = {
  color: 'white',
}
const styleButtonSave = {
  backgroundColor: '#29F441',
  width: '100%',
  fontWeight: 'bold',
}

const FormProfileUser = (props) => {

  const [user, setUser] = useState(props.user);
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)
  const [smShow, setSmShow] = useState(false)
  const [loaders, setLoaders] = useState({
    firstLoad: false,
    updateLoad: false,
  })
  function getUserData() {
    // setUser(props.user)
    fetch(`${config.apiEndPoint}/users/52005409`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoaders((loaders) => ({
          ...loaders,
          cargaLoad: false,
        }))
      })
  }

  function handleChange(e) {
    const { name, value } = e.target
    // console.log(name, ' v ', value, )

    setUser((user) => ({
      ...user,
      [name]: value,
    }))
  }

  function handleChangeDate(date) {
    //console.log(date)
    setUser((user) => ({
      ...user,
      dateOfBirthUser: date.format('YYYY-MM-DD'),
    }))
  }
  function updateTeacher(documentIdUser, user) {
    let auxTeacher = user
    // console.log('auxTeacher', auxTeacher);
    auxTeacher.password = user.documentIdUser
    auxTeacher.passwordUser = user.documentIdUser
    setLoaders((loaders) => ({
      ...loaders,
      updateLoad: true,
    }))
    fetch(`${config.apiEndPoint}/users/update/${documentIdUser}/`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(auxTeacher),
    })
      .then((response) => {
        response.json()
        setSmShow(true)
      })
      .then((data) => {
        // console.log('content for put ', data)
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoaders((loaders) => ({
          ...loaders,
          updateLoad: false,
        }))
      })

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  }
  useEffect(() => {
    getUserData()
  }, [])
  function handleSubmit(e) {
    e.preventDefault()
    updateTeacher(documentIdUser, user)
  }
  function closeSM() {
    window.location.reload()
  }
  const {
    firstNameUser,
    lastNameUser,
    typeIdeUser,
    documentIdUser,
    dateOfBirthUser,
    genderUser,
    emailUser,
    phoneUser,
    addressUser,
  } = user
  // console.log('user...user...', user);


  return (
    <div className="form" style={{ borderRadius: '10px' }}>
      <form onSubmit={handleSubmit} noValidate >
        <div className="form-name">
          <label>Nombre: &nbsp; </label><br />
          <input
            value={user.firstNameUser || ""}
            type="text"
            className="form-control"
            // className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
            name="firstNameUser"
            onChange={handleChange}
            style={{ fontSize: '20px' }}
          />
          {/* {isError.name.length > 0 && (
            <span className="invalid-feedback">{isError.name}</span>
          )} */}
          <label>Apellido: &nbsp; </label><br />
          <input
            type="text"
            value={user.lastNameUser || ""}
            className="form-control"
            // className={isError.lastname.length > 0 ? "is-invalid form-control" : "form-control"}
            name="lastNameUser"
            onChange={handleChange}
            style={{ fontSize: '20px' }}
          />
          {/* {isError.lastname.length > 0 && (
            <span className="invalid-feedback">{isError.lastname}</span>
          )} */}
        </div>

        <div className="form-email-rh">
          <label>Teléfono: &nbsp; </label>
          <input
            type="text"
            value={user.phoneUser || ""}
            className="form-control"
            // className={isError.phone.length > 0 ? "is-invalid form-control" : "form-control"}
            name="phoneUser"
            onChange={handleChange}
            style={{ fontSize: '20px' }}
          />
          {/* {isError.phone.length > 0 && (
            <span className="invalid-feedback">{isError.phone}</span>
          )} */}
          <label>Email: &nbsp; </label>
          <input
            type="email"
            value={user.emailUser || ""}
            className="form-control"
            // className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
            name="emailUser"
            onChange={handleChange}
            style={{ fontSize: '20px' }}
          />
          {/* {isError.email.length > 0 && (
            <span className="invalid-feedback">{isError.email}</span>
          )} */}
          
        </div>

        {/* <div className="form-email-rh">
          <label>Fecha <br /> Nacimiento: &nbsp; </label>
          <DatePicker
            name="dateOfBirthUser"
            value={user.dateOfBirthUser || ""}
            // selected={moment(dateOfBirthUser)}
            // onChange={handleChangeDate}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
          <label>Grupo Sanguíneo: &nbsp; </label>
            <select name="rh">
              <option value="-">-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
        </div> */}

        <hr />
        <div className="form-group">
          {/* <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
              <input className="button_send" type="submit" defaultValue="Update Profile" />
            </div> */}
          <button
            style={{ borderRadius: '5px', fontSize: '20px' }}
            type="submit"
            className="btn btn-primary"
          >
            Guardar{' '}
            {loaders.updateLoad && (
              <Spinner
                style={{
                  width: '1.3rem',
                  height: '1.3rem',
                }}
                color="light"
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
export default FormProfileUser