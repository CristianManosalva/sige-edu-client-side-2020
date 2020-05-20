import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import { Courseslist } from 'components'
import Select from 'react-select'
import SelectCourseModal from '../../../modal/SelectCourseModal'
import { useDispatch, useSelector } from 'react-redux';

const api = `http://api.sige-edu.com:8000/api/courses/academiccharge/byteacher`;
const nameCourses = [];

const Course = () => {
  const { teacher } = useSelector(
    (state) => state.authentication.user.user_data
  )

  const teacher_id = teacher.codeTeacher
  const [options, setOptions] = useState([])
  const [groups, setGroups] = useState([])
  const [data, setData] = useState([])
  const [selectMateria, setSelectMateria] = useState('')

  function removeDuplicityAcademic(array) {
    let hash = Object.create(null)
    return array.reduce((result, value) => {
      if (
        !hash[value.groupDictate.nameGroup + value.courseDictate.nameCourse]
      ) {
        hash[
          value.groupDictate.nameGroup + value.courseDictate.nameCourse
        ] = true
        result.push(value)
      }

      return result
    }, [])
  }

  function filterGroup(code, array) {
    return array.reduce((result, { courseDictate, groupDictate }) => {
      if (courseDictate.codeCourse === code) {
        result.push(groupDictate)
      }
      return result
    }, [])
  }

  function allgroups(array) {
    return array.map(({ groupDictate }, key) => {
      return groupDictate
    })
  }

  function getGroups(teacher_id) {
    fetch(api + `/${teacher_id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let depuredData = removeDuplicityAcademic(data)
        // console.log('Depurado', depuredData)
        setData(depuredData)
        // console.log(depuredData);
        setGroups(allgroups(depuredData))
        filterMaterias(depuredData)
      })
      .catch((error) => console.log(error))
      .finally(() => { })
  }


  function filterMaterias(array) {
    let hash = Object.create(null)
    let optionsfromarray = array.reduce((result, value) => {
      if (!hash[value.courseDictate.codeCourse]) {
        hash[value.courseDictate.codeCourse] = true
        result.push({
          label: value.courseDictate.nameCourse,
          value: value.courseDictate.codeCourse,
        })
        let namescourses = `${value.courseDictate.nameCourse}`;
        let codecourses = `${value.courseDictate.codeCourse}`;
        nameCourses.push({
          key: codecourses,
          value: namescourses
        });
      }
      return result
    }, [])
    setOptions((options) => [...options, ...optionsfromarray])
  }

  const handleChangeSelect = ({ value }) => {
    value == -1
      ? setGroups(allgroups(data))
      : setGroups(filterGroup(value, data))

    setSelectMateria(value)
  }

  useEffect(() => {
    getGroups(teacher_id)
  }, [])

  return (
    
    <div>
      <div className="content">
        <SelectCourseModal />
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Grupos</h1>
              </div>
            </div>
            <div className="col-xl-12">
              <section className="box ">
                <header className="panel_header">
                  <h2 className="title float-left">Todos los cursos</h2>
                </header>
                <div className="content-body">
                  <div className="row">
                    <div className="col-4">
                      <Select
                        placeholder="Selecciona una Asignatura..."
                        options={options}
                        label="Age"
                        className="nameCourse"
                        defaultValue={options[0]}
                        onChange={handleChangeSelect}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="groupsCharge">

                      <Courseslist
                        courses={groups}
                        user={{
                          teacher_id: teacher_id,
                          materia_id: selectMateria,
                        }}
                        nameCourses={nameCourses}
                      />
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
}

export default Course
