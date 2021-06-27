import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProject } from "../../actions/formAction";
import { setVisibleForm } from "../../actions/formAction";
import { isError } from '../../actions/formAction'

export const NewProjectForm = () => {
  const [project, setProject] = useState({
    name: "",
  });

  //    Call    REDUX Actions
  const dispatch = useDispatch();

  const addProject = (project) => dispatch(addNewProject(project));
  const showForm = () => dispatch(setVisibleForm());
  const isFormError = () => dispatch(isError())

  const storeState = useSelector((state) => state.form); // End REDUX


  //    Event   Handlers    --------------->
  const inputChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitProject = (e) => {
    e.preventDefault();

    //    Validation
    if (name.trim() === "") {
      isFormError()
      return;
    }

    addProject(project);
    setProject({
      name: ''
    }) 
  };

  const { name } = project; // End    EventHandlers

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showForm()}
      >
        {storeState.visible ? "Cancelar" : "Nuevo Proyecto"}
      </button>
      {storeState.visible ? (
        <form
          className="formulario-nuevo-proyecto"
          onSubmit={formSubmitProject}
        >
          <input
            type="text"
            className="input-text"
            name="name"
            placeholder="Nombre del Proyecto"
            onChange={inputChangeProject}
            value={name}
          />

          <input
            type="submit"
            value="Añandir Proyecto"
            className="btn btn-block btn-primario"
          />
        </form>
      ) : null}
      <span className="">{storeState.error ? 'Dale un nombre a tu proyecto' : null}</span>
    </>
  );
};
