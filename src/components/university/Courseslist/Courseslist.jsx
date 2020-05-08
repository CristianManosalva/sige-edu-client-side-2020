import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

var BASEDIR = process.env.REACT_APP_BASEDIR


const Courseslist = (props) => {
  const { teacher_id, materia_id } = props.user
  const tempImg =
    ['https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']
  return (
    <div className="row">
      {props.courses.map((group, key) => {
        
        var jornada = (() => (
          var nameJourney = '----'
          if(group.journeyGroup === 1){
            nameJourney = 'Mañana'
          }else if(group.journeyGroup === 2){
            nameJourney = 'Tarde'
          }
          return nameJourney
        ))}
        
            
        var nameGroupCourse = group.nameGroup 
                              ? group.nameGroup.split('-')[0] + '-' + group.nameGroup.split('-')[1]
                              : '----'
        
        return (
          
          
          
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={key}>
            <div className="team-member">
              <div className="team-img">
                <img
                  className="img-fluid"
                  src={tempImg[0]}
                  alt=""
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="team-info">
                <h3>
                  <NavLink
                    to={
                      BASEDIR +
                      `/university/activity/${teacher_id}/${group.nameGroup}/${materia_id}`
                    }
                  >
                    {nameGroupCourse + jornada}{' '}
                  </NavLink>
                </h3>
                <span>Jornada </span>
                <span>{jornada}</span>
                <p>{group.msg}</p>
                <ul className="social-icons list-inline list-unstyled">
                  <li className="list-inline-item">
                    <a href="#!">
                      <i className="i-envelope icon-primary icon-xs"></i>
                    </a>
                  </li>
                </ul>
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
