import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'reactstrap'
import { userActions } from '_accions'
import Modal from 'react-bootstrap/Modal'
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      alert('Por favor ingrese su cedula y contraseña')
    }
  }
  return (
    <div className="div-login-center">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="color-blue-sige">Contactanos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-contact"><p>Puedes contactarnos al Whatsapp <i class="fab fa-whatsapp"></i> 3172426080 para tener el gusto de atenderte!</p> 
        <p>Gracias por confiar en SIGE</p></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <img className="size-logo" src={SIGELOGO} />
      </div>
      <Form onSubmit={handleSubmit}>
           <Col xs="12" className="col-form">
             <FormGroup >
               <Input
                type="number"
                name="email"
                placeholder="Ingresa tu numero de cedula"
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
          <Col xs="12" className="align-left">
            <FormGroup check className="cb">
              <Label check className="cb color-text-remember">
                <Input type="checkbox" name="remindme" className="bordered border-gray" /> Recordarme
              </Label>
            </FormGroup>
          </Col>
          <Col xs="12">
             <Button  className="button-register">
               {loggingIn && <Spinner size="sm" color="info" />}
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
