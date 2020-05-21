import Hospital from 'views/hospital/Dashboard/Hospital.jsx'
import Doctor from 'views/hospital/Doctor/Doctor.jsx'

var BASEDIR = process.env.REACT_APP_BASEDIR
var dashRoutes = [
  {
    path: BASEDIR + '/university/dashboard',

    name: 'Inicio',
    icon: 'home',
    component: Hospital,
  },
  // Options Teacher
  {
    path: BASEDIR + '/university/doctors',
    icon: 'user',
    name: 'Doctores',
    component: Doctor,
  },
  {
    redirect: true,
    path: BASEDIR + '/',
    pathTo: '/university/dashboard',
  },
]
export default dashRoutes
