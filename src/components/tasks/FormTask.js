import { useState, useEffect } from "react";
//    REDUX
import { connect } from "react-redux";
//    Actions
import {
  addNewTask,
  getTheTasks,
  taskErrors,
  editTask,
} from "../../actions/taskAction";

const FormTask = ({ formState, projectState, addNewTask, getTheTasks, taskErrors, editTask}) => {

  //    Destructuring
  const { project } = formState;
  const [actualProject] = project;
  const { actualTask } = projectState;

  //    State
  const [task, setTask] = useState({
    name: "",
  });

  //    Effect task selected
  useEffect(() => {
    if (actualTask !== null) {
      setTask(actualTask);
    } else {
      setTask({
        name: "",
      });
    }
  }, [actualTask]);

  //    Event Handlers
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  Validation
    if (task.name.trim() === "") {
      taskErrors();
      return;
    }

    //  New or Edit Task
    if (actualTask === null) {
      task.project = actualProject      

      addNewTask(task);
      getTheTasks(actualProject.id);
    } else {
      editTask(task);
      getTheTasks(actualProject.id);
    }

    setTask({
      name: "",
    });
  };                            //    End Event Handlers

  //    No Project
  if (!actualProject) return null;

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombra tu tarea"
            name="name"
            value={task.name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value={actualTask !== null ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {projectState.taskError ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  formState: state.form,
  projectState: state.projectTasks
})

const mapDispatchToProps = {
  addNewTask,
  getTheTasks,
  taskErrors,
  editTask
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTask)
