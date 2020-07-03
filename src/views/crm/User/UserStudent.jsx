import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import useStudents from '../../../hooks/useStudents'
import { Row, Col } from 'reactstrap'
import { Studentslist } from 'components'
import { professors } from 'variables/university/professors.jsx'
import DocentesLiteral from '../../../components/common/DocentesLiteral/DocentesLiteral'
import { config } from '_config'

const UserStudent = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const { user } = useSelector((state) => state.authentication.user.user_data)
  console.log('user', user);

  const teacherIdIE = user.codeHeadquarters
  const API = `${config.apiEndPoint}/users/student/byheadquarter/${teacherIdIE}`
  const { students, loading } = useStudents(API)
  // console.log(students);
  
  const renderTeacherList = (fixed) => (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              {/* <div className="float-left">
                  <DocentesLiteral />
                </div> */}
            </div>

            <div className="col-xl-12">
              <section className="box ">
                <div className="content-body">
                  <div className="row">
                    <Studentslist
                      students={students}
                      loading={loading}
                    />
                  </div>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
  return <Fragment>{renderTeacherList()}</Fragment>
}

export default UserStudent
