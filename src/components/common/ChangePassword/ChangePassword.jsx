import React, { useState } from 'react'
import { Label, Col, Row, Input, Button, Spinner } from 'reactstrap'
// import { useDispatch } from 'react-redux'
import { config } from '_config'
// import { userActions } from '_accions'

const ChangePassword = ({ user, toggle }) => {
  const [inputs, setInputs] = useState({
    password: '',
    confirmPassword: '',
  })
  const [errorForm, setErrorForm] = useState('')
  const [match, setMatch] = useState(true)
  const [submited, setSubmited] = useState(false)
  const [loading, setLoading] = useState(false)
  const [exito, setExito] = useState(false)
  //   const dispatch = useDispatch()

  const handleChange = (e) => {
    setSubmited(false)
    setMatch(true)
    setErrorForm('')
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }

  const validation = () => {
    if (password.length < 6) {
      setErrorForm('La contraseña debe tener al menos 6 caracteres')
    } else if (confirmPassword != password) {
      setMatch(false)
    } else if (user) {
      changePassword(user.documentIdUser, password)
    }
  }

  const changePassword = (user_id, password) => {
    setLoading(true)
    fetch(`${config.apiEndPoint}/users/changepassword/${user_id}/`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        passwordUser: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setLoading(false)
          setExito(true)
          setTimeout(() => toggle(), 1000)
          //   toggle()
          //   dispatch(userActions.logout())
        }
      })
      .catch((error) => {
        console.log(error)
        alert(
          'Ups!! ocurrio un problema, contacta al soporte de SIGE para actualizar la contraseña'
        )
      })
  }

  const onSubmit = () => {
    setSubmited(true)
    validation()
  }
  const { password, confirmPassword } = inputs

  return (
    <Row>
      <Col xs={12} className="form-group">
        <Label for="password">Escribe tu nueva contraseña</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </Col>
      {errorForm.length > 0 && (
        <Col xs={12} className="form-group">
          <span style={{ color: 'red' }}>{errorForm}</span>
        </Col>
      )}
      <Col xs={12} className="form-group">
        <Label for="confirmPassword">Repite tu nueva contraseña</Label>
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleChange}
        />
      </Col>
      {submited && !match && confirmPassword.length > 0 && (
        <Col xs={12} className="form-group">
          <span style={{ color: 'red' }}>Las contraseñas no coinciden</span>
        </Col>
      )}
      {exito && (
        <Col xs={12} className="form-group">
          <span style={{ color: 'green' }}>
            Contraseña actualizada con exito
          </span>
        </Col>
      )}
      <Col xs={12} style={{ textAlign: 'center' }}>
        <Button color="primary" onClick={onSubmit} size="sm">
          {loading && <Spinner className="mr-1" size="sm" color="light" />}
          Cambiar Contraseña
        </Button>
        <Button color="secundary" onClick={toggle} size="sm">
          Cancelar
        </Button>
      </Col>
    </Row>
  )
}

export default ChangePassword
