import React from 'react'
import { Route } from 'react-router-dom'

const PrivateRouteCustom = ({
    component: Component,
    unLoginComponent: UnLoginComponent,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('userv2') ? (
          <Component {...props} {...rest} />
        ) : (
          <UnLoginComponent {...props} {...rest} />
        )
      }
    />
  )

export default PrivateRouteCustom
