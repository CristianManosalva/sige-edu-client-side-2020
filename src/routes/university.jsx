import University from 'views/university/Dashboard/University.jsx'
import Course from 'views/university/Course/Course.jsx'
import AddCourse from 'views/university/Course/AddCourse.jsx'
import CourseView from 'views/university/Course/CourseView.jsx'
import Library from 'views/university/Library/Library.jsx'
import Professor from 'views/university/Professor/Professor.jsx'
import AddProfessor from 'views/university/Professor/AddProfessor.jsx'
import Student from 'views/university/Student/Student.jsx'

var BASEDIR = process.env.REACT_APP_BASEDIR

var dashRoutes = [
  {
    path: BASEDIR + '/university/dashboard',
    name: 'Inicio',
    icon: 'home',
    tour: 'joyride-welcome-2',
    badge: '',
    component: University,
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
    icon: 'people',
    name: 'Cursos',
    component: Course,
  },
  {
    path: BASEDIR + '/university/activity/:id_teacher/:id_group/:id_materia',
    component: CourseView,
    type: 'child',
  },
  {
    path: BASEDIR + '/university/add-course',
    icon: 'arrow-up-circle',
    name: 'Añadir Actividad Online',
    component: AddCourse,
  },
  // {
  //   path: "#",
  //   name: "Cursos",
  //   icon: "folder-alt", type: "dropdown", parentid: "courses",
  //            child: [
  //                {
  //                  path: BASEDIR+"/university/courses",
  //                  name: "Cursos",
  //                  component: Course,
  //                },
  //                {
  //                  path: BASEDIR+"/university/add-course",
  //                  name: "Añadir Actividad Online",
  //                  component: AddCourse,
  //                },
  //            ]
  //    },
  // {
  //   path: BASEDIR + '/university/professors',
  //   icon: 'chart',
  //   name: 'Informes'
  // },
  {
    path: BASEDIR + '/university/library',
    icon: 'notebook',
    name: 'Biblioteca',
    component: Library,
  },
  // { path: BASEDIR + '/university/professors', icon: 'event', name: 'Eventos' },
  // { path: BASEDIR + '/university/professors', icon: 'envelope', name: 'Email' },
  {
    path: '#',
    tour: 'joyride-welcome-4',
    icon: 'question',
    name: '¿Te Ayudamos?',
    component: Library,
  },

  {
    redirect: true,
    path: BASEDIR + '/',
    pathTo: '/university/dashboard',
    name: 'Dashboard',
  },
]
export default dashRoutes
