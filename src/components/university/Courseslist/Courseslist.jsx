import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

var BASEDIR = process.env.REACT_APP_BASEDIR

const Courseslist = (props) => {
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
                    <NavLink to={BASEDIR + '/university/activity/12436/2332'}>
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
