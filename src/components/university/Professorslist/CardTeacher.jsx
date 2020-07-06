import React, { Fragment, useState, useEffect } from 'react'
import {
  Card,
  Pointscenter,
  Additional,
  Usercard,
  Level,
  Moreinfo,
  Center,
  General,
  Titlecard,
  Titlecardmoreinfo,
  ButtonTeacher,
} from './stylesTeacherListStaff'
import AvatarProfile from '../../common/Avatar/AvatarProfile'

const CardTeacher = (props) => {
  console.log('props...=?', props)
  let nameTeacher = props.nameTeacher
  let lastNameTeacher = props.lastNameTeacher
  let documentIdUser = props.documentIdUser
  return (
    <Card>
      <Additional>
          <Usercard>
            <ButtonTeacher>
            Ver
            </ButtonTeacher>
            <Center style={{ paddingTop: '25%', width: '120px', maxWidth: '150px', minWidth:'100px' }}>
            <AvatarProfile documentIdUser = { documentIdUser }/>
            </Center>
          </Usercard>
          <Moreinfo>
            <Titlecardmoreinfo>{nameTeacher +' '+lastNameTeacher}</Titlecardmoreinfo>
            <span className="more">Nº Actividades:</span>
          <br></br>
          <span className="more">Último Acceso:</span>
          <br></br>
          <span className="more">Gráfico:</span>
          </Moreinfo>
        </Additional>
        <General>
          <Titlecard>{nameTeacher +' '+lastNameTeacher}</Titlecard>
          <span className="more">Nº Actividades:</span>
          <br></br>
          <span className="more">Último Acceso:</span>
          <br></br>
          <span className="more">Gráfico:</span>
        </General> 
     </Card> 
  )
}
export default CardTeacher