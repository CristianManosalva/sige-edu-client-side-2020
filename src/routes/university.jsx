import Course from 'views/university/Course/Course.jsx'
import Help from 'views/university/Help/Help.jsx'
import CourseGroupManage from 'views/university/CourseGroupManage/CourseGroupManage.jsx'
import Library from 'views/university/Library/Library.jsx'
import AddProfessor from 'views/university/Professor/AddProfessor.jsx'
import Wall from 'views/university/Community/Wall.jsx'
import PatientProfile from 'views/hospital/Patient/PatientProfile.jsx'
// import AddStudent from 'views/crm/AddStudent/AddStudent.jsx'

var BASEDIR = process.env.REACT_APP_BASEDIR
var dashRoutes = [
  {
    path: BASEDIR + '/university',
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
  // {
  //   path: '#',
  //   name: 'Usuarios',
  //   icon: 'user',
  //   type: 'dropdown',
  //   parentid: 'users',
  //   child: [{ path: BASEDIR + '/university/add-student', name: 'Estudiantes' }],
  // },
  // {
  //   path: BASEDIR + '/university/add-student',
  //   component: AddStudent,
  //   type: 'child',
  // },
  {
    redirect: true,
    path: BASEDIR + '/',
    pathTo: '/university',
    name: 'Dashboard',
  },
]
export default dashRoutes
