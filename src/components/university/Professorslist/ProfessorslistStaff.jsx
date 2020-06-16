import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import AvatarProfile from '../../common/Avatar/AvatarProfile'
import AvatarProfileFemale from '../../common/Avatar/AvatarProfileFemale'
import { Cardwrapperstaff, Imgteacherstaff,PaddingCard } from './stylesTeacherListStaff'
import SkeletonTeacherHome from '../../skeleton/SkeletonTeacherHome'
import { CardTeacher } from 'components'
var IMGDIR = process.env.REACT_APP_IMGDIR
var BASEDIR = process.env.REACT_APP_BASEDIR


const ProfessorslistStaff = (props) => {
    if (props.loading) {
        return <SkeletonTeacherHome />
    }
    return (
        <div className="row">
            {props.professors.map((teacher, key) => {
                const nameTeacher = teacher.user.firstNameUser
                return (
                    <div className="col-md-6 col-lg-6" key={key}>
                        
                        <CardTeacher nameTeacher={nameTeacher}/>
                        
                    </div>
                )
            }
            )

            }

        </div>

    )
}
export default ProfessorslistStaff;
