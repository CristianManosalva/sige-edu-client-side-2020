import React from "react";
import Skeleton from "react-loading-skeleton";
import { CardWrapperMember, ImgStudentDiv } from '../university/Studentslist/stylesStudentsList'

const SkeletonTeacherHome = () => {
  return (
    <div className="row">

      {Array(8)
        .fill()
        .map((item, index) => {
          return (
            <div className="col-md-6 col-lg-3" key={index}>
              <CardWrapperMember>
                <ImgStudentDiv>
                  <Skeleton
                    duration={1}
                    height={200}
                    width={210}
                  />
                </ImgStudentDiv>
                <div className="team-info">
                  <h3>
                  <Skeleton
                    duration={1}
                    height={20}
                    width={150}
                  />
                  </h3>
                </div>
              </CardWrapperMember>
            </div>
          )
        })}

    </div>
  )
}




export default SkeletonTeacherHome;