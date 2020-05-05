import React, { useState } from 'react'
import { Container, Modal } from 'reactstrap'
// import { Link } from "react-router-dom";
import { news, clients, contact } from 'api/fakedata'
import {
  NavBarLogout,
  NewsCarouselItem,
  Carousel,
  ClientCarouselItem,
  ContactIcon,
  LoginForm,
} from 'components'

const Home = () => {
  const [modal, setModal] = useState(true)
  const toggle = () => setModal(!modal)
  return (
    <Container className="main-home-container" fluid={true}>
      <Modal isOpen={modal} toggle={toggle} centered={true}>
        <LoginForm onHide={toggle} />
      </Modal>
      <NavBarLogout onHide={toggle} />
      <div className="home-image"></div>
      <div className="discover-sige">
        <Container fluid={true}>
          <h2>Descubre SIGE</h2>
          <Carousel>
            {news.map((value, key) => {
              return (
                <NewsCarouselItem
                  key={key}
                  urlImage={value.urlImage}
                  title={value.title}
                />
              )
            })}
          </Carousel>
        </Container>
      </div>
      <div className="videos-section">
        <div className="videos-section-container">
          <div className="videos-section-container__video">
            {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8r95xn7XTyo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              title="show-sige"
            ></iframe> */}
          </div>
          <div className="videos-section-container__title">
            {/* <p>
              Vea cómo SIGE <br />
              Te conecta
              <br />
              con tu
              <br />
              comunidad
              <br />
              educativa
            </p> */}
          </div>
        </div>
      </div>
      <div className="clients">
        <Container fluid={true}>
          <h2>
            Estarás en buena
            <br />
            Compañía
          </h2>
          <Carousel>
            {clients.map((value, key) => {
              return (
                <ClientCarouselItem
                  key={key}
                  urlImage={value.urlImage}
                  title={value.title}
                />
              )
            })}
          </Carousel>
        </Container>
      </div>
      <footer className="footer">
        <div className="contact-section">
          {contact.map((value, key) => {
            return (
              <ContactIcon
                url={value.url}
                icon={value.icon}
                name={value.name}
                key={key}
              />
            )
          })}
        </div>
        <div className="download-section">
          <a href="#ww" className="download-section__url">
            <img
              className="download-section__imagen--app"
              src="https://i.pinimg.com/originals/09/f6/3d/09f63d458e7a50364610224cb92df14c.png"
              alt=""
            />
          </a>
          <a href="#ww" className="download-section__url">
            <img
              className="download-section__imagen--google"
              src="https://res.cloudinary.com/duyflkcyn/image/upload/v1587064666/SIGE/Icons/googleplay.png"
              alt=""
            />
          </a>
        </div>
      </footer>
    </Container>
  )
}

export default Home
