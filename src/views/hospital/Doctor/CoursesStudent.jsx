import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import config from '_config'
import useCoursesStudent from 'hooks/useCoursesStudent'
import { useSelector } from 'react-redux'
import CarouselCoursesStudent from 'components/home_page/CarouselCoursesStudent'
import { Carousel } from 'components'
import SkeletonTeacherHome from '../../../components/skeleton/SkeletonTeacherHome'
import ListOfActivityCards from 'components/hospital/Doctorslist/ListOfActivityCards'

var IMGDIR = process.env.REACT_APP_IMGDIR
const CoursesStudent = (props) => {
  const { student } = useSelector(
    (state) => state.authentication.user.user_data
  )
  const student_id = student.codeStudent
  const API = `http://api.sige-edu.com:8000/api/courses/academiccharge/bystudent/${student_id}`
  const { courses, loading } = useCoursesStudent(API)
  const nameCourse =  ''
  const [activities, setActivities] = useState([])
  const [sections, setSections] = useState([])
  const [loadingActivity, setLoadingActivity] = useState(false);

  const getActvitiesByCourse = (idCourse, idTeacher, idGroup, title, codeAcademicCharge) => {
    
    fetch(
      // `http://localhost:3000/student`,
      `http://api.sige-edu.com:8000/api/workspaces/coursedetailteacher/${codeAcademicCharge}`,
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
        setSections(data[0].secctions)
        setActivities(data[0])
        setLoadingActivity(false)

      })
      .catch((error) => {
        console.log(error)
      })
      // console.log(activities)
      
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
                      {sections.length > 0 ? sections.map((value, key) => {

                        return <div key={key}><ListOfActivityCards value={value} activities={activities} student_id={student_id}/>
                        {/* {console.log('activities.academicCharge',activities)} */}
                        
                        </div>
                      }) : <SkeletonTeacherHome />}
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
