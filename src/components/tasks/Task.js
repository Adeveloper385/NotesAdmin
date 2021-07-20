//    REDUX
import { connect } from "react-redux";
import { deleteATask, getTheTasks } from "../../actions/taskAction";
import { editTask, actualTask } from "../../actions/taskAction";

const Task = ({ task,formState, deleteATask, getTheTasks, editTask, actualTask }) => {

  const { project } = formState
  const [actualProject] = project

  //    Event Handlers
  const handleDelete = (taskId) => {
    deleteATask(taskId, actualProject._id);
    getTheTasks(actualProject._id);
  };

  const handleComplete = (task) => {

    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }

    editTask(task)
  };

  const handleChange = (task) => {
    actualTask(task)  
  }                                     //  End Event Handlers

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.status ? (
          <button
            type="button"
            className="completo"
            onClick={() => handleComplete(task)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => handleComplete(task)}
          >
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button 
          type="button" 
          className="btn btn-primario"
          onClick={() => handleChange(task)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleDelete(task._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

const mapStateToProps = state => ({
  formState: state.form
})

const mapDispatchToProps = {
  deleteATask,
  getTheTasks,
  actualTask,
  editTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Task) 
