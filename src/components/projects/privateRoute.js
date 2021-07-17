import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute({ component: Component, ...props}){


  return (
    <Route {...props} render={ props => !props.authState.auth ? <Redirect to="/" /> : <Component {...props} />}/>  
  )
}

const mapStateToProps = state => ({
  authState: state.authState
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
