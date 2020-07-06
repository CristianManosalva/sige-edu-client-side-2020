import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, Table, Button } from 'reactstrap'
import { useSelector } from 'react-redux'
import {} from 'components'
import { config } from '_config'
import Inicio from '../../../components/common/InicioLiteral/InicioLiteral.jsx'
import useStudents from '../../../hooks/useStudents'
import Studentslist from '../../../components/university/Studentslist/Studentslist'

const University = (props) => {
  const { teacher } = useSelector(
    (state) => state.authentication.user.user_data
  )
  const teacher_id = teacher.codeTeacher
  const API = `${config.apiEndPoint}/enrollments/enrollment/byGroupmanager/${teacher_id}`
  const { students, loading } = useStudents(API)

  const renderStudentList = (fixed) => (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title"></div>
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
  return <Fragment>{renderStudentList()}</Fragment>
}
export default University
