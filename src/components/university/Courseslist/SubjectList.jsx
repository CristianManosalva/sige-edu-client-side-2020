import React, { useState, useEffect } from 'react'
//import { DropdownMenu, DropdownItem, } from 'reactstrap';
// used for making the prop types of this component
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


var BASEDIR = process.env.REACT_APP_BASEDIR;


class Courseslist extends React.Component {
    render() {
        var coursesList = [];
        for (var i = 0; i < this.props.courses.length; i++) {
            coursesList.push(


                <div className="col-md-6 col-lg-6 col-sm-12" key={i}>
                    <div className="team-member aside-style">
                        <div className="row margin-0">
                            <div className="team-img col-4">
                                <img className="img-fluid" src="https://www.cuentafacto.es/wp-content/uploads/2016/08/mujer-cuaderno-estudio-apuntes.jpg" alt="" />
                            </div>
                            <div className="team-info col-6">
                                <h3><NavLink to={BASEDIR + "/university/course-view"}>{this.props.courses[i].courseDictate.nameCourse}</NavLink></h3>
                                <span>{this.props.courses[i].position}</span> / <span>{this.props.courses[i].courseDictate.areaCourse}</span>
                                
                                <p>{this.props.courses[i].msg}</p>
                            </div>
                            <div className="team-info col-2">
                            <ul className="social-icons list-inline list-unstyled">
                                    <li className="list-inline-item"><a href="#!"><i className="i-envelope icon-primary icon-xs"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="row">
                {coursesList}
            </div>
        );
    }
}

Courseslist.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.object)
}

export default Courseslist;
