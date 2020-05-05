import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import { Courseslist } from 'components'
import { courses } from 'variables/university/courses.jsx'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'

const api = `http://api.sige-edu.com:8000/api/courses/academiccharge/byteacher`

const Course = () => {
  const { teacher } = useSelector(
    (state) => state.authentication.user.user_data
  )

  const teacher_id = teacher.codeTeacher
  const [options, setOptions] = useState([])
  const [groups, setGroups] = useState(courses)
  const [data, setData] = useState([
    /* 
    {
      codeAcademicCharge: 1,
      groupDictate: {
        nameGroup: '10-01-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 28,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 2,
      groupDictate: {
        nameGroup: '10-02-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 41,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 3,
      groupDictate: {
        nameGroup: '10-03-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 2,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 4,
      groupDictate: {
        nameGroup: '10-04-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 35,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 16,
      groupDictate: {
        nameGroup: '8-01-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 50,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 17,
      groupDictate: {
        nameGroup: '8-02-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 29,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 18,
      groupDictate: {
        nameGroup: '8-03-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 26,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 39,
      groupDictate: {
        nameGroup: '8-01-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 50,
      },
      courseDictate: {
        codeCourse: 5,
        nameCourse: 'Ciencias Económicas y Politicas',
        areaCourse: 2,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 40,
      groupDictate: {
        nameGroup: '8-02-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 29,
      },
      courseDictate: {
        codeCourse: 5,
        nameCourse: 'Ciencias Económicas y Politicas',
        areaCourse: 2,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 41,
      groupDictate: {
        nameGroup: '8-03-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 26,
      },
      courseDictate: {
        codeCourse: 5,
        nameCourse: 'Ciencias Económicas y Politicas',
        areaCourse: 2,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 42,
      groupDictate: {
        nameGroup: '8-04-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 15,
      },
      courseDictate: {
        codeCourse: 5,
        nameCourse: 'Ciencias Económicas y Politicas',
        areaCourse: 2,
      },
      teacherDictate: 26,
    },
   */
  ])
  const [selectMateria, setSelectMateria] = useState('')

  //use a fect to get this variable
  /*  const data = [
    {
      codeAcademicCharge: 1,
      groupDictate: {
        nameGroup: '10-01-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 28,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 2,
      groupDictate: {
        nameGroup: '10-02-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 41,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 3,
      groupDictate: {
        nameGroup: '10-03-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 2,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 4,
      groupDictate: {
        nameGroup: '10-04-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 35,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 16,
      groupDictate: {
        nameGroup: '8-01-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 50,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 17,
      groupDictate: {
        nameGroup: '8-02-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 29,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 18,
      groupDictate: {
        nameGroup: '8-03-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 26,
      },
      courseDictate: {
        codeCourse: 1,
        nameCourse: 'Ciencias Naturales Biología',
        areaCourse: 1,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 39,
      groupDictate: {
        nameGroup: '8-01-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 50,
      },
      courseDictate: {
        codeCourse: 5,
        nameCourse: 'Ciencias Económicas y Politicas',
        areaCourse: 2,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 40,
      groupDictate: {
        nameGroup: '8-02-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 29,
      },
      courseDictate: {
        codeCourse: 5,
        nameCourse: 'Ciencias Económicas y Politicas',
        areaCourse: 2,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 41,
      groupDictate: {
        nameGroup: '8-03-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 26,
      },
      courseDictate: {
        codeCourse: 5,
        nameCourse: 'Ciencias Económicas y Politicas',
        areaCourse: 2,
      },
      teacherDictate: 26,
    },
    {
      codeAcademicCharge: 42,
      groupDictate: {
        nameGroup: '8-04-1-2020',
        journeyGroup: 1,
        headquarter: 1,
        managerGroup: 15,
      },
      courseDictate: {
        codeCourse: 5,
        nameCourse: 'Ciencias Económicas y Politicas',
        areaCourse: 2,
      },
      teacherDictate: 26,
    },
  ] */
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

  const handleChangeSelect = ({ value }) => {
    value == -1
      ? setGroups(allgroups(data))
      : setGroups(filterGroup(value, data))

    setSelectMateria(value)
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
        console.log('Depurado', depuredData)
        setData(depuredData)
        setGroups(allgroups(depuredData))
        filterMaterias(depuredData)
      })
      .catch((error) => console.log(error))
      .finally(() => {})
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
      }
      return result
    }, [])
    setOptions((options) => [...options, ...optionsfromarray])
  }

  useEffect(() => {
    getGroups(teacher_id)
  }, [])

  return (
    <div>
      <div className="content">
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
                        placeholder = 'Selecciona un curso...'
                        options={options}
                        label="Age"
                        defaultValue={options[0]}
                        onChange={handleChangeSelect}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-12">
                      <Courseslist
                        courses={groups}
                        user={{
                          teacher_id: teacher_id,
                          materia_id: selectMateria,
                        }}
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
