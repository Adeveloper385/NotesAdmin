//    REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import authToken from './config/authToken'

//    COMPONENTS    --------------------->
import Login from './components/auth/Login'
import NewAccount from './components/auth/NewAccount'
import Projects from './components/projects'

//    If user is loged
const token = localStorage.getItem('token')
if(token){
  authToken(token)
}

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL)

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/new-account" component={NewAccount} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
