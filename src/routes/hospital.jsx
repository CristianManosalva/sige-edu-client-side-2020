import Hospital from 'views/hospital/Dashboard/Hospital.jsx';
import Library from 'views/university/Library/Library.jsx'
import CoursesStudent from 'views/hospital/Doctor/CoursesStudent.jsx';
import Course from 'views/university/Course/Course.jsx'
import AddDoctor from 'views/hospital/Doctor/AddDoctor.jsx';
import EditDoctor from 'views/hospital/Doctor/EditDoctor.jsx';
import DoctorProfile from 'views/hospital/Doctor/DoctorProfile.jsx';

import Patient from 'views/hospital/Patient/Patient.jsx';
import AddPatient from 'views/hospital/Patient/AddPatient.jsx';
import EditPatient from 'views/hospital/Patient/EditPatient.jsx';
import PatientProfile from 'views/hospital/Patient/PatientProfile.jsx';

import DoctorCalendar from 'views/hospital/Appointment/DoctorCalendar.jsx';
import BookSlot from 'views/hospital/Appointment/BookSlot.jsx';

import Staff from 'views/hospital/Staff/Staff.jsx';
import AddStaff from 'views/hospital/Staff/AddStaff.jsx';
import EditStaff from 'views/hospital/Staff/EditStaff.jsx';
import StaffProfile from 'views/hospital/Staff/StaffProfile.jsx';

import HospitalEvents from 'views/hospital/Events/HospitalEvents.jsx';
import AddEvent from 'views/hospital/Events/AddEvent.jsx';

import HospitalPayments from 'views/hospital/Billing/HospitalPayments.jsx';
import HospitalInvoice from 'views/hospital/Billing/HospitalInvoice.jsx';
import HospitalAddPayment from 'views/hospital/Billing/HospitalAddPayment.jsx';
import HospitalLocations from 'views/hospital/Locations/HospitalLocations.jsx';

import HospitalMailinbox from 'views/hospital/Mail/Inbox.jsx';
import HospitalMailcompose from 'views/hospital/Mail/Compose.jsx';
import HospitalMailview from 'views/hospital/Mail/View.jsx';

import HospitalReportsHospital from 'views/hospital/Reports/ReportHospital.jsx';
import HospitalReportsPatient from 'views/hospital/Reports/ReportPatients.jsx';
import HospitalReportsSales from 'views/hospital/Reports/ReportSales.jsx';
import HospitalReportsStats from 'views/hospital/Reports/ReportStats.jsx';


var BASEDIR = process.env.REACT_APP_BASEDIR
var dashRoutes = [
  
  {
    path: BASEDIR + '/university/dashboard',
    icon: 'star',
    name: 'Asignaturas',
    badge: '',
    component: CoursesStudent,
  },
  // {
  //   path: BASEDIR + '/university/dashboard',
  //   icon: 'calendar',
  //   name: 'Horario',
  //   badge: '',
  //   component: CoursesStudent,
  // },
  // {
  //   path: BASEDIR + '/university/dashboard',
  //   icon: 'list',
  //   name: 'Deberes',
  //   component: CoursesStudent,
  // },
  // {
  //   path: BASEDIR + '/university/dashboard',
  //   icon: 'event',
  //   name: 'Eventos',
  //   component: CoursesStudent,
  // },
  // {
  //   path: BASEDIR + '/university/dashboard',
  //   icon: 'fire',
  //   name: 'Libro de Bolsillo',
  //   component: CoursesStudent,
  // }
  // // Options Teacher
  // {
  //   path: BASEDIR + '/university/doctors',
  //   icon: 'user',
  //   name: 'Doctores',
  //   component: Doctor,
  // },
  // {
  //   redirect: true,
  //   path: BASEDIR + '/',
  //   pathTo: '/university/dashboard',
  // },
]
export default dashRoutes
