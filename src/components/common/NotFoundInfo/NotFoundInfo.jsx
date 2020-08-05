import React from 'react'
import { Container, ImgContainer, Img, Text } from './style'

const NotFoundInfo = () => {
  return (
    <Container>
      <ImgContainer>
        <Img
          src="https://res.cloudinary.com/duyflkcyn/image/upload/v1596586274/SIGE/Icons/lost_jjjpqg.webp"
          alt="not found info"
        />
      </ImgContainer>
      <Text>
        Al parecer no tienes estudiantes bajo tu direccion, si no es así, no
        dudes en comunicarte con nosotros
      </Text>
    </Container>
  )
}

export default NotFoundInfo
