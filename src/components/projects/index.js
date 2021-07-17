import { useEffect } from "react";
//    COMPONENTS
import Aside from "../layout/Aside";
import Header from "../layout/Header";
import FormTask from "../tasks/FormTask";
import TaskList from "../tasks/TaskList";

//    REDUX
import { connect } from 'react-redux'
import { authUser } from "../../actions/authAction";

const Projects = ({ authState, authUser }) => {

  useEffect(() => {
    authUser() 
  }, [])

  return (
    <div className="contenedor-app">
      <Aside />
      <div className="seccion-principal">
        <Header />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <TaskList />
          </div>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  authState: state.authState
})
  
const mapDispatchToProps = {
  authUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects) 
