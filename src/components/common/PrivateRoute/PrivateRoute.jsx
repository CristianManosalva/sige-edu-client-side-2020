import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('userv2')
        ? ( (<Component {...props} />))
        : (
          (
            <Redirect
              to={{ pathname: '/home', state: { from: props.location } }}
            />
          ))
    }
  />
)

export default PrivateRoute
