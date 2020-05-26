import University from 'views/university/Dashboard/University.jsx'
import Course from 'views/university/Course/Course.jsx'
import Subjects from 'views/university/Course/Subjects.jsx'
import Help from 'views/university/Help/Help.jsx'
import AddCourse from 'views/university/Course/AddCourse.jsx'
import CourseView from 'views/university/Course/CourseView.jsx'
import Library from 'views/university/Library/Library.jsx'
import Professor from 'views/university/Professor/Professor.jsx'
import AddProfessor from 'views/university/Professor/AddProfessor.jsx'
import Student from 'views/university/Student/Student.jsx'
// import Centres from 'views/university/Centres/UniversityCentres'
import Wall from 'views/university/Community/Wall.jsx'

var BASEDIR = process.env.REACT_APP_BASEDIR
var dashRoutes = [
  {
    path: BASEDIR + '/university/dashboard',
    name: 'Inicio',
    icon: 'home',
    component: University,
  },
  {
    path: BASEDIR + '/university/community',
    name: 'Comunidad',
    icon: ' fa fa-users',
    component: Wall,
  },
  // Options Teacher
  {
    path: BASEDIR + '/university/professors',
    icon: 'user',
    name: 'Docentes',
    component: Professor,
  },
  {
    path: BASEDIR + '/university/add-professors',
    component: AddProfessor,
    type: 'child',
  },
  {
    path: BASEDIR + '/university/students',
    icon: 'people',
    name: 'Estudiantes',
    component: Student,
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
    path: BASEDIR + '/university/subjects',
    icon: 'people',
    name: 'Materias',
    component: Subjects,
    path: BASEDIR + '/university/activity/:id_teacher/:id_group/:id_materia',
    component: CourseView,
    type: 'child',
  },
  {
    path: BASEDIR + '/university/add-course',
    icon: 'arrow-up-circle',
    tour: 'joyride-welcome-3',
    name: 'Actividad Online',
    component: AddCourse,
  },

  {
    path: BASEDIR + '/university/library',
    icon: 'notebook',
    name: 'Biblioteca',
    component: Library,
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
