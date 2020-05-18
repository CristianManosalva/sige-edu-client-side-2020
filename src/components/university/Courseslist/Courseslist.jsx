import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import JoyRide from "react-joyride";
import { NavLink } from 'react-router-dom'

  var BASEDIR = process.env.REACT_APP_BASEDIR
  const Courseslist = (props) => {

  const { teacher_id, materia_id } = props.user
  const { nameCourses } = props.nameCourses
  
  const tempImg = [
    'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  ]
  return (
    <div className="row">
      {props.courses.map((group, key) => {
        var nameJourneyGroup
        
        if (group.journeyGroup == 1) {
          nameJourneyGroup = 'Mañana'
        } else if (group.journeyGroup == 2) {
          nameJourneyGroup = 'Tarde'
        } else {
          nameJourneyGroup = '-----'
        }
        var nameGroup = group.nameGroup
        // ? group.nameGroup.split('-')[0] + '-' + group.nameGroup.split('-')[1]
        // : '-----'
        if (nameGroup.substr(0, 1) == 'T') {
          nameGroup =
            group.nameGroup.split('-')[1] + '-' + group.nameGroup.split('-')[2]
        } else {
          nameGroup =
            group.nameGroup.split('-')[0] + '-' + group.nameGroup.split('-')[1]
        }
        return (
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
            key={key}
          >
            <div className="team-member">
              <div className="team-img">
                <img
                  className="img-fluid"
                  src={tempImg[Math.floor(Math.random() * 20)]}
                  alt=""
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className="team-info">
                {materia_id ? (
                  console.log('0', materia_id),
                  <h3>
                    <NavLink
                      to={
                        BASEDIR +
                        `/university/activity/${teacher_id}/${group.nameGroup}/${materia_id}`
                      }
                    >
                      {nameGroup}
                    </NavLink>
                  </h3>
                ) : (
                    console.log('1----', materia_id),
                    <div>
                      
                    </div>
                  )}
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
