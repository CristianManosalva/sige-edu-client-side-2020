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
  console.log(props);
  
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

  return (

    < div className="row" ref={element}>
      {
        props.students.map((students, key) => {
          var nameStudent = 'students.user.firstNameUser';
          if(students.studentEnrollment){
            nameStudent = students.studentEnrollment.user.firstNameUser
          }else{
            nameStudent = students.user.firstNameUser
          }
          
          // console.log(students[0]);
          
          
          
          
          return (
            <div className="col-md-6 col-lg-3" key={key}>
              <CardWrapperMember>
                <ImgStudentDiv>
                  <AvatarProfile/>
                </ImgStudentDiv>
                <div className="team-info">
                  <h3>
                    <NavLink to={'#'}>
                      {nameStudent}
                    </NavLink>
                  </h3>
                  {/* <span>Nombre: {students.nameStudent}</span> /{' '} */}
                  {/* <span>Contacto: {students.studentEnrollment.user.phoneUser}</span> */}
                  {/* <ul className="social-icons list-inline list-unstyled">
                    <li className="list-inline-item">
                      <a href="#!">
                        <i className="i-envelope icon-primary icon-xs"></i>
                      </a>
                    </li>
                  </ul> */}
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