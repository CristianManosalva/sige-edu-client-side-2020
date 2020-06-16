import React, { Fragment, useState, useEffect } from 'react'
import { Card, Pointscenter, Additional, Usercard, Level, Moreinfo, Center, General,Titlecard } from './stylesTeacherListStaff'
import AvatarProfile from '../../common/Avatar/AvatarProfile'



const CardTeacher = (props) => {
  console.log('props...=?',props);
  let nameTeacher = props.nameTeacher
    return (
      <Card>
        <Additional>
          <Usercard>
            {/* <Level>
              Level 13
            </Level>
            <Pointscenter>
              5,312 Points
            </Pointscenter> */}
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
            {/* <div className="coords">
              <span>Group Name</span>
              <span>Joined January 2019</span>
            </div>
            <div className="coords">
              <span>Position/Role</span>
              <span>City, Country</span>
            </div>
            <div className="stats">
              <div>
                <div className="title">Awards</div>
                <i className="fa fa-trophy"></i>
                <div className="value">2</div>
              </div>
              <div>
                <div className="title">Matches</div>
                <i className="fa fa-gamepad"></i>
                <div className="value">27</div>
              </div>
              <div>
                <div className="title">Pals</div>
                <i className="fa fa-group"></i>
                <div className="value">123</div>
              </div>
              <div>
                <div className="title">Coffee</div>
                <i className="fa fa-coffee"></i>
                <div className="value infinity">∞</div>
              </div>
            </div> */}
          </Moreinfo>
        </Additional>
        <General>
          <Titlecard>{nameTeacher}</Titlecard>
          <span className="more">Nº Actividades:</span>
          <br></br>
          <span className="more">Último Acceso:</span>
          <br></br>
          <span className="more">Gráfico:</span>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
          <span className="more">Mouse over the card for more info</span> */}
        </General>
      </Card>
    )
  }
export default CardTeacher