import React from 'react'
import './style.css'

const styleTeamMember = {
  borderRadius: 20,
  margin: 20,
}
const styleTeamImg = {
  width: 300,
}
const styleDivCreate = {
  textAlign: 'center',
}

const styleIconCreate = {
  marginTop: '-0.5rem',
  border: 'solid',
  cursor: 'pointer',
}
const styleGrayColor = {
  color: '#415359',
  textAlign: 'center',
}
const styleCenter = {
  textAlign: 'center',
}

// import logoCard3 from 'assets/img/background-card3.jpeg'
const logoCard3 =
  'https://www.speakymagazine.com/wp-content/uploads/2018/07/How-to-overcome-the-study-block-The-advice-of-the-psychologist.jpg'

const ActivityCarouselItem = (props) => {
  // console.log(props)
  const { activity } = props
  return (
    <div style={styleTeamMember} className="team-member">
      <div style={styleTeamImg} className="team-img">
        <img className="img-fluid" src={logoCard3} alt="" />
      </div>
      <div style={styleDivCreate}>
        <span
          style={styleIconCreate}
          className="material-icons"
          onClick={() => {
            // props.load(activity)
            // props.setShow()
            console.log('In button')
          }}
        >
          create
        </span>
      </div>
      <div style={styleGrayColor} className="team-info">
        <h3>{activity.nameSecction}</h3>
        <span style={styleCenter}>0 respuestas</span>
      </div>
    </div>
  )
}

export default ActivityCarouselItem
