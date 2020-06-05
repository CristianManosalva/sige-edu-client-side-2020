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
  let title = props.title
  let idTeacher = props.idTeacher
  let idGroup = props.idGroup
  // console.log(props);
  const ActivityCourses = (title) => {
    return (
      <div className="news-item">
        {console.log('click', title)}
        {/* <img className="news-item__imagen" src={urlImage} alt="" />
        <a href="#ss">{title}</a> */}
      </div>
    )
  }

  const carouselCourses = () => {
    return (
      <div className="news-item" onClick={() => props.setActivities(idTeacher)}>
        <img className="news-item__imagen" src={urlImage} alt="" />
        <a>{title} </a>
      </div>
    )
  }

  return <Fragment>{carouselCourses()}</Fragment>
}
export default CarouselCoursesStudent
