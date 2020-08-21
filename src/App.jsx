import React, { useState } from 'react'
import { history } from '_helpers'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { PrivateRoute, ScrollToTop, PrivateRouteCustom } from 'components'
import Home from 'views/general/Pages/Home.jsx'
import UniversityLayout from 'layouts/University.jsx'
import { hotjar } from 'react-hotjar'
hotjar.initialize(1778911, 6)

const App = () => {
  console.log(`\n\n\nllamando app principal: ${new Date()} \n\n\n`)
  return (
    <Router history={history} basename={process.env.REACT_APP_BASEDIR}>
      <ScrollToTop />
      <Switch>
        <PrivateRouteCustom
          path="/home"
          component={UniversityLayout}
          unLoginComponent={Home}
        />
        <PrivateRoute path="/university" component={UniversityLayout} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  )
}

export default App
