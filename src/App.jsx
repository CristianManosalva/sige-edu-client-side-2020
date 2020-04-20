import React, { useState } from 'react'
import { history } from '_helpers'
import { Router, Route, Switch } from 'react-router-dom'
import Joyride, { ACTIONS, EVENTS, LIFECYCLE, STATUS } from 'react-joyride'
import indexRoutes from 'routes/index.jsx'


const App = () => {
  const [configTour, setConfigTour] = useState({
    steps: [
      {
        target: '.joyride-welcome-1',
        content: '- Foto de perfil\n- Seguridad\n- Estilos',
        title: 'Informacion sobre tu perfil',
        disableBeacon: true,
      },
      {
        target: '.joyride-welcome-2',
        content: 'Estas en la pagina de inicio',
      },
      {
        target: '.joyride-welcome-3',
        content: 'Aqui Aparecen tus grupos',
      },
      {
        target: '.joyride-welcome-4',
        content: 'Aqui podemos ayudarte',
      },
    ],
    stepIndex: 0, // a controlled tour
    showProgress: true,
    continuous: true,
    run: true,
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
    run,
    showSkipButton,
    locale,
  } = configTour
  return (
    
    <Router history={history} basename={process.env.REACT_APP_BASEDIR}>
      <Joyride
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
      />
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
