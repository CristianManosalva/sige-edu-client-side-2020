import React, { Fragment } from 'react'
import { Router } from '@reach/router'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Row, Col, Table, Button } from 'reactstrap'
import CarouselCoursesStudent from '../../home_page/CarouselCoursesStudent'
import { Carousel } from 'components'
import SkeletonTeacherHome from '../../skeleton/SkeletonTeacherHome'
// import CarouselStundet
var IMGDIR = process.env.REACT_APP_IMGDIR;

const CoursesStudentList = (props) => {
    let courses = props.courses
    if (props.loading) {
        return <SkeletonTeacherHome />
    }
   
    return (
        <Fragment>
            {/* {ScrollCourses()} */}
        </Fragment>
    )
}
export default CoursesStudentList;


// {courses.map((courses, key) => {
//     var nameCourse = courses.courseDictate.nameCourse;
//     return (
//         <div className="col-md-6 col-lg-4" key={key} >

//                 <div className="team-member ">
//                     <div className="team-img">

//                         <img className="img-fluid" src={IMGDIR+`/images/cards/${key}.jpeg`} alt="" />

//                     </div>
//                     <div className="team-info">
//                         <h3>
//                             {nameCourse}
//                         </h3>
//                         <span>{'Docente:'}</span>
//                         <p>{}</p>
//                     </div>
//                 </div>
//         </div>
//     )
// })
// }