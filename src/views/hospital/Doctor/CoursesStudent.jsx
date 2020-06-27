import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import useCoursesStudent from 'hooks/useCoursesStudent'
import { useSelector } from 'react-redux'
import CarouselCoursesStudent from 'components/home_page/CarouselCoursesStudent'
import { Carousel } from 'components'
import { config } from '_config'
import SkeletonTeacherHome from '../../../components/skeleton/SkeletonTeacherHome'
import ListOfActivityCards from 'components/hospital/Doctorslist/ListOfActivityCards'

var IMGDIR = process.env.REACT_APP_IMGDIR
const CoursesStudent = (props) => {
  const { student } = useSelector(
    (state) => state.authentication.user.user_data
  )
  const student_id = student.codeStudent
  const API = `${config.apiEndPoint}/courses/academiccharge/bystudent/${student_id}`
  const { courses, loading } = useCoursesStudent(API)
  console.log('loading..', loading)

  const [nameCourse, setNameCourse] = useState(null)
  const [activities, setActivities] = useState([])
  const [sections, setSections] = useState([])
  const [loadingActivity, setLoadingActivity] = useState(false)

  const getActvitiesByCourse = (
    idCourse,
    idTeacher,
    idGroup,
    title,
    codeAcademicCharge
  ) => {
    fetch(
      // `http://localhost:3000/student`,
      `${config.apiEndPoint}/secctions/secction/byacademicharge/${codeAcademicCharge}`,
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
        setSections(data)
        setActivities(data)
        setLoadingActivity(false)
      })
      .catch((error) => {
        console.log(error)
      })
    fetch(
      // `http://localhost:3000/student`,
      `${config.apiEndPoint}/courses/academiccharge/namecourse/${codeAcademicCharge}`,
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
        setNameCourse(data[0].courseDictate.nameCourse)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const renderCoursesStudentList = (fixed) => (
    <div>
      <div className="content">
        <h1 className="title">Asignaturas</h1>
        <Row>
          <Col xs={12} md={12}>
            <div className="col-xl-12">
              <section className="box ">
                <div className="content-body">
                  <div className="col-12">
                    <div className="row">
                      <Carousel>
                        {courses.map((courses, key) => {
                          return (
                            <CarouselCoursesStudent
                              setActivities={getActvitiesByCourse}
                              key={key}
                              urlImage={IMGDIR + `/images/cards/${key}.jpeg`}
                              courses={courses}
                              loading={loading}
                            />
                          )
                        })}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Col>
          <Col xs={12} md={12}>
            <div className="col-xl-12">
              <section className="box ">
                <div className="content-body">
                  <div className="col-12">
                    <div className="row">
                      {sections.length > 0 ? (
                        sections.map((value, key) => {
                          return (
                            <div key={key}>
                              <ListOfActivityCards
                                value={value}
                                activities={activities[key]}
                                student_id={student_id}
                                nameCourse={nameCourse}
                              />
                            </div>
                          )
                        })
                      ) : (
                        <SkeletonTeacherHome />
                      )}
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
  return <Fragment>{renderCoursesStudentList()}</Fragment>
}
export default CoursesStudent
