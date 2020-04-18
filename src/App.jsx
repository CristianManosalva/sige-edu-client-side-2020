import React ,{ useState } from 'react'
import { history } from '_helpers'
import { Router, Route, Switch } from 'react-router-dom'
import indexRoutes from 'routes/index.jsx'
import Joyride ,{ ACTIONS, EVENTS, LIFECYCLE, STATUS } from "react-joyride";


const App = () => {
  const [configTour, setConfigTour] = useState({
    steps: [
      {
        target: '.joyride-welcome1',
        content: 'This is super awesome feature ',
        title: 'Empecemos a conocernos...',
        disableBeacon: true,
      },
      {
        target: '.joyride-welcome2',
        content: "Everyone's learning Joyride!",
      },
    ],
    stepIndex: 0, // a controlled tour
    showProgress: true,
    continuous: true,
    run: true,
    showSkipButton: true,
    locale: { back: 'Atrás', close: 'Cerrar', next: 'Siguiente', skip: 'Omitir', last: 'Último' },
  })
  const {
    steps,
    stepIndex,
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
