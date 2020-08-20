import University from 'views/university/Dashboard/University.jsx'
import Course from 'views/university/Course/Course.jsx'
// import Subjects from 'views/university/Course/Subjects.jsx'
import Help from 'views/university/Help/Help.jsx'
// import AddCourse from 'views/university/Course/AddCourse.jsx'
// import CourseView from 'views/university/Course/CourseView.jsx'
// import Activities from 'views/university/Activities/Activities.jsx'
import CourseGroupManage from 'views/university/CourseGroupManage/CourseGroupManage.jsx'
import Library from 'views/university/Library/Library.jsx'
// import Professor from 'views/university/Professor/Professor.jsx'
import AddProfessor from 'views/university/Professor/AddProfessor.jsx'
// import Student from 'views/university/Student/Student.jsx'
// import Centres from 'views/university/Centres/UniversityCentres'
import Wall from 'views/university/Community/Wall.jsx'
import PatientProfile from 'views/hospital/Patient/PatientProfile.jsx';

var BASEDIR = process.env.REACT_APP_BASEDIR
var dashRoutes = [
  {
    path: BASEDIR + '/university/dashboard',
    name: 'Comunidad',
    icon: ' fa fa-users',
    component: Wall,
  },
  {
    path: BASEDIR + '/university/add-professors',
    component: AddProfessor,
    type: 'child',
  },
  {
    path: BASEDIR + '/university/courses',
    icon: 'star',
    name: 'Cursos',
    badge: '',
    tour: 'joyride-welcome-2',
    component: Course,
  },
  {
    path: BASEDIR + '/university/course-group-manage/:codeAcademicCharge',
    component: CourseGroupManage,
    type: 'child',
  },
  {
    path: BASEDIR + '/university/library',
    icon: 'notebook',
    name: 'Biblioteca',
    component: Library,
  },
  {
    path: BASEDIR + '/settings',
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
