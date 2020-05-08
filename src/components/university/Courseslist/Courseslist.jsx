import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

var BASEDIR = process.env.REACT_APP_BASEDIR


const Courseslist = (props) => {
  const { teacher_id, materia_id} = props.user
  const tempImg =
    ['https://images.pexels.com/photos/2170/creative-desk-pens-school.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
    'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/632470/pexels-photo-632470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/159497/school-notebook-binders-notepad-159497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/298660/pexels-photo-298660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940']
  return (
    <div className="row">
      {props.courses.map((group, key) => {
        var nameJourneyGroup
        if(group.journeyGroup == 1){
          nameJourneyGroup = 'Mañana'
        }else if(group.journeyGroup == 2) {
          nameJourneyGroup = 'Tarde'
        }else{
          nameJourneyGroup = '-----'
        }
        // var nameGroup
        // if(group.nameGroup)

        return (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3" key={key}>
            <div className="team-member">
              <div className="team-img">
                <img
                  className="img-fluid"
                  src={tempImg[key]}
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
                    {group.nameGroup.spl}
                  </NavLink>
                </h3>
                <span>Jornada </span>
                <span>{nameJourneyGroup}</span>
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
