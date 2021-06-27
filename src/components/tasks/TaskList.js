import { Task } from "./Task";
import { useSelector } from 'react-redux'

export const TaskList = () => {
  const projectTask = [
    {
      name: "seleccionar plataforma ",
      complete: false,
    },
    {
      name: "elegir nombre",
      complete: true,
    },
    {
      name: "obtener Proveedor",
      complete: false,
    },
  ];

  const storeState = useSelector(state => state.form)

  if (!storeState.project[0]) return <h2>Selecciona un Proyecto</h2>

  return (
    <>
      <h2>Proyecto: {storeState.project[0].name}</h2>
      <ul className="listado-tareas">
        {projectTask.length === 0 ? (
          <li className="tarea">
            <p>No hay Tareas</p>
          </li>
        ) : (
          projectTask.map((task) => <Task task={task} />)
        )}
      </ul>

      <button 
        type="button" 
        className="btn btn-secundario"
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};
