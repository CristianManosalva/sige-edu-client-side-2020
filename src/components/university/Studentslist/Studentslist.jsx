import React, { Fragment, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import AvatarProfile from '../../common/Avatar/AvatarProfile'
import AvatarProfileFemale from '../../common/Avatar/AvatarProfileFemale'
import { CardWrapperMember, ImgStudentDiv } from './stylesStudentsList'
import SkeletonTeacherHome from '../../skeleton/SkeletonTeacherHome'
var IMGDIR = process.env.REACT_APP_IMGDIR
var BASEDIR = process.env.REACT_APP_BASEDIR
var genderStudent;
var studentGender;


const Studentslist = (props) => {
  const element = useRef(null)
  useEffect(function () {
    console.log(element);
    
    const observer = new window.IntersectionObserver(function (entries) {
      console.log(entries);

    })
    observer.observe(element.current)
  }, [element])

  if (props.loading) {
    return <SkeletonTeacherHome />
  }
  const GenderUserStudent = (gender) => {
    if (gender == 'F') {
      studentGender = <AvatarProfileFemale />
    } else if (genderStudent == 'M') {
      studentGender = <AvatarProfile />
    } else {
      studentGender = <AvatarProfile />
    }
    return studentGender;
  }

  return (

    < div className="row" ref={element}>
      {
        props.students.map((students, key) => {
          genderStudent = students.studentEnrollment.user.genderUser;
          studentGender = GenderUserStudent(genderStudent)
          return (
            <div className="col-md-6 col-lg-3" key={key}>
              <CardWrapperMember>
                <ImgStudentDiv>
                  {studentGender}
                </ImgStudentDiv>
                <div className="team-info">
                  <h3>
                    <NavLink to={BASEDIR + '/university/student-profile'}>
                      {students.studentEnrollment.user.firstNameUser}
                    </NavLink>
                  </h3>
                  {/* <span>Nombre: {students.nameStudent}</span> /{' '} */}
                  <span>Contacto: {students.studentEnrollment.user.phoneUser}</span>
                  <ul className="social-icons list-inline list-unstyled">
                    <li className="list-inline-item">
                      <a href="#!">
                        <i className="i-envelope icon-primary icon-xs"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </CardWrapperMember>
            </div>
          )
        })
      }

    </div >
  )
}
export default Studentslist