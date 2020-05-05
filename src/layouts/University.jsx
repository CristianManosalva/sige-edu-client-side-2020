import React from 'react'
import Joyride from 'react-joyride'
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from 'perfect-scrollbar';
import { /* Route, */ Switch, Redirect } from 'react-router-dom'
import {
  Header,
  Footer,
  Sidebar,
  ChatSidebar,
  Stylebar,
  PrivateRoute,
} from 'components'

import dashboardRoutes from 'routes/university.jsx'
import {
  topbarStyle,
  menuBackgroundColor,
  menuType,
  topbarType,
  navWidth,
  chatWidth,
  chatType,
} from 'variables/settings/university.jsx'

//var ps;
const sideBarStyle = {
  backgroundColor: '#1EAEDF',
}
class UniversityLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuColor: menuBackgroundColor,
      topbarColor: topbarStyle,
      menuType: menuType,
      topbarType: topbarType,
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
          content:
            'Aqui encontraras informacion relevante y de manera resumidad',
          placement: 'left',
        },
        {
          target: '.joyride-welcome-3',
          title: 'Cursos',
          content: 'Aqui puedes agregar una actividad online a tus cursos',
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
    }
    this.menuSettings = this.menuSettings.bind(this)
    this.topbarSettings = this.topbarSettings.bind(this)
  }

  menuSettings(val1, val2) {
    this.setState({
      menuColor: val1,
      menuType: val2,
    })
  }
  topbarSettings(val1, val2) {
    this.setState({
      topbarColor: val1,
      topbarType: val2,
    })
  }

  componentDidMount() {
    /*if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.mainPanel);
            document.body.classList.toggle("perfect-scrollbar-on");
        }*/
  }
  componentWillUnmount() {
    /*if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
            document.body.classList.toggle("perfect-scrollbar-on");
        }*/
  }
  componentDidUpdate(e) {
    if (e.history.action === 'PUSH') {
      this.refs.mainPanel.scrollTop = 0
      document.scrollingElement.scrollTop = 0
    }
  }
  render() {
    const {
      steps,
      showProgress,
      continuous,
      showSkipButton,
      locale,
      run,
    } = this.state
    return (
      <div
        className="wrapper"
        ref="themeWrapper"
        data-menu={this.state.menuColor}
        data-topbar={this.state.topbarColor}
        data-menutype={this.state.menuType}
        data-topbartype={this.state.topbarType}
      >
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
        <Header {...this.props} navtype={navWidth} admintype={'university'} />
        <Sidebar
          style={sideBarStyle}
          className="step-1"
          {...this.props}
          routes={dashboardRoutes}
          admintype={'university'}
        />
        <div className="main-panel" ref="mainPanel">
          <Switch>
            {/* {dashboardRoutes.map((prop, key) => {
              console.log(this.props.location.pathname);
              if (this.props.location.pathname === prop.path) {
                console.log(
                  "-------------------\nCuajouna\n",
                  prop.path,
                  "\n-----------------\n",
                  this.props.location.pathname,
                  "\n-----------------\n"
                );
                return (
                  <Route
                    path={prop.path}
                    component={prop.component}
                    key={key}
                  />
                );
              }
              console.log("Piala mostro");
              //Adding a redirect component
              //   return "";
              return (
                <Redirect
                  from={this.props.location.pathname}
                  to="/university/dashboard"
                  key={key}
                />
              );
            })} */}
            {dashboardRoutes.map((prop, key) => {
              if (prop.collapse) {
                return prop.views.map((prop2, key2) => {
                  return (
                    <PrivateRoute
                      exact
                      path={prop2.path}
                      key={key2}
                      component={prop2.component}
                    />
                  )
                })
              }
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />
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
          <Footer fluid />
        </div>
        <ChatSidebar
          {...this.props}
          routes={dashboardRoutes}
          chatwidth={chatWidth}
          chattype={chatType}
        />
        <Stylebar
          menuSettings={this.menuSettings}
          topbarSettings={this.topbarSettings}
        />
      </div>
    )
  }
}

export default UniversityLayout
