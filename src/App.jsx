import React, { useState } from 'react'
import { history } from '_helpers'
import { Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from 'components'
import Joyride, { ACTIONS, EVENTS, LIFECYCLE, STATUS } from 'react-joyride'
import indexRoutes from 'routes/index.jsx'


const App = () => {
  const [configTour, setConfigTour] = useState({
    steps: [
      {
        target: '.joyride-welcome-1',
        content:
          'Aqui podras configurar tu perfil y algunas opciones de seguridad',
        title: 'Informacion sobre tu perfil',
        disableBeacon: true,
      },
      {
        target: '.joyride-welcome-2',
        title: 'Pagina de inicio',
        content: 'Aqui encontraras informacion relevante y de manera resumidad',
      },
      {
        target: '.joyride-welcome-3',
        title: 'Grupos',
        content: 'Gestiona la informacion sobre tus grupos',
      },
      {
        target: '.joyride-welcome-4',
        title: 'Ayuda',
        content: 'Contactanos para resolver tus inquietudes',
      },
    ],
    stepIndex: 0, // a controlled tour
    showProgress: true,
    run: true,
    continuous: true,
    showSkipButton: true,
    locale: {
      back: 'Atrás',
      close: 'Cerrar',
      next: 'Siguiente',
      skip: 'Omitir',
      last: 'Último',
    },
  })
  const {
    steps,
    showProgress,
    continuous,
    showSkipButton,
    locale,
    run,
  } = configTour

  return (
    
    <Router history={history} basename={process.env.REACT_APP_BASEDIR}>
      {/* <Joyride
        steps={steps}
        showProgress={showProgress}
        continuous={continuous}
        run={run}
        showSkipButton={showSkipButton}
        locale={locale}
        styles={{
          options: {
            zIndex: 2000,
          },
        }}
      /> */}
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
