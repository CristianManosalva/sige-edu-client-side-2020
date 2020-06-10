import React, { Fragment, useState } from 'react'
import SkeletonTeacherHome from '../../skeleton/SkeletonTeacherHome'
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
    Buttonrecursos
} from './stylesActivityCourse'
import { Button, Collapse, Card, CardBody } from 'reactstrap'
import Scrollbar from "react-scrollbars-custom";
// import CarouselStundet
var IMGDIR = process.env.REACT_APP_IMGDIR;
const ListOfActivityCards = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    var nameSection = props.value.nameSecction
    var descriptionSection = props.value.descriptionSecction

    console.log('valueEventAriaMessage..', props);
    let courses = props.courses
    if (props.loading) {
        return <SkeletonTeacherHome />
    }
    const activitiesCourse = () => {

        return (
            <Divcardactivity>
                <Coursedetail>

                    <Coursepreview>
                        <Coursestudent>Lengua Castellana</Coursestudent>
                        <Textcourse>{nameSection}</Textcourse>
                        <Scrollbar>
                            <Resource style={{ paddingTop: '10px' }}>
                            <Buttonrecursos color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Recursos</Buttonrecursos>
                                
                                <Collapse isOpen={isOpen}>
                                <Buttonrecursos color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Archivos</Buttonrecursos>
                                <Buttonrecursos color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Link's</Buttonrecursos>
                                    {/* <Card>
                                        <CardBody>
                                            Anim pariatur cliche reprehenderit,
                                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                                            nesciunt sapiente ea proident.
                                        </CardBody>
                                    </Card> */}
                                </Collapse>

                            </Resource>
                        </Scrollbar>
                        <a href="#">Documentos</a>

                    </Coursepreview>

                    <Courseinfo>
                        <Progrescontainer>
                            <Progress></Progress>
                            <Progresstext>
                                5/10 Días para finalizar
				            </Progresstext>
                        </Progrescontainer>
                        {/* <h6>Chapter 4</h6> */}
                        <Scrollbar>
                            <Description>{descriptionSection}</Description>
                        </Scrollbar>
                        <Buttonrevisar>Enviar respuesta</Buttonrevisar>
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