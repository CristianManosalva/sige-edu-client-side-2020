import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, } from 'reactstrap';
import CoursesStudentList from '../../../components/hospital/Doctorslist/CoursesStudentList';
import { doctors } from 'variables/hospital/doctors.jsx';
import useCoursesStudent from '../../../hooks/useCoursesStudent'
import { useSelector } from 'react-redux'
import { Carousel, NewsCarouselItem, ClientCarouselItem } from 'components'

let codeStudent = ''
try {
    codeStudent = useSelector((state) => state.authentication.user.user_data.student)
}
catch (error) {
    codeStudent = ''
}

const tempImg = [
    'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
]
const CoursesStudent = (props) => {
    const { student } = useSelector((state) => state.authentication.user.user_data)
    const student_id = student.codeStudent
    const API = `http://api.sige-edu.com:8000/api/courses/academiccharge/bystudent/${student_id}`
    const { courses, loading } = useCoursesStudent(API)

    const renderCoursesStudentList = (fixed) => (
        <div>
            <div className="content">
            <h1 className="title">Asignaturas</h1>

                <Carousel>
                    {[1, 2, 3, 4,5,6,7].map((id, key) => {
                        return (
                            <NewsCarouselItem
                                key={key}
                                urlImage={tempImg[id]}
                                title={'Matematicas'}
                            />
                        )
                    })}
                </Carousel>

                <Row>
                    <Col xs={12} md={12}>
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
