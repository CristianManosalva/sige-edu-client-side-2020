import UserTeacher from 'views/crm/User/UserTeacher'
import UserStudent from 'views/crm/User/UserStudent'
import CrmMailinbox from 'views/crm/Mail/Inbox'
import CrmEvents from 'views/crm/Events/CrmEvents'
import CrmReportsCustomers from 'views/crm/Reports/ReportsCustomers'
// import Centres from 'views/university/Centres/UniversityCentres'
import Help from 'views/university/Help/Help.jsx'
import Wall from 'views/university/Community/Wall.jsx'
import PatientProfile from 'views/hospital/Patient/PatientProfile.jsx';

var BASEDIR = process.env.REACT_APP_BASEDIR
var dashRoutes = [
  {
    path: BASEDIR + '/university/dashboard',
    name: 'Comunidad',
    icon: ' fa fa-users',
    badge: '',
    component: Wall,
  },
  // {
  //   path: BASEDIR + '/university/community',
  //   name: 'Comunidad',
  //   badge: '',
  //   icon: ' fa fa-users',
  //   component: Wall,
  // },
  {
    path: BASEDIR + '/university/student',
    name: 'Estudiantes',
    icon: 'graduation',
    component: UserStudent,
  },
  {
    path: BASEDIR + '/university/customers',
    name: 'Docentes',
    icon: 'people',
    component: UserTeacher,
  },
  {
    path: BASEDIR + '/settings',
    icon: 'info',
    badge: '',
    name: 'Perfil',
    component: PatientProfile,
  },
  // {
  //   path: BASEDIR + '/university/centres',
  //   name: 'Clase Virtual',
  //   icon: 'social-youtube',
  //   component: Centres,
  // },
  {
    path: BASEDIR + '/university/events',
    name: 'Calendario Escolar',
    icon: 'event',
    component: CrmEvents,
  },
  {
    path: BASEDIR + '/university/mail-inbox',
    name: 'Email',
    icon: 'envelope',
    component: CrmMailinbox,
  },
  {
    path: '/university/help',
    tour: 'joyride-welcome-4',
    icon: 'question',
    name: '¿Te Ayudamos?',
    component: Help,
  },
]
export default dashRoutes
