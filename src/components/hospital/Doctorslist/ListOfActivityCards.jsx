import React, { Fragment, useState } from 'react'
import SkeletonTeacherHome from '../../skeleton/SkeletonTeacherHome'
import { ActivityItem, Activity, Modal, AddResponseSection } from 'components'
import Loader from 'react-loader-spinner'
import { config } from '_config'
import swal from 'sweetalert';
// import './styles/activities.css'
import { Button, Collapse, Card, CardBody } from 'reactstrap'
import Scrollbar from 'react-scrollbars-custom'
import {
  Divcardactivity,
  Coursescontainer,
  Coursedetail,
  Coursepreview,
  Courseinfo,
  Coursestudent,
  Progrescontainer,
  Buttonrevisar,
  Progress,
  Progresstext,
  Textcourse,
  Description,
  Resource,
  Buttonrecursos,
  Buttonarchivos,
  Buttonlink,
} from './stylesActivityCourse'

// import CarouselStundet
var IMGDIR = process.env.REACT_APP_IMGDIR
const ListOfActivityCards = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [modal, setModal] = useState(false)
  const togglemodal = () => setModal(!modal)
  const [loaders, setLoaders] = useState({
    creating: false,
    gettingResponseStudent: true,
  })
  const { creating, gettingResponseStudent } = loaders

  var nameSection = props.value.nameSecction
  var descriptionSection = props.value.descriptionSecction
  var linkUrl = props.value.lynks[0].url
  var student_id = props.student_id
  var codeSecction = props.value.codeSecction
  var nameCourse = props.nameCourse
  // var urlFile = props.resource

  // console.log('valueEventAriaMessage..', urlFile.resource);

  if (props.loading) {
    return <SkeletonTeacherHome />
  }

  function createResponseCourse({
    codeSecctions,
    description,
    files,
    student_id,
  }) {
    // setLoaders((loader) => ({ ...loader, creating: true }))
    const formdatafile = new FormData()
    console.log('archivos: ', files)
    console.log(codeSecctions, ' -- ', student_id)
    formdatafile.append('secctionResponse', codeSecctions)
    formdatafile.append('messageResponse', description)
    formdatafile.append('response', files[0])
    formdatafile.append('studentResponse', student_id)
    fetch(`${config.apiOficial}/secctions/responsesecction/create/`, {
      method: 'POST',
      body: formdatafile,
    })
      .then((response) => {
        
        if(response.status == 201){
          setModal(!modal);
          swal("Excelente!!", "Todo salió bien!! :)", "success");
        }
        return response.json()
      })
      .then((data) => {
        // console.log('Data resource: ', data)
      })
      .catch((error) => {
        console.log('El error: ', error)
        swal("UPSS..!!", "Algo Sucedió, Intenta mas tarde!! :)", "warning");
      })
      .finally(() => {})
  }

  const activitiesCourse = () => {
    return (
      <Divcardactivity>
        <Modal
          title="Responder Actividad"
          show={modal}
          backdrop="static"
          keyboard={false}
          toggle={togglemodal}
        >
          <AddResponseSection
            loader={creating}
            createResponseCourse={createResponseCourse}
            toggle={togglemodal}
            student_id={student_id}
            codeSecction={codeSecction}
          />
        </Modal>
        <Coursedetail>
          <Coursepreview>
    <Coursestudent>{nameCourse}</Coursestudent>
            <Textcourse>{nameSection}</Textcourse>
            <Scrollbar>
              <Resource style={{ paddingTop: '10px' }}>
                <Buttonrecursos
                  color="primary"
                  onClick={toggle}
                  style={{ marginBottom: '1rem' }}
                >
                  Recursos
                </Buttonrecursos>

                <Collapse isOpen={isOpen}>
                  <Buttonarchivos
                    onClick={toggle}
                    style={{ marginBottom: '1rem', paddingLeft: '10px' }}
                  >
                    Archivos
                  </Buttonarchivos>
                  <Buttonlink style={{ marginBottom: '1rem' }}>
                    <a href={linkUrl} target="_blank">
                      Link's
                    </a>
                  </Buttonlink>
                </Collapse>
              </Resource>
              <br></br>
              <Resource style={{ paddingTop: '10px' }}>
                <Buttonrecursos
                  color="primary"
                  // onClick={toggle}
                  style={{ marginBottom: '1rem' }}
                >
                  Respuesta
                </Buttonrecursos>
              </Resource>
            </Scrollbar>
          </Coursepreview>

          <Courseinfo>
            {/* <Progrescontainer>
                            <Progress></Progress>
                            <Progresstext>
                                5/10 Días para finalizar
				            </Progresstext>
                        </Progrescontainer> */}
            <Scrollbar>
              <Description>{descriptionSection}</Description>
            </Scrollbar>
            <Buttonrevisar onClick={togglemodal}>
              Enviar respuesta
            </Buttonrevisar>
          </Courseinfo>
        </Coursedetail>
      </Divcardactivity>
    )
  }

  return (
    <Fragment>
      {/* {ScrollCourses()} */}
      {activitiesCourse()}
    </Fragment>
  )
}
export default ListOfActivityCards
