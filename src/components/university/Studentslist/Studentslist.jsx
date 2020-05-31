import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import AvatarProfile from '../../common/Avatar/AvatarProfile'
import AvatarProfileFemale from '../../common/Avatar/AvatarProfileFemale'
import { CardWrapperMember, ImgStudentDiv } from './stylesStudentsList'
import SkeletonTeacherHome from '../../skeleton/SkeletonTeacherHome'
var IMGDIR = process.env.REACT_APP_IMGDIR
var BASEDIR = process.env.REACT_APP_BASEDIR


const Studentslist = (props) => {
  if (props.loading) {
    return <SkeletonTeacherHome />
  }

  return (

    <div className="row">

      {props.students.map((students, key) => {
        var genderStudent;
        genderStudent = <AvatarProfile />
        return (
          <div className="col-md-6 col-lg-3" key={key}>
            <CardWrapperMember>
              <ImgStudentDiv>
                {genderStudent}
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
      })}

    </div>
  )
}
export default Studentslist