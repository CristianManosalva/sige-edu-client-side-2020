import React, { useState } from 'react'
import {
  Container,
  Col,
  FormGroup,
  Input,
  Button,
  Label,
  Form,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { history } from '_helpers'

const LoginForm = (props) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const { email, password } = inputs

  function handleChange(e) {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (email && password) {
      //   dispatch(userActions.login(username, password));
      if (email === 'demo@gmail.com' && password === 'demo') {
        localStorage.setItem('user', JSON.stringify({ email, password }))
        // eslint-disable-next-line
        history.push('/')
      } else {
        alert('Datos de ingreso incorrectos')
      }
    } else {
      alert('Por favor ingrese los datos necesarios')
    }
  }
  return (
    <div className="formsigncontainer">
      <Button onClick={props.onHide} className="modal-close-button" size="sm">
        X
      </Button>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Col xs="12" className="col-form">
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Dirección de Correo Electronico"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col xs="12" className="col-form">
            <FormGroup>
              <Input
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col xs="12">
            <FormGroup check className="cb">
              <Label check className="cb">
                <Input type="checkbox" name="remindme" /> Recordarme
              </Label>
            </FormGroup>
          </Col>
          <Col xs="12">
            <Button color="success" className="button-register">
              Inicia sesión
            </Button>
          </Col>
          <Col xs="12">
            <p className="form-login-p-forgotpass">
              ¿Has olvidado tu contraseña?
            </p>
          </Col>
          <Col xs="12">
            <hr className="line-separation" />
          </Col>
          <Col xs="12">
            <p className="footer-form">
              ¿No tienes cuenta?
              <Link to="#">Regístrate</Link>
            </p>
          </Col>
        </Form>
      </Container>
    </div>
  )
}

export default LoginForm
