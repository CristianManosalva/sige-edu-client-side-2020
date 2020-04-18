import React from 'react'
import { history } from '_helpers'
import { Router, Route, Switch } from 'react-router-dom'
import indexRoutes from 'routes/index.jsx'

const App = () => {
  return (
    <Router history={history} basename={process.env.REACT_APP_BASEDIR}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          //console.log(prop.path + prop.key);
          return <Route path={prop.path} key={key} component={prop.component} />
        })}
      </Switch>
    </Router>
  )
}

export default App
