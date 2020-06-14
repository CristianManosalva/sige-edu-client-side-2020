import React, { Fragment, useState } from 'react'
import SkeletonTeacherHome from '../../skeleton/SkeletonTeacherHome'
import { ActivityItem, Activity, Modal, AddResponseSection } from 'components'
import Loader from 'react-loader-spinner'
import { config } from '_config'
// import './styles/activities.css'
import { Button, Collapse, Card, CardBody } from 'reactstrap'
import Scrollbar from "react-scrollbars-custom";
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
    Buttonlink
} from './stylesActivityCourse'

// import CarouselStundet
var IMGDIR = process.env.REACT_APP_IMGDIR;
const ListOfActivityCards = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
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
    var student_id=props.student_id
    var codeSecction = props.value.codeSecction

    // console.log('valueEventAriaMessage..', codeSecction);

    if (props.loading) {
        return <SkeletonTeacherHome />
    }

    function createResponseCourse({ codeSecctions, description, files, student_id }) {
        // setLoaders((loader) => ({ ...loader, creating: true }))
        const formdatafile = new FormData()
        formdatafile.append('secctionResponse', codeSecctions)
        formdatafile.append('messageResponse', description)
        formdatafile.append('response', files)
        formdatafile.append('studentResponse', student_id)
        fetch(`${config.apiOficial}/secctions/responsesecction/create/`, {
          method: 'POST',
          body: formdatafile,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Data resource: ', data)
            console.log('Just data: ', data)
    
          })
          .catch((error) => {
            console.log('El error: ', error)
            alert('Error al crear la respuesta, contacta el soporte de SIGE')
          })
          .finally(() => {})
      }
      function addFile(file, codeSecction) {
        const formdata = new FormData()
        formdata.append('resource', file)
        formdata.append('secctionResource', codeSecction)
        return fetch(`${config.apiOficial}/secctions/responsesecction/create/`, {
          method: 'POST',
          body: formdata,
        })
          .then((response) => response.json())
          .catch((error) => {
            console.log(error)
            alert('Error al subir el archivo, por favor intenta mas tarde')
          })
      }


    const activitiesCourse = () => {

        return (
            <Divcardactivity>
                <Modal 
                    title="Responder Actividad" 
                    show={modal}
                    backdrop="static"
                    keyboard={false} 
                    toggle={togglemodal}>
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
                        <Coursestudent>Lengua Castellana</Coursestudent>
                        <Textcourse>{nameSection}</Textcourse>
                        <Scrollbar>
                            <Resource style={{ paddingTop: '10px' }}>
                                <Buttonrecursos color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Recursos</Buttonrecursos>

                                <Collapse isOpen={isOpen}>
                                    <Buttonarchivos onClick={toggle} style={{ marginBottom: '1rem', paddingLeft: '10px' }}>Archivos</Buttonarchivos>
                                    <Buttonlink style={{ marginBottom: '1rem' }}>
                                        <a href={linkUrl} target="_blank">Link's</a>
                                    </Buttonlink>
                                </Collapse>

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
                        <Buttonrevisar onClick={togglemodal}>Enviar respuesta</Buttonrevisar>
                    </Courseinfo>
                </Coursedetail>
            </Divcardactivity >
        )
    }

    return (
        <Fragment>
            {/* {ScrollCourses()} */}
            {activitiesCourse()}
        </Fragment>
    )
}
export default ListOfActivityCards;