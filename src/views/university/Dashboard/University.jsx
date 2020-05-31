import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Table, Button } from 'reactstrap'
import { useSelector } from 'react-redux'
import { } from 'components'
import useStudents from '../../../hooks/useStudents'
import {Studentslist} from 'components'
import Inicio from '../../../components/common/InicioLiteral/InicioLiteral.jsx'

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
  return (
    <Fragment>
      {renderStudentList()}
    </Fragment>
  )
}
export default University
