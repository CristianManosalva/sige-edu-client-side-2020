import React from 'react'
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import AvatarProfile from '../../common/Avatar/AvatarProfile'
import AvatarProfileFemale from '../../common/Avatar/AvatarProfileFemale'
import {CardWrapperMember, ImgStudentDiv} from './stylesStudentsList'
var IMGDIR = process.env.REACT_APP_IMGDIR
var BASEDIR = process.env.REACT_APP_BASEDIR


const Studentslist = (props) => {

  return (
    <div className="row">

      {props.students.map((students, key) => {
        // console.log(videoId.urlTutorial);
        var genderStudent;
        var gender= students.studentEnrollment.user.genderUser.replace(" ", "");
        if( gender.replace(/ /g,'') == 'Masculino'){
          
          genderStudent = <AvatarProfile />
        }else if(gender == 'Femenino'){
          genderStudent = <AvatarProfileFemale />
        }else{
          genderStudent = <AvatarProfile />
        }
        
        return (
          // <tr>
          // <td className="user-inline-img">
          //   <img
          //     src={IMGDIR + "/images/profile/avatar-4.jpg"}
          //     alt="user avatar"
          //     className="avatar-image img-inline"
          //   />
          //   {students.nameStudent}
          // </td>
          // <td>
          // {students.nameJourney}
          // </td>
          // </tr>
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



// <tr>
// {props.videoId.map((videoId) => {
//   // console.log(videoId.urlTutorial);
//   return (
//     <td className="user-inline-img">
//       <img
//         src={IMGDIR + "/images/profile/avatar-4.jpg"}
//         alt="user avatar"
//         className="avatar-image img-inline"
//       />
//       {this.props.students[i].nameStudent}
//     </td>
//     <td>Tarde</td>

// // <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={i}>
// //   <div className="team-member">
// //     <div className="team-img">
// //       <img
// //         className="img-fluid"
// //         src={this.props.students[i].avatar}
// //         alt=""
// //       />
// //     </div>
// //     <div className="team-info">
// //       <h3>
// //         <NavLink to={BASEDIR + '/university/student-profile'}>
// //           {this.props.students[i].name}
// //         </NavLink>
// //       </h3>
// //       <span>{this.props.students[i].position}</span> /{' '}
// //       <span>{this.props.students[i].age} years old</span>
// //       <ul className="social-icons list-inline list-unstyled">
// //         <li className="list-inline-item">
// //           <a href="#!">
// //             <i className="i-envelope icon-primary icon-xs"></i>
// //           </a>
// //         </li>
// //       </ul>
// //     </div>
// //   </div>
// // </div>
// </tr>
//   )

// }

// )}

{/* <td>Tarde</td>
          <td>33412</td>
          <td>
            <span className="badge">Approved</span>
          </td>
          <td>
            <span className="playlist_song1">
              <div
                className="chart-area"
                style={{
                  height: 40 + "px",
                  width: 80 + "px",
                }}
              >
                {/* <Bar
                                      data={playlistCharts5.data}
                                      options={playlistCharts5.options}
                                    />  */}
          //     </div>
          //   </span>
          // </td>
          // <td>Ingles</td>
          // <td>11 April 2019</td> */}