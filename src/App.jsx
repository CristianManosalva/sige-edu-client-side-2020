import React from 'react'
import { history } from '_helpers'
import { Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from 'components'
import indexRoutes from 'routes/index.jsx'

const App = () => {
  return (
    <Router history={history} basename={process.env.REACT_APP_BASEDIR}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          //console.log(prop.path, " / " , key , " / ", prop._public);
          if (prop._public) {
            //console.log("Entro aqui")
            return (
              <Route path={prop.path} key={key} component={prop.component} />
            )
          }
          console.log('Entro aqui ', prop.name)
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

/* <Joyride 
      steps={steps}
      showProgress = {showProgress}
      continuous={continuous}
      run = {run}
      showSkipButton = {showSkipButton}
      styles={{
        options: {
          arrowColor: '#e3ffeb',
          backgroundColor: '#e3ffeb',
          overlayColor: 'rgba(79, 26, 0, 0.4)',
          primaryColor: '#000',
          textColor: '#004a14',
          width: 900,
          zIndex: 1000,
        }
      }}
      /> */
