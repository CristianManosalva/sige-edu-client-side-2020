import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('user')
        ? (console.log('Paso el protected'), (<Component {...props} />))
        : (console.log('No paso el protected'),
          (
            <Redirect
              to={{ pathname: '/home', state: { from: props.location } }}
            />
          ))
    }
  />
)

export default PrivateRoute
