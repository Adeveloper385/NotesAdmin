//    REDUX
import { connect } from "react-redux";
import { deleteATask, getTheTasks } from "../../actions/taskAction";
import { changeState, actualTask } from "../../actions/taskAction";

const Task = ({ task, projectId, deleteATask, getTheTasks, changeState, actualTask }) => {

  //    Event Handlers
  const handleDelete = (taskId, projectId) => {
    deleteATask(taskId);
    getTheTasks(projectId);
  };

  const handleComplete = (task) => {

    if (task.isComplete) {
      task.isComplete = false;
    } else {
      task.isComplete = true;
    }
    changeState(task)
  };

  const handleChange = (task) => {
    console.log(task)
    actualTask(task)  
  }                                     //  End Event Handlers

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.isComplete ? (
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
          onClick={() => handleDelete(task.id, projectId)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

const mapStateToProps = state => ({state})

const mapDispatchToProps = {
  deleteATask,
  changeState,
  getTheTasks,
  actualTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Task) 
