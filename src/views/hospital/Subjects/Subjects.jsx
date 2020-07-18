import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import { Courseslist, SubjectCard } from 'components'

import Select from 'react-select'
import SelectCourseModal from '../../../modal/SelectCourseModal'
import { /*  useDispatch, */ useSelector } from 'react-redux'
import GruposLiteral from '../../../components/common/GruposLiteral/GruposLiteral'
import { config } from '_config'
import './style/subjects.css'

const nameCourses = []
var IMGDIR = process.env.REACT_APP_IMGDIR

const Subjects = () => {
  const { student } = useSelector(
    (state) => state.authentication.user.user_data
  )
  const [courses, setCourses] = useState([])
  // const student_id = student.codeStudent

  const getCourses = () => {
    fetch(
      `${config.apiEndPoint}/courses/academiccharge/bystudent/${student.codeStudent}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCourses(data)
      })
  }
  useEffect(() => {
    getCourses()
  }, [])

  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            {/* <div className="page-title">
              <div className="float-left">
                <GruposLiteral />
              </div>
            </div> */}
            <div className="col-xl-12">
              <section className="box ">
                {/* <header className="panel_header">
                  <h2 className="title float-left">Todos los cursos</h2>
                </header> */}
                <div className="content-body mt-4 pt-2">
                  <section className="subjects_list_secction">
                    <div className="cui-container subjects_list_container">
                      {courses.map((value, key) => (
                        <SubjectCard
                          subject={value}
                          key={key}
                          urlImage={IMGDIR + `/images/cards/${key}.jpeg`}
                        />
                      ))}
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Subjects
