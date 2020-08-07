import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import { UsersTable, GlobalLoader, NotFoundInfo } from 'components'
import { config } from '_config'
// import Inicio from '../../../components/common/InicioLiteral/InicioLiteral.jsx'
// import useStudents from '../../../hooks/useStudents'
// import { get } from 'jquery'
// import Studentslist from '../../../components/university/Studentslist/Studentslist'

const University = (props) => {
  const { teacher } = useSelector(
    (state) => state.authentication.user.user_data
  )
  const [users, setUsers] = useState([])
  const [loader, setLoader] = useState(true)

  let teacher_id = ''
  if (teacher) {
    teacher_id = teacher.codeTeacher
  }

  const auxGetUsersList = (studenEnrrollmentArray) => {
    let auxArray = []
    try {
      auxArray = studenEnrrollmentArray.map(
        ({ studentEnrollment }) => studentEnrollment.user
      )
    } catch (error) {
      console.log('Error in auxGetUsersList: ', error)
    }

    return auxArray
  }

  /* calling api */
  const getUsers = async () => {
    setLoader(true)
    try {
      let user = await fetch(
        `${config.apiEndPoint}/enrollments/enrollment/byGroupmanager/${teacher_id}`
      ).then((response) => {
        if (!response.ok) {
          console.log(response)
          throw new Error('Falling fect getUsers')
        }
        return response.json()
      })
      setUsers(auxGetUsersList(user))
    } catch (error) {
      console.log(error)
    }
    setLoader(false)
    return []
  }
  /* end calling api */

  useEffect(() => {
    getUsers()
  }, [])

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
                  {/* <div className="cui-container"> */}
                  {loader && <GlobalLoader />}
                  {users.length > 0 && <UsersTable users={users} />}
                  {!loader && users.length <= 0 && <NotFoundInfo />}
                  {/* </div> */}
                  {/* <Studentslist students={students} loading={loading} />
                   */}
                  {/* {console.log(students)} */}
                  {/* {console.log(auxGetUsersList(students))} */}
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
