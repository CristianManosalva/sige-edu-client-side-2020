import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, } from 'reactstrap';
import  CoursesStudentList  from '../../../components/hospital/Doctorslist/CoursesStudentList';
import { doctors } from 'variables/hospital/doctors.jsx';
import useCoursesStudent from '../../../hooks/useCoursesStudent'
import { useSelector } from 'react-redux'
import { } from 'components'
const CoursesStudent = (props) => {
    const { student } = useSelector((state) => state.authentication.user.user_data)
    console.log(student);
    const student_id = student.codeStudent
    const API = `http://api.sige-edu.com:8000/api/courses/academiccharge/bystudent/${student_id}`
    const { courses, loading } = useCoursesStudent(API)
    console.log(courses);
    
    const renderCoursesStudentList = (fixed) => (
        <div>
            <div className="content">
                <Row>
                    <Col xs={12} md={12}>
                        <div className="page-title">
                            <div className="float-left">
                                <h1 className="title">Asignaturas</h1>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <section className="box ">
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <CoursesStudentList courses={courses} loading={loading} />
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
