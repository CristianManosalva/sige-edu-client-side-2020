import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import AvatarProfile from '../../common/Avatar/AvatarProfile'
import AvatarProfileFemale from '../../common/Avatar/AvatarProfileFemale'
import { CardWrapperMember, ImgTeacherDiv } from './stylesTeacherList'
import SkeletonTeacherHome from '../../skeleton/SkeletonTeacherHome'
var IMGDIR = process.env.REACT_APP_IMGDIR
var BASEDIR = process.env.REACT_APP_BASEDIR


const Professorslist = (props) => {
    if (props.loading) {
        return <SkeletonTeacherHome />
    }
    return (
        <div className="row">
            {props.professors.map((teacher, key) => {
                const nameTeacher = teacher.user.firstNameUser
                return (
                    <div className="col-md-6 col-lg-4" key={key}>
                        <CardWrapperMember>
                            <ImgTeacherDiv>
                                <AvatarProfile />
                            </ ImgTeacherDiv>
                            <div className="team-info">
                                <h3><NavLink to={BASEDIR + "/university/professor-profile"}>{nameTeacher}</NavLink></h3>
                                <span>{}</span>
                                {/* <ul className="social-icons list-inline list-unstyled">
                                    <li className="list-inline-item"><a href={'#'}><i className="i-social-facebook icon-primary icon-xs"></i></a></li>
                                    <li className="list-inline-item"><a href={'#'}><i className="i-social-twitter icon-primary icon-xs"></i></a></li>
                                    <li className="list-inline-item"><a href={'#'}><i className="i-social-linkedin icon-primary icon-xs"></i></a></li>
                                </ul> */}
                                <p>{}</p>
                            </div>
                        </CardWrapperMember>
                    </div>
                )
            }
            )

            }

        </div>

    )
}
export default Professorslist;
