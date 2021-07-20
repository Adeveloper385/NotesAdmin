//    COMPONENTS
import Task from "./Task";

//    REDUX
import { connect } from "react-redux";
import { deleteActualProject } from "../../actions/formAction";

//    CSS
import { CSSTransition, TransitionGroup } from "react-transition-group";


const TaskList = ({ formState, projectState, deleteActualProject }) => {

  //  Destructuring
  const tasks = projectState.projectTasks;
  const { project } = formState;
  const [actualProject] = project;

  //  Handlers
  const handleDelete = (actualProject) => {
    const id = actualProject._id;
    deleteActualProject(id);
  };

  //  No Proyect
  if (!formState.project[0]) return <h2>Selecciona un Proyecto</h2>;

  return (
    <>
      <h2>Proyecto: {formState.project[0].name}</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No hay Tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasks.map((task) => (
              <CSSTransition key={task._id} timeout={300} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <button
        type="button"
        className="btn btn-secundario"
        onClick={() => handleDelete(actualProject)}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  projectState: state.projectTasks,
  formState: state.form,
});

const mapDispatchToProps = {
  deleteActualProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
