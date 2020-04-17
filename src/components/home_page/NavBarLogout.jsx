import React from "react";
import { Container, Row, Col, NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import "../../assets/scss/zest-admin/components/_NavBarLogout.scss";

const NavBarLogout = (props) => {
  return (
    <div className="custom-header-container">
      <Container fluid={true}>
        <Row className="container-row-custom">
          <Col xs={2}>
            <div className="custom-header__brand">
              <img
                src="https://res.cloudinary.com/duyflkcyn/image/upload/v1578782555/WhatsApp_Image_2020-01-11_at_4-removebg-preview_dzramo.png"
                alt="Sige"
              />
            </div>
          </Col>
          <Col xs={{ size: 5, offset: 5 }}>
            <div className="custom-nav-container">
              <Nav className="header-custom-nav">
                <NavItem>
                  <Link to="#" className="header-custom-link" href="#">
                    Ayuda
                  </Link>
                </NavItem>
                <NavItem>
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
                </NavItem>
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
