import React from 'react'
import { history } from '_helpers'
import { Router, Route, Switch, match } from 'react-router-dom'
import { PrivateRoute, ScrollToTop } from 'components'
import indexRoutes from 'routes/index.jsx'
import { hotjar } from 'react-hotjar';
hotjar.initialize(1778911, 6);

const App = () => {
  
  return (
    <Router history={history} basename={process.env.REACT_APP_BASEDIR}>
      <ScrollToTop />
      <Switch>
        {indexRoutes.map((prop, key) => {
          //console.log(prop.path, " / " , key , " / ", prop._public);
          if (prop._public) {
            //console.log("Entro aqui")
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            )
          }
          // console.log('Entro aqui ', prop.name)
          return (
            <PrivateRoute
              exact
              path={prop.path}
              key={key}
              component={prop.component}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default App