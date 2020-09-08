import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'reactstrap'
import { userActions } from '_accions'
import Modal from 'react-bootstrap/Modal'
import Icon from '@material-ui/core/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-solid-svg-icons'
import { SvgIcon } from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TelegramIcon from '@material-ui/icons/Telegram'
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
import SIGELOGO from 'assets/img/SIGEBirdOnly.png'
import contactUs1 from 'assets/img/contact_us1.jpg'

const AlertStyle = {
  margin: '0',
  textAlign: 'center',
  color: 'goldenrod',
  fontWeight: 'bold',
}

const LoginFormNew = (props) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const { email, password } = inputs
  const loggingIn = useSelector((state) => state.authentication.loggingIn)
  const message = useSelector((state) => state.alert.message)
  const dispatch = useDispatch()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs((inputs) => ({ ...inputs, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (email && password) {
      dispatch(userActions.login(email, password))

      //   dispatch(userActions.login(username, password));
      // if (email === 'demo@gmail.com' && password === 'demo') {
      //   localStorage.setItem('user', JSON.stringify({ email, password }))
      //   // eslint-disable-next-line
      //   history.push('/')
      // } else {
      //   alert('Datos de ingreso incorrectos')
      // }
    } else {
      alert('ingrese el documento del usuario')
    }
  }
  return (
    <div className="div-login-center">
      <Modal className="bordered" show={show} onHide={handleClose}>
        <Modal.Header className="header-modal-contact" closeButton>
          <img src={contactUs1} />
        </Modal.Header>
        <Modal.Body className="modal-body-contact">
          <p className="div-center text-bold font-contact">CONTACTANOS</p>
          <p>
            Whatsapp{' '}
            <SvgIcon style={{ color: 'green' }} component={WhatsAppIcon} />
            3172426080
          </p>
          <p>
            Telegram{' '}
            <SvgIcon style={{ color: '#1976d2' }} component={TelegramIcon} />{' '}
            @sigechat
          </p>
          <p>Para tener el gusto de atenderte, gracias!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="blue-back bordered" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <img className="size-logo" src={SIGELOGO} />
      </div>
      <Form onSubmit={handleSubmit}>
        <Col xs="12" className="col-form">
          <FormGroup>
            <Input
              type="number"
              name="email"
              placeholder="Ingresa tu numero de documento"
              step={1}
              onChange={handleChange}
              className="bordered"
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
              className="bordered"
            />
          </FormGroup>
        </Col>
        <Col xs="12" className="col-form">
          <p style={AlertStyle}>{message}</p>
        </Col>
        <Col xs="12" className="align-left">
          <FormGroup check className="cb">
            <Label check className="cb color-text-remember">
              <Input
                type="checkbox"
                name="remindme"
                className="bordered border-gray"
              />{' '}
              Recordarme
            </Label>
          </FormGroup>
        </Col>
        <Col xs="12">
          <Button className="button-register">
            {loggingIn && <Spinner size="sm" color="light" className="mr-2" />}
            Inicia sesión
          </Button>
        </Col>
        <Col xs="12">
          <p className="text-register">¿Aún no tienes cuenta?</p>
          <Button onClick={handleShow} className="button-register-green">
            Registrate aquí
          </Button>
        </Col>
      </Form>
    </div>
    // <div className="">
    //   <Button onClick={props.onHide} className="modal-close-button" size="sm">
    //     X
    //   </Button>
    //   <Container>
    //     <Form onSubmit={handleSubmit}>
    //       <Col xs="12" className="col-form">
    //         <FormGroup>
    //           <Input
    //             type="number"
    //             name="email"
    //             placeholder="Ingresa tu numero de cedula"
    //             step={1}
    //             onChange={handleChange}
    //           />
    //         </FormGroup>
    //       </Col>
    //       <Col xs="12" className="col-form">
    //         <FormGroup>
    //           <Input
    //             name="password"
    //             type="password"
    //             placeholder="Contraseña"
    //             onChange={handleChange}
    //           />
    //         </FormGroup>
    //       </Col>
    //       <Col xs="12" className="col-form">
    //         <p style={AlertStyle}>{message}</p>
    //       </Col>
    //       <Col xs="12">
    //         <FormGroup check className="cb">
    //           <Label check className="cb">
    //             <Input type="checkbox" name="remindme" /> Recordarme
    //           </Label>
    //         </FormGroup>
    //       </Col>
    //       <Col xs="12">
    //         <Button color="success" className="button-register">
    //           {loggingIn && <Spinner size="sm" color="info" />}
    //           Inicia sesión
    //         </Button>
    //       </Col>
    //       <Col xs="12">
    //         {/* <p className="form-login-p-forgotpass">
    //           ¿Has olvidado tu contraseña?
    //         </p> */}
    //       </Col>
    //       <Col xs="12">
    //         <hr className="line-separation" />
    //       </Col>
    //       <Col xs="12">
    //         {/* <p className="footer-form">
    //           ¿No tienes cuenta?
    //           <Link to="#">Regístrate</Link>
    //         </p> */}
    //       </Col>
    //     </Form>
    //   </Container>
    // </div>
  )
}

export default LoginFormNew
