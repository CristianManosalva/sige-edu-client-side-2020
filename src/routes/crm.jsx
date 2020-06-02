import Customer from 'views/crm/Customer/Customer.jsx'
import CrmMailinbox from 'views/crm/Mail/Inbox.jsx'
import CrmEvents from 'views/crm/Events/CrmEvents.jsx'
import CrmReportsCustomers from 'views/crm/Reports/ReportsCustomers.jsx'
// import Centres from 'views/university/Centres/UniversityCentres'
import Help from 'views/university/Help/Help.jsx'
import Wall from 'views/university/Community/Wall.jsx'

var BASEDIR = process.env.REACT_APP_BASEDIR
var dashRoutes = [
  {
    path: BASEDIR + '/university/dashboard',
    name: 'Inicio',
    icon: 'home',
    badge: '',
    component: CrmReportsCustomers,
  },
  {
    path: BASEDIR + '/university/community',
    name: 'Comunidad',
    icon: ' fa fa-users',
    component: Wall,
  },
  {
    path: BASEDIR + '/university/customers',
    name: 'Docentes',
    icon: 'people',
    component: Customer,
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
