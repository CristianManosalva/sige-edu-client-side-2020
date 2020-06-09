import React, { Fragment, useState, useEffect } from 'react'
// import { Link, Image } from './stylesCarouselCoursesStudent'
// const teacherId = '109'
// const groupID = '6-01-01-2020-1'
// const [activityStudent, setActivityStudent] = useState(null);
// useEffect(() => {
//   fetch(`http://api.sige-edu.com:8000/api/workspaces/courses/${teacherId}/${groupID}`)
//     .then(res => res.json())
//     .then(response => {
//       setActivityStudent(response)
//     })
// }, [])

const CarouselCoursesStudent = (props) => {
  let urlImage = props.urlImage
  let loadingActivity = props.loadingActivity
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
