import React, { useState } from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { Header, Footer, Sidebar, PrivateRoute } from 'components'
import { useSelector } from 'react-redux'
import universityRoutes from 'routes/university.jsx'
import hospitalRoutes from 'routes/hospital.jsx'
import crmlRoutes from 'routes/crm.jsx'

import {
  topbarStyle,
  menuBackgroundColor,
  menuType,
  topbarType,
  navWidth,
} from 'variables/settings/university.jsx'
import { useEffect } from 'react'

const sideBarStyle = {
  backgroundColor: '#1EAEDF',
}

const UniversityLayout = (props) => {
  //En un futuro minimizar el uso de useSelector y pasar
  //el objeto user_data, desde este layout
  const { user_data } = useSelector((state) => state.authentication.user)
  const [state, setState] = useState({
    dashboardRoutes: [], //definitive solution
    menuColor: menuBackgroundColor,
    topbarColor: topbarStyle,
    menuType: menuType,
    topbarType: topbarType,
  })

  const setPrevState = (appenState) => {
    setState((preV) => ({ ...preV, ...appenState }))
  }

  const handleTypeOfUser = async () => {
    try {
      let user = await JSON.parse(localStorage.getItem('userv2'))

      if (user.user_data.teacher) {
        setPrevState({
          dashboardRoutes: universityRoutes,
        })
      } else if (user.user_data.staff) {
        setPrevState({
          dashboardRoutes: crmlRoutes,
        })
      } else if (user.user_data.student) {
        setPrevState({
          dashboardRoutes: hospitalRoutes,
        })
      } else {
        // setTimeout(() => {
        localStorage.removeItem('userv2')
        // eslint-disable-next-line
        location.reload(true)
        // }, 100)
      }
    } catch (error) {
      console.log('Error hanlder user ', error)
      // setTimeout(() => {
      localStorage.removeItem('userv2')
      // eslint-disable-next-line
      location.reload(true)
      // }, 100)
    }
  }

  useEffect(() => {
    handleTypeOfUser()
  }, [])


  const { dashboardRoutes } = state

  return (
    <div
      className="wrapper"
      // ref="themeWrapper"
      data-menu={state.menuColor}
      data-topbar={state.topbarColor}
      data-menutype={state.menuType}
      data-topbartype={state.topbarType}
    >
      <Header {...props} user_data={user_data} navtype={navWidth} admintype={'university'} />
      <Sidebar
        style={sideBarStyle}
        className="step-1"
        {...props}
        routes={dashboardRoutes}
        admintype={'university'}
      />
      <div className="main-panel" /* ref="mainPanel" */>
        <Switch>
          {dashboardRoutes.map((prop, key) => {
            if (prop.collapse) {
              return prop.views.map((prop2, key2) => {
                return (
                  <PrivateRoute
                    exact
                    path={prop2.path}
                    key={key2}
                    component={prop2.component}
                    user_data={user_data}
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
                user_data={user_data}
              />
            )
          })}
        </Switch>
        <Footer fluid />
      </div>
    </div>
  )
}

export default UniversityLayout
