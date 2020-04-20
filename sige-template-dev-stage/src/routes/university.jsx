import University from 'views/university/Dashboard/University.jsx'

import Login from 'views/general/Pages/Login.jsx'
import Register from 'views/general/Pages/Register.jsx'
import LockScreen from 'views/general/Pages/LockScreen.jsx'

import Page403 from 'views/general/Pages/403.jsx'
import Page404 from 'views/general/Pages/404.jsx'
import Page405 from 'views/general/Pages/405.jsx'
import Page408 from 'views/general/Pages/408.jsx'
import Page500 from 'views/general/Pages/500.jsx'
import Page503 from 'views/general/Pages/503.jsx'
import Offline from 'views/general/Pages/Offline.jsx'

import Professor from 'views/university/Professor/Professor.jsx'
import AddProfessor from 'views/university/Professor/AddProfessor.jsx'
import EditProfessor from 'views/university/Professor/EditProfessor.jsx'
import ProfessorProfile from 'views/university/Professor/ProfessorProfile.jsx'

import Student from 'views/university/Student/Student.jsx'
import AddStudent from 'views/university/Student/AddStudent.jsx'
import EditStudent from 'views/university/Student/EditStudent.jsx'
import StudentProfile from 'views/university/Student/StudentProfile.jsx'

import Staff from 'views/university/Staff/Staff.jsx'
import AddStaff from 'views/university/Staff/AddStaff.jsx'
import EditStaff from 'views/university/Staff/EditStaff.jsx'
import StaffProfile from 'views/university/Staff/StaffProfile.jsx'

import UniversityCentres from 'views/university/Centres/UniversityCentres.jsx'

import Course from 'views/university/Course/Course.jsx'
import AddCourse from 'views/university/Course/AddCourse.jsx'
import EditCourse from 'views/university/Course/EditCourse.jsx'
import CourseView from 'views/university/Course/CourseView.jsx'

import Library from 'views/university/Library/Library.jsx'
import AddLibrary from 'views/university/Library/AddLibrary.jsx'
import EditLibrary from 'views/university/Library/EditLibrary.jsx'

import Department from 'views/university/Department/Department.jsx'
import AddDepartment from 'views/university/Department/AddDepartment.jsx'
import EditDepartment from 'views/university/Department/EditDepartment.jsx'

import UniversityEvents from 'views/university/Events/UniversityEvents.jsx'
import AddEvent from 'views/university/Events/AddEvent.jsx'

import UniversityMailinbox from 'views/university/Mail/Inbox.jsx'
import UniversityMailcompose from 'views/university/Mail/Compose.jsx'
import UniversityMailview from 'views/university/Mail/View.jsx'

import UniversityReportsDepartment from 'views/university/Reports/ReportsDepartment.jsx'
import UniversityReportsStudents from 'views/university/Reports/ReportsStudent.jsx'
import UniversityReportsUniversity from 'views/university/Reports/ReportsUniversity.jsx'

var BASEDIR = process.env.REACT_APP_BASEDIR

var dashRoutes = [
  //{ path: "#", name: "Main", type: "navgroup"},
  {
    path: BASEDIR + '/university/dashboard',
    name: 'Inicio',
    icon: 'home',
    badge: '',
    component: University,
  },
  
  { path: BASEDIR+"/university/professors", icon: "user", name: "Docentes"},
  { path: BASEDIR+"/university/professors", icon: "people", name: "Estudiantes"},
  { path: BASEDIR+"/university/professors", icon: "folder-alt", name: "Cursos"},
  { path: BASEDIR+"/university/add-professor", icon: "folder-alt", name: "Clases Online"},
  { path: BASEDIR+"/university/professors", icon: "chart", name: "Informes"},
  { path: BASEDIR+"/university/professors", icon: "notebook", name: "Biblioteca"},
  { path: BASEDIR+"/university/professors", icon: "event", name: "Eventos"},
  { path: BASEDIR+"/university/professors", icon: "envelope", name: "Email"},
  { path: BASEDIR+"/university/professors", icon: "help", name: "¿Te Ayudamos?"},
  { path: BASEDIR + '/login', component: Login, type: 'child' },
  { path: BASEDIR + '/lockscreen', component: LockScreen, type: 'child' },
  // { path: BASEDIR + "/home", component: Home, type: "child" },
  { path: BASEDIR + '/register', component: Register, type: 'child' },
  { path: BASEDIR + '/403', component: Page403, type: 'child' },
  { path: BASEDIR + '/404', component: Page404, type: 'child' },
  { path: BASEDIR + '/405', component: Page405, type: 'child' },
  { path: BASEDIR + '/408', component: Page408, type: 'child' },
  { path: BASEDIR + '/500', component: Page500, type: 'child' },
  { path: BASEDIR + '/503', component: Page503, type: 'child' },
  { path: BASEDIR + '/offline', component: Offline, type: 'child' },

  /* {
    path: "#",
    name: "Multi Purpose",
    icon: "layers",
    type: "dropdown",
    parentid: "multipurpose",
    child: [
      { path: BASEDIR + "/dashboard", name: "General" },
      { path: BASEDIR + "/hospital/dashboard", name: "Hospital" },
      { path: BASEDIR + "/music/dashboard", name: "Music" },
      { path: BASEDIR + "/crm/dashboard", name: "CRM" },
      { path: BASEDIR + "/social/dashboard", name: "Social Media" },
      { path: BASEDIR + "/freelance/dashboard", name: "Freelance" },
      { path: BASEDIR + "/university/dashboard", name: "University" },
      { path: BASEDIR + "/ecommerce/dashboard", name: "Ecommerce" },
      { path: BASEDIR + "/blog/dashboard", name: "Blog" },
    ],
  },

  { path: BASEDIR + "/dashboard", component: General, type: "child" },
  { path: BASEDIR + "/hospital/dashboard", component: Hospital, type: "child" },
  { path: BASEDIR + "/music/dashboard", component: Music, type: "child" },
  { path: BASEDIR + "/crm/dashboard", component: Crm, type: "child" },
  { path: BASEDIR + "/social/dashboard", component: Social, type: "child" },
  {
    path: BASEDIR + "/freelance/dashboard",
    component: Freelance,
    type: "child",
  },
  {
    path: BASEDIR + "/university/dashboard",
    component: University,
    type: "child",
  },
  {
    path: BASEDIR + "/ecommerce/dashboard",
    component: Ecommerce,
    type: "child",
  },
  { path: BASEDIR + "/blog/dashboard", component: Blog, type: "child" }, */

  {
    redirect: true,
    path: BASEDIR + '/',
    pathTo: '/university/dashboard',
    name: 'Dashboard',
  },
]
export default dashRoutes
