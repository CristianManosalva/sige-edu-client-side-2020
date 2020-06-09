import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap'
import { ActivityItem, Activity, Modal, AddActivity } from 'components'
import { config } from '_config'
import './styles/activities.css'

var IMGDIR = process.env.REACT_APP_IMGDIR

const Activities = (props) => {
  const { id_teacher, id_group, id_materia } = props.match.params
  const [secctions, setSecctions] = useState([])
  const [loaders, setLoaders] = useState({
    creating: false,
  })
  const [state, setState] = useState({
    work_space_id: '',
  })

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const { work_space_id } = state
  const { creating } = loaders

  function removeDuplicityWork(array, codeMateria) {
    console.log('\nCodigo Materia: ', codeMateria)
    console.log('\nBefore Filter: ', array)
    let hash = Object.create(null)
    let filter = array.reduce((result, value) => {
      if (!hash[value.academicCharge.codeAcademicCharge]) {
        console.log(
          'Espacio de trabajo 2: ',
          value.academicCharge.codeAcademicCharge
        )
        hash[value.academicCharge.codeAcademicCharge] = true
        result.push(value)
      }
      return result
    }, [])
    console.log('\nFilter: ', filter)

    return filter.reduce((result, value) => {
      if (value.academicCharge.courseDictate.codeCourse == codeMateria) {
        console.log('Codigo materia: ', codeMateria)
        result.push(value)
      }
      return result
    }, [])
  }

  function getWorkSpaces(teacher_id, grupo_id, codeMateria) {
    fetch(
      `http://api.sige-edu.com:8000/api/workspaces/courses/${teacher_id}/${grupo_id}`,
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
        console.log('Codigo del espacio de trbajao del profesor: ', data)
        let depuredData = removeDuplicityWork(data, codeMateria)
        console.log('Data depurada: ', depuredData)
        let codeWorkSpace = depuredData ? depuredData[0].codeWorkSpace : ''
        console.log(
          'Codigo del espacio de trbajao del profesor: ',
          codeWorkSpace
        )
        setState((state) => ({ ...state, work_space_id: codeWorkSpace }))
        console.log('Data Depurada: ', depuredData)
        let activities = depuredData && depuredData[0].secctions
        // setSecctions((selected) => ({ ...selected, sWorkSpace: activities }))
        setSecctions(activities)
      })
      .catch((error) => console.log(error))
      .finally(() => {})
  }

  function createActivity({ name, description, files, enlace }) {
    fetch(`${config.apiOficial}/secctions/secction/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nameSecction: name,
        descriptionSecction: description,
        workspaceSecction: work_space_id,
      }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        data.resources = []
        data.lynks = []
        console.log('Data resource: ', data)
        await files.forEach(async (file) => {
          await addFile(file, data.codeSecction).then((resource) => {
            console.log('response for create resource: ', resource)
            data.resources.push(resource)
          })
        })
        if (enlace != '') {
          await addLink(enlace, data.codeSecction).then((link) => {
            console.log('Data for link', link)
            data.lynks.push(link)
          })
        }
        setSecctions((secctions) => [...secctions, data])
        toggle()
        console.log('Create Data: ', data)
      })
      .catch((error) => {
        console.log('El error: ', error)
        alert('Error al crear la seccion, contacta el soporte de SIGE')
      })
      .finally(() => {})
  }

  function addFile(file, codeSecction) {
    const formdata = new FormData()
    formdata.append('resource', file)
    formdata.append('secctionResource', codeSecction)
    return fetch(`${config.apiOficial}/secctions/resource/create/`, {
      method: 'POST',
      body: formdata,
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error)
        alert('Error al subir el archivo, por favor intenta mas tarde')
      })
  }

  function addLink(enlace, codeSecction) {
    return fetch(`${config.apiOficial}/secctions/hyperLynks/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: enlace,
        secctionHyperlink: codeSecction,
      }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getWorkSpaces(id_teacher, id_group, id_materia)
  }, [])

  return (
    <div>
      <Modal title="Crear actividad" show={modal} toggle={toggle}>
        <AddActivity
          loader={creating}
          createActivity={createActivity}
          toggle={toggle}
        />
      </Modal>
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
            <div className="page-title">
              <div className="float-left">
                <h1 className="title">Actividades</h1>
              </div>
            </div>
            <Row>
              <div className="col-12">
                <section
                  className="box" /*  style={{ borderRadius: '10px' }} */
                >
                  <div className="action-bar_container">
                    <div className="row">
                      <div className="col-3">
                        <Button onClick={toggle} color="primary" size="sm">
                          Añadir Actividad
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Row>
            <Row>
              {/* <div className="col-10 col-xl-8" style={{ padding: '0 2em' }}>
                {secctions.length ? (
                  secctions.map((value) => {
                    return (
                      <Activity activity={value} key={value.codeSecction} />
                    )
                  })
                ) : (
                  <p>
                    No Tienes ninguna actividad con este grupo para esta materia
                  </p>
                )}
              </div> */}
              <div className="col-10 col-xl-7">
                {secctions.length ? (
                  secctions.reverse().map((value, key) => {
                    return <ActivityItem activity={value} key={key * 1000} />
                  })
                ) : (
                  <p>
                    No Tienes ninguna actividad con este grupo para esta materia
                  </p>
                )}
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Activities
