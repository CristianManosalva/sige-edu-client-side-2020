import React, { useState } from 'react'
import { Row, Col, Table, Button } from 'reactstrap'
import {} from 'components'
import Modal from 'react-bootstrap/Modal'
import creating from 'assets/img/creating.jpg'
import { SvgIcon } from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TelegramIcon from '@material-ui/icons/Telegram'
var IMGDIR = process.env.REACT_APP_IMGDIR

const University = (props) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <Modal className="bordered" show={show} onHide={handleClose}>
        <Modal.Header className="header-modal-contact" closeButton>
          <img src={creating} />
        </Modal.Header>
        <Modal.Body className="modal-body-contact">
          <p className="div-center text-bold font-contact">ESTAMOS CONSTRUYENDO...</p>
          <p>Disculpa las molestias, estamos trabajando en esta funcionalidad, pero puedes contactarnos al </p>
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
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Inicio</h1>
              </div>
            </div>

            <div className="row margin-0">
              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="db_box iconbox">
                  <div onClick={handleShow} className="widdata">
                    <i className="widicon i-notebook icon-lg icon-accent"></i>
                    <h3 className="widtitle">Horario</h3>
                    {/* <p className="widtag">Lunes 20 de Abril</p> */}
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="db_box iconbox">
                  <div onClick={handleShow} className="widdata">
                    <i className="widicon i-docs icon-lg icon-accent"></i>
                    <h3 className="widtitle">Observador</h3>
                    {/* <p className="widtag">12 nuevas</p> */}
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="db_box iconbox">
                  <div onClick={handleShow} className="widdata">
                    <i className="widicon i-people icon-lg icon-accent"></i>
                    <h3 className="widtitle">Comunidad</h3>
                    <p className="widtag">Educativa</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="db_box iconbox">
                  <div onClick={handleShow} className="widdata">
                    <i className="widicon i-wallet icon-lg icon-accent"></i>
                    <h3 className="widtitle">Soy Financiero</h3>
                    <p className="widtag">100 U-coin</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="db_box iconbox">
                  <div onClick={handleShow} className="widdata">
                    <i className="widicon i-puzzle icon-lg icon-accent"></i>
                    <h3 className="widtitle">Libro Bolsillo</h3>
                    <p className="widtag">1 actualización</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-xl-12 col-md-12 col-12">
              <section className="box ">
                <header className="panel_header">
                  <h2 className="title float-left">Estudiantes</h2>
                </header>
                <div className="content-body">
                  <div className="row">
                    <div className="col-12">
                      <Table hover responsive>
                        <thead>
                          <tr>
                            <th>Nombre</th>
                            <th>Jornada</th>
                            <th>Puntaje</th>
                            <th>Estado</th>
                            <th>Avance</th>
                            <th>Materias</th>
                            <th>Ultima Conexión</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* <tr>
                              <td className="user-inline-img">
                                <img
                                  src={IMGDIR + "/images/profile/avatar-4.jpg"}
                                  alt="user avatar"
                                  className="avatar-image img-inline"
                                />
                                Tim May
                              </td>
                              <td>Tarde</td>
                              <td>33412</td>
                              <td>
                                <span className="badge">Approved</span>
                              </td>
                              <td>
                                <span className="playlist_song1">
                                  <div
                                    className="chart-area"
                                    style={{
                                      height: 40 + "px",
                                      width: 80 + "px",
                                    }}
                                  >
                                    <Bar
                                      data={playlistCharts5.data}
                                      options={playlistCharts5.options}
                                    />
                                  </div>
                                </span>
                              </td>
                              <td>Ingles</td>
                              <td>11 April 2019</td>
                            </tr> */}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default University
