import React, { Fragment } from 'react'
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
    Progresstext, Textcourse } from './stylesActivityCourse'
import { Button, Collapse, Card, CardBody } from 'reactstrap'
// import CarouselStundet
var IMGDIR = process.env.REACT_APP_IMGDIR;

const ListOfActivityCards = (props) => {
    
    var nameSection = props.value.nameSecction
    var descriptionSection = props.value.descriptionSecction
    
    console.log('valueEventAriaMessage..',props);
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
                        <h2>{descriptionSection}</h2>
                        <Buttonrevisar>Enviar respuesta</Buttonrevisar>
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
export default ListOfActivityCards;