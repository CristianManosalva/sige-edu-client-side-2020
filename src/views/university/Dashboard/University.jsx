import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Table, Button } from 'reactstrap'
import { useSelector } from 'react-redux'
import { } from 'components'
import Inicio from '../../../components/common/InicioLiteral/InicioLiteral.jsx'
import Modal from 'react-bootstrap/Modal'
import {} from 'components'
import { SvgIcon } from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TelegramIcon from '@material-ui/icons/Telegram'
import creating from 'assets/img/creating.jpg'
import Studentslist from '../../../components/university/Studentslist/Studentslist'
import { students } from '../../../variables/university/students'
import { inicioDiv } from '../../../components/university/Studentslist/stylesStudentsList'
let user = JSON.parse(localStorage.getItem('userv2'))
let codeTeacher = ''
try {
  codeTeacher = user.user_data.teacher.codeTeacher
} catch (error) {
  codeTeacher = ''
}
// var codeTeacher = user.user_data.teacher.codeTeacher;

const API = `http://api.sige-edu.com:8000/api/enrollments/enrollment/byGroupmanager/${codeTeacher}`

var IMGDIR = process.env.REACT_APP_IMGDIR
var studentManagerGroup = localStorage.getItem('studentManagerGroup')


const University = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { teacher } = useSelector((state) => state.authentication.user.user_data)
  const teacher_id = teacher.codeTeacher
  const API = `http://api.sige-edu.com:8000/api/enrollments/enrollment/byGroupmanager/${teacher_id}`
  const { students, loading } = useStudents(API)

  const renderStudentList = (fixed) => (
    <div>
      <div className="content">
        <div className="page-title">
          <Inicio />
        </div>
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
            </div>
            {/* <div className="row margin-0">
              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="db_box iconbox">
                  <div className="widdata">
                    <i className="widicon i-notebook icon-lg icon-accent"></i>
                    <h3 className="widtitle">Horario</h3>
                    <p className="widtag">Lunes 20 de Abril</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="db_box iconbox">
                  <div className="widdata">
                    <i className="widicon i-docs icon-lg icon-accent"></i>
                    <h3 className="widtitle">Observador</h3>
                    <p className="widtag">12 nuevas</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="db_box iconbox">
                  <div className="widdata">
                    <i className="widicon i-people icon-lg icon-accent"></i>
                    <h3 className="widtitle">Comunidad</h3>
                    <p className="widtag">Educativa</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="db_box iconbox">
                  <div className="widdata">
                    <i className="widicon i-wallet icon-lg icon-accent"></i>
                    <h3 className="widtitle">Soy Financiero</h3>
                    <p className="widtag">100 U-coin</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                <div className="db_box iconbox">
                  <div className="widdata">
                    <i className="widicon i-puzzle icon-lg icon-accent"></i>
                    <h3 className="widtitle">Libro Bolsillo</h3>
                    <p className="widtag">1 actualización</p>
                  </div>
                </div>
              </div>

            </div> */}
            <div className="col-lg-12 col-xl-12 col-md-12">
              <section className="box ">
                <header className="panel_header">
                  <h2 className="title float-left">Estudiantes</h2>
                </header>
                <div className="content-body">
                  <Studentslist students={students} loading={loading} />
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
  return (
    <Fragment>
      {renderStudentList()}
    </Fragment>
  )
}
export default University
