import React ,{ useState } from "react";
import { Container, Row, Col, NavItem, Nav,Button, } from "reactstrap";
import { Link } from "react-router-dom";
import "../../assets/scss/zest-admin/components/_NavBarLogout.scss";
import SIGELOGONAVBAR from 'assets/img/SIGEONLY.png'
import contactUs1 from 'assets/img/contact_us1.jpg'
import { SvgIcon } from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TelegramIcon from '@material-ui/icons/Telegram'
import Modal from 'react-bootstrap/Modal'

const NavBarLogout = (props) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div className="custom-header-container-new">
      <Modal className="bordered" show={show} onHide={handleClose}>
        <Modal.Header className="header-modal-contact" closeButton>
          <img  src={contactUs1} />
         
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

      <Container fluid={true}>
        <Row className="container-row-custom">
          <Col xs={2}>
            <div className="custom-header__brand">
              <a href="/home">
              <img
                src={SIGELOGONAVBAR}
                alt="Sige"
                
              />
              </a>
              
            </div>
          </Col>
          <Col xs={{ size: 5, offset: 5 }}>
            <div className="custom-nav-container">
              <Nav className="header-custom-nav">
                <NavItem>
                  <Link to="#"onClick={handleShow}  className="header-custom-link" href="#">
                    Ayuda
                  </Link>
                </NavItem>
                {/* <NavItem>
                  <Link to="#" className="header-custom-link" href="#">
                    Regístarte
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="header-custom-link"
                    href="#"
                    onClick={props.onHide}
                    to="#"
                  >
                    Inicia sesíon
                  </Link>
                </NavItem> */}
              </Nav>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <ModalForms
        login={this.state.login}
        showModal={this.state.modalShow}
        onHide={this.downModal}
        forms={this.state.forms}
        onChange={this.handleChange}
      /> */}
    </div>
  );
};

export default NavBarLogout;
