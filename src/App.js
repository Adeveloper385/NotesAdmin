//    REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import authToken from './config/authToken'

//    COMPONENTS    --------------------->
import Login from './components/auth/Login'
import NewAccount from './components/auth/NewAccount'
import Projects from './components/projects'
//    REDUX
import { connect } from 'react-redux'
import { authUser } from "./actions/authAction";
import {useEffect} from "react";

//    If user is loged
const token = localStorage.getItem('token')
if(token){
  authToken(token)
}

function App({ authState, authUser }) {

  const { auth, loading } = authState

  useEffect(()=> {
    authUser() 
  }, [authUser])

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/new-account" component={NewAccount} />
          <Route exact path="/projects" render={ () => !auth && !loading ? <Redirect to="/"/> : <Projects />}/>
        </Switch>
      </Router>
    </>
  );
}

const mapStateToProps = state => ({
  authState: state.authState
})

const mapDispatchToProps = {
  authUser 
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
