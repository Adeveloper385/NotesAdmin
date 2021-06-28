import { useSelector } from "react-redux";

export const FormTask = () => {

  const storeState = useSelector(state => state.form)  

  console.log(storeState)

  const { project } = storeState
  const [actualProject] = project

  if(!actualProject) return null

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombra tu tarea"
            name="name"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value="Agregar Tarea"

          />
        </div>
      </form>
    </div>
  );
};
