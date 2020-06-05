import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, } from 'reactstrap';
import { Router } from '@reach/router'
import useCoursesStudent from '../../../hooks/useCoursesStudent'
import { useSelector } from 'react-redux'
import CarouselCoursesStudent from '../../../components/home_page/CarouselCoursesStudent'
import { Carousel } from 'components'
import ListOfActivityCards from '../../../components/hospital/Doctorslist/ListOfActivityCards'
var IMGDIR = process.env.REACT_APP_IMGDIR;
const CoursesStudent = (props) => {
    const { student } = useSelector((state) => state.authentication.user.user_data)
    const student_id = student.codeStudent
    const API = `http://api.sige-edu.com:8000/api/courses/academiccharge/bystudent/${student_id}`
    const { courses, loading } = useCoursesStudent(API)

    const renderCoursesStudentList = (fixed) => (
        <div>
            <div className="content">
                <h1 className="title">Asignaturas</h1>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="col-xl-12">
                            <section className="box ">
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12">
                                            < div className="row">
                                                {console.log(courses)}
                                                <Carousel>
                                                    {courses.map((courses, key) => {
                                                        let idAcademicCharge = courses.codeAcademicCharge
                                                        let courseDictate = courses.groupDictate

                                                        return (
                                                            <CarouselCoursesStudent
                                                                key={key}
                                                                urlImage={IMGDIR + `/images/cards/${key}.jpeg`}
                                                                idTeacher={courses.teacherDictate}
                                                                idGroup={'6-01-01-2020-1'}
                                                                title={courses.courseDictate.nameCourse}
                                                            />
                                                        )
                                                    })}
                                                </Carousel>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section></div>
                    </Col>
                </Row>
            </div>
        </div>
    );
    return (
        <Fragment>
            {renderCoursesStudentList()}
        </Fragment>
    )
}
export default CoursesStudent;
