import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'

import { ActivityItem } from 'components'

var IMGDIR = process.env.REACT_APP_IMGDIR

const CourseProfile = (props) => {
  const { id_teacher, id_group } = props.match.params
  const [secctions, setSecctions] = useState([
    {
      codeSecction: 1,
      nameSecction: 'El renacimiento',
      descriptionSecction: 'Leer el documento adjunto y resolver las preguntas',
      uploadOnSecction: '2020-01-01',
      workspaceSecction: 17,
    },
    {
      codeSecction: 1,
      nameSecction: 'El renacimiento',
      descriptionSecction: 'Leer el documento adjunto y resolver las preguntas',
      uploadOnSecction: '2020-01-01',
      workspaceSecction: 17,
    },
  ])

  const actividades = [
    {
      codeWorkSpace: 17,
      nameWorkSpace: 'Educación Artística y Cultural-10-01-1-2020',
      descriptionWorkSpace: 'Educación Artística y Cultural 10-01-1-2020',
      academicCharge: {
        codeAcademicCharge: 17,
        teacherDictate: 109,
        courseDictate: {
          codeCourse: 4,
          nameCourse: 'Educación Artística y Cultural',
          areaCourse: 3,
        },
        groupDictate: '10-01-1-2020',
        hourlyintensity: 1,
        schedule: [],
      },
      secctions: [
        {
          codeSecction: 1,
          nameSecction: 'El renacimiento',
          descriptionSecction:
            'Leer el documento adjunto y resolver las preguntas',
          uploadOnSecction: '2020-01-01',
        },
      ],
    },
    {
      codeWorkSpace: 228,
      nameWorkSpace: 'Educación Artística y Cultural-10-01-1-2020',
      descriptionWorkSpace: 'Educación Artística y Cultural 10-01-1-2020',
      academicCharge: {
        codeAcademicCharge: 228,
        teacherDictate: 109,
        courseDictate: {
          codeCourse: 4,
          nameCourse: 'Educación Artística y Cultural',
          areaCourse: 3,
        },
        groupDictate: '10-01-1-2020',
        hourlyintensity: 1,
        schedule: [],
      },
      secctions: [],
    },
  ]

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
            {secctions.map((value, key) => {
              return <ActivityItem activity={value} key={key} />
            })}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CourseProfile
