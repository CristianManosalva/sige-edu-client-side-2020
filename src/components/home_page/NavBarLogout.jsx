import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarLogout = () => {
  return (
    <div className="navbar-container">
      <Navbar className="Navbar" expand="lg">
        <Container fluid={true}>
          <Navbar.Brand className="navbar-brand" href="#home">
            <img
              src="https://res.cloudinary.com/duyflkcyn/image/upload/v1578782555/WhatsApp_Image_2020-01-11_at_4-removebg-preview_dzramo.png"
              alt="Sige"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="#" className="navbar-link nav-link-item">
                Ayuda
              </Link>
              <Link to="#" className="navbar-link nav-link-item">
                Regístarte
              </Link>
              <Link to="#" className="navbar-link nav-link-item">
                Inicia sesíon
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* <ModalForms
        login={this.state.login}
        showModal={this.state.modalShow}
        onHide={this.downModal}
        forms={this.state.forms}
        onChange={this.handleChange}
      /> */}
      </Navbar>
    </div>
  );
};

export default NavBarLogout;
