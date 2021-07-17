//    COMPONENTS
import Project from "./Project";

//    CSS
import { CSSTransition, TransitionGroup } from "react-transition-group";

//    REDUX
import { connect } from "react-redux";

const ProjectList = ({ formState }) => {
  if (formState.projects.lenght === 0) return null;
  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {formState.projects.map((project) => (
          <CSSTransition key={project.id} classNames="proyecto" timeout={500}>
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  formState: state.form,
});

export default connect(mapStateToProps)(ProjectList);
