import Customer from 'views/crm/Customer/Customer.jsx';
import CrmMailinbox from 'views/crm/Mail/Inbox.jsx';
import CrmEvents from 'views/crm/Events/CrmEvents.jsx';
import CrmReportsCustomers from 'views/crm/Reports/ReportsCustomers.jsx';
import Help from 'views/university/Help/Help.jsx'
var BASEDIR = process.env.REACT_APP_BASEDIR;
var dashRoutes = 
[
    {
      path: BASEDIR + '/crm/reports-customers',
      name: 'Inicio',
      icon: 'home',
      badge: '',
      component: CrmReportsCustomers,
    }
    ,{
      path: BASEDIR + '/crm/customers',
      name: 'Docentes',
      icon: 'people',
      component: Customer,
    }
    ,{
      path: BASEDIR + '/crm/events',
      name: 'Calendario Escolar',
      icon: 'event',
      component: CrmEvents,
    }
    ,{
      path: BASEDIR + '/crm/mail-inbox',
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
    }
]
export default dashRoutes;