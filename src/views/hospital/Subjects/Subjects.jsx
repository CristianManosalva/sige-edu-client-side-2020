import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import { SubjectCard } from 'components'
import { config } from '_config'
import './style/subjects.css'

var IMGDIR = process.env.REACT_APP_IMGDIR

const Subjects = (props) => {
  const { student } = useSelector(
    (state) => state.authentication.user.user_data
  )
  const [courses, setCourses] = useState([])
  const [loader, setLoader] = useState(true)

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
        setTimeout(() => {
          setLoader(false)
        }, 100)
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
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Asignaturas</h1>
              </div>
            </div>
            <div className="col-xl-12">
              <section className="box ">
                {/* <header className="panel_header">
                  <h2 className="title float-left">Todos los cursos</h2>
                </header> */}
                <div className="content-body pt-5">
                  <section className="subjects_list_secction">
                    <div className="cui-container subjects_list_container">
                      {loader && (
                        <div
                          style={{
                            width: '100%',
                            height: '100',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                          }}
                        >
                          <Loader
                            type="BallTriangle"
                            color="#1EAEDF"
                            secondaryColor="Green"
                            height="100"
                            width="100"
                          />
                          <span
                            style={{
                              fontSize: '1.3rem',
                              marginTop: '.8rem',
                              color: '#1EAEDF',
                            }}
                          >
                            Cargando...
                          </span>
                        </div>
                      )}
                      {!loader &&
                        courses.length > 0 &&
                        courses.map((value, key) => (
                          <SubjectCard
                            subject={value}
                            key={key}
                            urlImage={IMGDIR + `/images/cards/${key}.jpeg`}
                          />
                        ))}
                      {courses.length == 0 && !loader && (
                        <div
                          style={{
                            width: '100%',
                            height: '100',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '1rem',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '1.3rem',
                              marginTop: '.8rem',
                              textAlign: 'center',
                            }}
                          >
                            No Tienes ninguna asingnatura registrada, comunicate
                            con el soporte de Sige
                          </span>
                        </div>
                      )}
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
