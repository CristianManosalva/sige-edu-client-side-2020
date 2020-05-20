import Customer from 'views/crm/Customer/Customer.jsx';
import CrmMailinbox from 'views/crm/Mail/Inbox.jsx';
import CrmEvents from 'views/crm/Events/CrmEvents.jsx';
import CrmReportsCustomers from 'views/crm/Reports/ReportsCustomers.jsx';
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
    }
]
export default dashRoutes;