import React from 'react'
import { hotjar } from 'react-hotjar'
import { Router, Switch, Redirect } from 'react-router-dom'
import { history } from '_helpers'
import { PrivateRoute, ScrollToTop, PrivateRouteCustom } from 'components'
import Home from 'views/general/Pages/Home.jsx'
import UniversityLayout from 'layouts/University.jsx'

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
