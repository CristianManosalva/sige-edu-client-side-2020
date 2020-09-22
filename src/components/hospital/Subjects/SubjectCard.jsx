import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Badge } from 'reactstrap'
import { history } from '_helpers'
import './styles/subject-card.css'

var BASEDIR = process.env.REACT_APP_BASEDIR

const SubjectCard = ({ subject, urlImage }) => {
  const { courseDictate, codeAcademicCharge } = subject
  const { user } = subject.teacherDictate
  const { nameCourse, picture } = courseDictate
  const { firstNameUser, lastNameUser } = user
  const genericPicture =
    'https://res.cloudinary.com/duyflkcyn/image/upload/v1594979524/SIGE/Assets%20Students/school-board_kftixk.jpg'

  return (
    <div className="subject-card">
      <Card
        className="material-card"
        onClick={() =>
          history.push(
            BASEDIR + `/university/subjects-activities/${codeAcademicCharge}`
          )
        }
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={picture ? picture : urlImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{
                maxHeight: '64px',
                minHeight: '64px',
                overflow: 'hidden',
              }}
            >
              <Badge color="secondary" variant="dot">{nameCourse}</Badge>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <i className="fa fa-graduation-cap" />
              {firstNameUser ? ' ' + firstNameUser : lastNameUser}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button style={{ width: '100%' }} size="small" color="primary">
            Ver Actividades
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default SubjectCard
/* <div className="subject-card">
      <div class="crop-image">
        <img src={picture} alt={nameCourse} />
      </div>
    </div> */
