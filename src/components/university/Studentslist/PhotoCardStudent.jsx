import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './stylesStudentsList'
import {ImgStudentDiv} from '../../university/Studentslist/stylesStudentsList'
import AvatarProfile from '../../common/Avatar/AvatarProfile'
import AvatarProfileFemale from '../../common/Avatar/AvatarProfileFemale'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const PhotoCardStudent = (props) => {
  console.log(props.gender);
  
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      // console.log(element)
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])

  return (
    <ImgStudentDiv ref={element}>
      {
        show && <Fragment>
          <AvatarProfile/>
          {/* <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button> */}
        </Fragment>
      }
    
    </ImgStudentDiv>
  )
}
export default PhotoCardStudent