import General from 'views/general/Dashboard/General.jsx';

var BASEDIR = process.env.REACT_APP_BASEDIR;

var dashRoutes = [ 

    //{ path: "#", name: "Main", type: "navgroup"},
    { path: BASEDIR+"/dashboard", name: "Inicio", icon: "home", badge: "", component: General },

    { path: BASEDIR+"/university/professors", icon: "user", name: "Docentes"},
    { path: BASEDIR+"/university/professors", icon: "people", name: "Estudiantes"},
    { path: BASEDIR+"/university/professors", icon: "folder-alt", name: "Cursos"},
    { path: BASEDIR+"/university/professors", icon: "chart", name: "Informes"},
    { path: BASEDIR+"/university/professors", icon: "notebook", name: "Biblioteca"},
    { path: BASEDIR+"/university/professors", icon: "event", name: "Eventos"},
    { path: BASEDIR+"/university/professors", icon: "envelope", name: "Email"},
    
];
export default dashRoutes;
