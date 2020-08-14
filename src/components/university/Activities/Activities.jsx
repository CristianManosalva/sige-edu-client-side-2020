import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap'
import { ActivityItem, Modal, AddActivity } from 'components'
import Loader from 'react-loader-spinner'
import { config } from '_config'
import './styles/activities.css'

const Activities = ({ codeAcademicCharge }) => {
  const [workSpace, setWorkSpace] = useState({})
  const [secctions, setSecctions] = useState([])
  const [loaders, setLoaders] = useState({
    creating: false,
    gettingActivities: true,
  })
  // const [state, setState] = useState({
  //   work_space_id: '',
  // })

  const [modal, setModal] = useState(true)
  const toggle = () => setModal(!modal)

  // const { work_space_id } = state
  const { creating, gettingActivities } = loaders
  const { codeWorkSpace, academicCharge, teacherDictate } = workSpace

  function removeDuplicityWork(array, codeMateria) {
    // console.log('\nCodigo Materia: ', codeMateria)
    // console.log('\nBefore Filter: ', array)
    let hash = Object.create(null)
    let filter = array.reduce((result, value) => {
      if (!hash[value.academicCharge.codeAcademicCharge]) {
        hash[value.academicCharge.codeAcademicCharge] = true
        result.push(value)
      }
      return result
    }, [])
    // console.log('\nFilter: ', filter)

    return filter.reduce((result, value) => {
      if (value.academicCharge.courseDictate.codeCourse == codeMateria) {
        // console.log('Codigo materia: ', codeMateria)
        result.push(value)
      }
      return result
    }, [])
  }

  async function getWorkSpaces(codeAcademicCharge) {
    try {
      let workSpace = await fetch(
        `${config.apiEndPoint}/workspaces/by-academiccharge/${codeAcademicCharge}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              'error al consular el espacio de trabajo por carga academica'
            )
          }
          return response.json()
        })
        .then((data) => data[0])
      setWorkSpace(workSpace)

      let activities = await fetch(
        `${config.apiEndPoint}/secctions/secction/byacademicharge/${codeAcademicCharge}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      ).then((response) => {
        if (!response.ok) {
          throw new Error('error al consular el las actividades')
        }
        return response.json()
      })
      setSecctions(activities)
    } catch (error) {
      console.log(error)
    }
    setLoaders((loader) => ({ ...loader, gettingActivities: false }))
  }

  // function getWorkSpacesOld(teacher_id, grupo_id, codeMateria) {
  //   fetch(
  //     `${config.apiEndPoint}/workspaces/courses/${teacher_id}/${grupo_id}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log('Codigo del espacio de trbajao del profesor: ', data)
  //       let depuredData = removeDuplicityWork(data, codeMateria)
  //       // console.log('Data depurada: ', depuredData)
  //       let codeWorkSpace = depuredData ? depuredData[0].codeWorkSpace : ''
  //       setState((state) => ({ ...state, work_space_id: codeWorkSpace }))
  //       // console.log('Data Depurada: ', depuredData)
  //       let activities = depuredData && depuredData[0].secctions
  //       setTimeout(() => {
  //         setSecctions(activities)
  //         setLoaders((loader) => ({ ...loader, gettingActivities: false }))
  //       }, 500)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       setLoaders((loader) => ({ ...loader, gettingActivities: false }))
  //     })
  //     .finally(() => {})
  // }

  function createActivity({ name, description, files, enlace, date_close }) {
    setLoaders((loader) => ({ ...loader, creating: true }))
    fetch(`${config.apiEndPoint}/secctions/secction/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nameSecction: name,
        descriptionSecction: description,
        workspaceSecction: codeWorkSpace,
        date_close: date_close,
        image_found:
          'https://res.cloudinary.com/duyflkcyn/image/upload/v1595312014/SIGE/ActivitiesPhothos/3_talrgu.jpg',
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
        let auxSeccion = secctions
        auxSeccion.unshift(data)
        console.log('Just data: ', data)

        setSecctions([])
        setLoaders((loader) => ({ ...loader, gettingActivities: true }))

        setTimeout(() => {
          setSecctions(auxSeccion)
          setLoaders((loader) => ({ ...loader, gettingActivities: false }))
        }, 200)

        setTimeout(() => {
          setLoaders((loader) => ({ ...loader, creating: false }))
          toggle()
        }, 200)

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
    return fetch(`${config.apiEndPoint}/secctions/resource/create/`, {
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
    return fetch(`${config.apiEndPoint}/secctions/hyperLynks/create/`, {
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

  function deleteActivity(activity) {
    let index = secctions.indexOf(activity)
    // index = -1
    if (index != -1) {
      fetch(
        `${config.apiEndPoint}/secctions/secction/delete/${activity.codeSecction}`,
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    if (index != -1) {
      let auxSeccion = secctions
      // setSecctions([])
      auxSeccion.splice(index, 1)
      setLoaders((loader) => ({ ...loader, gettingActivities: true }))

      setTimeout(() => {
        setSecctions(auxSeccion)
        setLoaders((loader) => ({ ...loader, gettingActivities: false }))
      }, 200)

      console.log(
        'result: ',
        index,
        '  :  ',
        auxSeccion.length,
        '  :  ',
        secctions.length
      )
    }
  }

  useEffect(() => {
    getWorkSpaces(codeAcademicCharge)
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
      <Row>
        <div
          className="col-12 col-lg-12 col-xl-8 offset-xl-2"
          style={{ marginTop: '20px', marginBottom: '20px' }}
        >
          <Button
            onClick={toggle}
            color="primary"
            size="sm"
            style={{
              // bac
              borderRadius: '6px',
            }}
          >
            <i className="fa fa-plus mr-1" /* style={{ fontSize: '19px' }} */ />
            Crear Actividad
          </Button>
        </div>
        <div className="col-12 col-lg-12 col-xl-8 offset-xl-2">
          {gettingActivities && (
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
          {!gettingActivities &&
            secctions.length > 0 &&
            secctions.map((value, key) => {
              return (
                <ActivityItem
                  activity={value}
                  key={key * 1000}
                  deleteActivity={deleteActivity}
                  id_teacher={teacherDictate}
                />
              )
            })}
          {secctions.length == 0 && !gettingActivities && (
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
                No Tienes ninguna actividad con este grupo para esta materia
              </span>
            </div>
          )}
        </div>
      </Row>
    </div>
  )
}

export default Activities
