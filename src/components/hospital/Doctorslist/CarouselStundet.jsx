import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import useCoursesStudent from '../../../hooks/useCoursesStudent'
import SkeletonTeacherHome from '../../skeleton/SkeletonTeacherHome'
import CarouselCoursesStudent from '../../../components/home_page/CarouselCoursesStudent'
import { Carousel } from 'components'
var IMGDIR = process.env.REACT_APP_IMGDIR;

const CarouselStundet = (props) => {
  const { student } = useSelector((state) => state.authentication.user.user_data)
    const student_id = student.codeStudent
    const API = `http://api.sige-edu.com:8000/api/courses/academiccharge/bystudent/${student_id}`
    const { courses, loading } = useCoursesStudent(API)
  
const renderCarouselStundet = () => {
  

  return (
    
    < div className="row">
    <Carousel>
    {courses.map((courses, key) => {
          let idAcademicCharge = courses.codeAcademicCharge
          let courseDictate = courses.groupDictate
          return (
            <CarouselCoursesStudent
              key={key}
              urlImage={IMGDIR + `/images/cards/${key}.jpeg`}
              title={courses.courseDictate.nameCourse}
              path={`/university/dashboard/${courseDictate}/${idAcademicCharge}`}
            />
          )
        })}
      </Carousel>
    </div>
  )

}

return (
  <Fragment>
    {renderCarouselStundet()}
  </Fragment>
)
}

export default CarouselStundet;
