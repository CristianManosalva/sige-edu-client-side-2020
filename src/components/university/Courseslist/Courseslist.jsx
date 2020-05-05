<<<<<<< HEAD
import React from 'react';
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


var BASEDIR = process.env.REACT_APP_BASEDIR;


class Courseslist extends React.Component{
    render(){
        var coursesList = [];
        for (var i = 0; i < this.props.courses.length; i++) {
            coursesList.push(


                                            <div className="col-md-6 col-lg-6 col-sm-12" key={i}>
                                                    <div className="team-member aside-style">
                                                        <div className="row margin-0">
                                                        <div className="team-img col-4">
                                                            <img className="img-fluid" src={this.props.courses[i].avatar} alt="" />
                                                        </div>
                                                        <div className="team-info col-8">
                                                            <h3><NavLink to={BASEDIR+"/university/course-view"}>{ this.props.courses[i].name }</NavLink></h3>
                                                            <span>{ this.props.courses[i].position }</span> / <span>{ this.props.courses[i].age } years old</span>
                                                            <ul className="social-icons list-inline list-unstyled">
                                                                <li className="list-inline-item"><a href="#!"><i className="i-envelope icon-primary icon-xs"></i></a></li>
                                                            </ul>
                                                            <p>{ this.props.courses[i].msg }</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
            );
        }
        return (
                                <div className="row">
                                       { coursesList }
                                </div>
        );
    }
}

Courseslist.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object)
}

export default Courseslist;
=======
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

var BASEDIR = process.env.REACT_APP_BASEDIR

const Courseslist = (props) => {
  const { teacher_id, materia_id } = props.user
  const tempImg =
    'https://res.cloudinary.com/duyflkcyn/image/upload/v1588498513/SIGE/Grupos/grupo_temp_kamazz.jpg'
  return (
    <div className="row">
      {props.courses.map((group, key) => {
        return (
          <div className="col-md-6 col-lg-6 col-sm-12" key={key}>
            <div className="team-member aside-style">
              <div className="row margin-0">
                <div className="team-img col-4 d-flex">
                  {/* <img className="img-fluid" src={group.avatar} alt="" /> */}
                  <img
                    className="img-fluid"
                    src={tempImg}
                    alt=""
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="team-info col-8">
                  <h3>
                    <NavLink
                      to={
                        BASEDIR +
                        `/university/activity/${teacher_id}/${group.nameGroup}/${materia_id}`
                      }
                    >
                      {group.nameGroup
                        ? group.nameGroup.split('-')[0] +
                          '-' +
                          group.nameGroup.split('-')[1]
                        : 'Grupo *?*?'}{' '}
                      {group.journeyGroup === 1 ? 'Mañana' : 'Tarde'}
                    </NavLink>
                  </h3>
                  <span>Jornada </span>
                  <span>{group.journeyGroup === 1 ? 'Mañana' : 'Tarde'}</span>
                  {/* <ul className="social-icons list-inline list-unstyled"> Se podria usar para lincar estadisticas
                    <li className="list-inline-item">
                      <a href="#!">
                        <i className="i-envelope icon-primary icon-xs"></i>
                      </a>
                    </li>
                  </ul> */}
                  <p>{group.msg}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Courseslist.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object),
}

export default Courseslist
>>>>>>> master
