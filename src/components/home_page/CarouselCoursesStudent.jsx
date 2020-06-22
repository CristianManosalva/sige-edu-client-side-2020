import React, { Fragment, useState, useEffect } from 'react'

const CarouselCoursesStudent = (props) => {
  let urlImage = props.urlImage
  let loadingActivity = props.loadingActivity
  let loading = props.loading
  let title = props.courses.courseDictate.nameCourse
  let idCourse = props.courses.courseDictate.codeCourse
  let idTeacher = props.courses.teacherDictate
  let codeAcademicCharge = props.courses.codeAcademicCharge
  let idGroup = props.courses.groupDictate
  // console.log(props.courses);
  const carouselCourses = () => {
    return (
      <div className="news-item" onClick={() => props.setActivities(idCourse, idTeacher, idGroup, title, codeAcademicCharge)}>
        <img className="news-item__imagen" src={urlImage} alt="" />
        <a>{title} </a>
      </div>
    )
  }

  return <Fragment>{carouselCourses()}</Fragment>
}
export default CarouselCoursesStudent
