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

const ListOfActivityCards = (props) => {
    let courses = props.courses
    if (props.loading) {
        return <SkeletonTeacherHome />
    }
   const llegamos = () => {

    return (
        < div className="row">
          <div className="col-xl-12">
              <section className="box ">
                  <div className="content-body">
                      <div className="row">
                          <div className="col-12">
                              <h1>holaaa</h1>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </div>
    )
   } 
   
    return (
        <Fragment>
            {/* {ScrollCourses()} */}
            {llegamos()}
        </Fragment>
    )
}
export default ListOfActivityCards;