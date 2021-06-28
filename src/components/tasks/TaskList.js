import { Task } from "./Task";
import { useDispatch, useSelector } from 'react-redux'
import { deleteActualProject } from '../../actions/formAction'

export const TaskList = () => {
  
  //    REDUX
  const dispatch = useDispatch()
  const deleteProject = (projectId) => dispatch(deleteActualProject(projectId))

  const storeStateForm = useSelector(state => state.form)
  const storeStateTasks = useSelector(state => state.tasks)
  const tasks = storeStateTasks.tasks

  const {project} = storeStateForm
  const [actualProject] = project

  console.log(actualProject)

  const handleDelete = (actualProject) => {
    const id = actualProject.id
    deleteProject(id)
  }

  if (!storeStateForm.project[0]) return <h2>Selecciona un Proyecto</h2>

  return (
    <>
      <h2>Proyecto: {storeStateForm.project[0].name}</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No hay Tareas</p>
          </li>
        ) : (
          tasks.map((task) => <Task task={task} />)
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
