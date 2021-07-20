import { useEffect } from "react";
//    COMPONENTS
import Project from "./Project";

//    CSS
import { CSSTransition, TransitionGroup } from "react-transition-group";

//    REDUX
import { connect } from "react-redux";
import { getTheProjects } from "../../actions/formAction";
import { showAlert } from "../../actions/alertAction";

const ProjectList = ({ alertState, formState, getTheProjects, showAlert }) => {
  const { msg } = formState;
  const { alert } = alertState;

  useEffect(() => {
    if (msg) showAlert(msg.msg, msg.category);

    getTheProjects();
  }, [msg, showAlert, getTheProjects]);

  if (formState.projects.lenght === 0) return null;
  return (
    <ul className="listado-proyectos">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.msg}</div>
      ) : null}
      <TransitionGroup>
        {formState.projects.map((project) => (
          <CSSTransition key={project._id} classNames="proyecto" timeout={500}>
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  formState: state.form,
  alertState: state.alertState,
});

const mapDispatchToProps = {
  getTheProjects,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
