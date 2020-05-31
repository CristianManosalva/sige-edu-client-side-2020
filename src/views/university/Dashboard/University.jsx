import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Table, Button } from 'reactstrap'
<<<<<<< HEAD
import Modal from 'react-bootstrap/Modal'
import {} from 'components'
import { SvgIcon } from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TelegramIcon from '@material-ui/icons/Telegram'
import creating from 'assets/img/creating.jpg'
import useStudents from '../../../hooks/useStudents'
import Studentslist from '../../../components/university/Studentslist/Studentslist'
import { students } from '../../../variables/university/students'
import Inicio from '../../../components/common/Inicio/Inicio.jsx'
import { inicioDiv } from '../../../components/university/Studentslist/stylesStudentsList'
// let user = JSON.parse(localStorage.getItem('userv2'))
// var codeTeacher = user.user_data.teacher.codeTeacher;

const API =
  'http://api.sige-edu.com:8000/api/enrollments/enrollment/byGroupmanager/${codeTeacher}'

var IMGDIR = process.env.REACT_APP_IMGDIR
var studentManagerGroup = localStorage.getItem('studentManagerGroup')
=======
import { useSelector } from 'react-redux'
import { } from 'components'
import useStudents from '../../../hooks/useStudents'
import {Studentslist} from 'components'
import Inicio from '../../../components/common/InicioLiteral/InicioLiteral.jsx'
>>>>>>> 9be0a6ab008c8f067265b76fbe62d43fac1cbedd

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
<<<<<<< HEAD

  return <Fragment>{renderStudentList()}</Fragment>
=======
  return (
    <Fragment>
      {renderStudentList()}
    </Fragment>
  )
>>>>>>> 9be0a6ab008c8f067265b76fbe62d43fac1cbedd
}
export default University
