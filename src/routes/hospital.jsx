import PatientProfile from 'views/hospital/Patient/PatientProfile.jsx'
import Subjects from 'views/hospital/Subjects/Subjects.jsx'
import CourseGroupManage from 'views/university/CourseGroupManage/CourseGroupManage.jsx'
import Help from 'views/university/Help/Help.jsx'

var BASEDIR = process.env.REACT_APP_BASEDIR
var dashRoutes = [
  {
    path: BASEDIR + '/university/dashboard',
    icon: ' fa fa-book',
    name: 'Asignaturas',
    badge: '',
    component: Subjects,
  },
  {
    path: BASEDIR + '/university/subjects-activities/:codeAcademicCharge',
    component: CourseGroupManage,
    type: 'child',
  },
  {
    path: BASEDIR + '/university/settings',
    icon: 'info',
    badge: '',
    name: 'Perfil',
    component: PatientProfile,
  },
  {
    path: '/university/help',
    tour: 'joyride-welcome-4',
    icon: 'question',
    name: '¿Te Ayudamos?',
    component: Help,
  },
  {
    redirect: true,
    path: BASEDIR + '/',
    pathTo: '/university/dashboard',
    name: 'Dashboard',
  },
]
export default dashRoutes
