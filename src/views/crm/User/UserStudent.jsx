import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col,  } from 'reactstrap'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { UsersTable, GlobalLoader, NotFoundInfo } from 'components'
import { config } from '_config'

const UserStudent = (props) => {
  const { user } = useSelector((state) => state.authentication.user.user_data)

  const [users, setUsers] = useState([])
  const [loader, setLoader] = useState(true)

  let teacher_id = ''
  if (user) {
    teacher_id = user.codeIE
  }

  const auxGetUsersList = (studenEnrrollmentArray) => {
    let auxArray = []
    try {
      auxArray = studenEnrrollmentArray
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
        `${config.apiEndPoint}/users/student/byIE/${teacher_id}`
      ).then((response) => {
        if (!response.ok) {
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

  // const API = `${config.apiEndPoint}/users/student/byheadquarter/${teacher_id}`
  // const { students, loading } = useStudents(API)
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
                  <div className="cui-container">
                    {loader && <GlobalLoader />}
                    {users.length > 0 && <UsersTable users={users} />}
                    {!loader && users.length <= 0 && <NotFoundInfo />}
                  </div>
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
  return <Fragment>{renderTeacherList()}</Fragment>
}

export default UserStudent
