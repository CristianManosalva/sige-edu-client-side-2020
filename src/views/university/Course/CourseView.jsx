import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'

import { ActivityItem } from 'components'

var IMGDIR = process.env.REACT_APP_IMGDIR

const CourseProfile = (props) => {
  const { id_teacher, id_group, id_materia } = props.match.params
  // console.log('Los parametros: ', props.match.params)
  const [secctions, setSecctions] = useState([])

  function removeDuplicityWork(array, codeMateria) {
    let hash = Object.create(null)
    let filter = array.reduce((result, value) => {
      if (!hash[value.nameWorkSpace]) {
        //console.log(value.nameWorkSpace)
        hash[value.nameWorkSpace] = true
        result.push(value)
      }
      return result
    }, [])

    return filter.reduce((result, value) => {
      if (value.academicCharge.courseDictate.codeCourse == codeMateria) {
        result.push(value)
      }
      return result
    }, [])
  }

  function getWorkSpaces(teacher_id, grupo_id, codeMateria) {
    fetch(
      `${config.apiEndPoint}/workspaces/courses/${teacher_id}/${grupo_id}`,
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
        let depuredData = removeDuplicityWork(data, codeMateria)
        let codeWorkSpace = depuredData && depuredData[0].secctions
        // setSecctions((selected) => ({ ...selected, sWorkSpace: codeWorkSpace }))
        setSecctions(codeWorkSpace)
      })
      .catch((error) => console.log(error))
      .finally(() => {})
  }

  useEffect(() => {
    getWorkSpaces(id_teacher, id_group, id_materia)
  }, [])

  return (
    <div>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Actividades</h1>
              </div>
            </div>
            {secctions.length ? (
              secctions.map((value, key) => {
                return <ActivityItem activity={value} key={key} />
              })
            ) : (
              <p>
                No Tienes ninguna actividad con este grupo para esta materia
              </p>
            )}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CourseProfile
