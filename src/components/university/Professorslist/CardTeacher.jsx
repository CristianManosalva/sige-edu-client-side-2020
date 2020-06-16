import React, { Fragment, useState, useEffect } from 'react'
// import {
//   Card,
//   Pointscenter,
//   Additional,
//   Usercard,
//   Level,
//   Moreinfo,
//   Center,
//   General,
//   Titlecard,
// } from './stylesTeacherListStaff'
import AvatarProfile from '../../common/Avatar/AvatarProfile'

const CardTeacher = (props) => {
  console.log('props...=?', props)
  let nameTeacher = props.nameTeacher
  return <h1>Hola Profes</h1>
}
export default CardTeacher

/* 

// <Card>
      {/* <Additional>
          <Usercard>
            <Center>
            <AvatarProfile />
            </Center>
          </Usercard>
          <Moreinfo>
            <Titlecard>{nameTeacher}</Titlecard>
            <span className="more">Nº Actividades:</span>
          <br></br>
          <span className="more">Último Acceso:</span>
          <br></br>
          <span className="more">Gráfico:</span>
          </Moreinfo>
        </Additional>
        <General>
          <Titlecard>{nameTeacher}</Titlecard>
          <span className="more">Nº Actividades:</span>
          <br></br>
          <span className="more">Último Acceso:</span>
          <br></br>
          <span className="more">Gráfico:</span>
        </General> 
     </Card> 

*/
