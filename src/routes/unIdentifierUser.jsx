import React from 'react'

function hola() {
  return (
    <h1 style={{ position: 'absolute', left: '25%', top: '83%' }}>
      Tienes un error con tu usuario, por favor contacta al soporte de SIGE
    </h1>
  )
}

var BASEDIR = process.env.REACT_APP_BASEDIR
var dashRoutes = [
  {
    path: BASEDIR + '/university/dashboard',

    // name: 'Inicio',
    // icon: 'home',
    component: hola,
    type: 'child',
  },
  // Options Teacher
  {
    path: BASEDIR + '/university/doctors',
    // icon: 'user',
    // name: 'Doctores',
    component: hola,
    type: 'child',
  },
  {
    redirect: true,
    path: BASEDIR + '/',
    pathTo: '/university/dashboard',
    // name: 'Dashboard',
  },
]
export default dashRoutes
