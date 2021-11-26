import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  return <Route {...props} component={() => <Redirect to="/login" />} />
}

export default PrivateRoute