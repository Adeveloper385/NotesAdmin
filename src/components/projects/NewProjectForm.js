import React, { useState } from "react";

//    REDUX
import { connect } from 'react-redux'
//    Actions
import { addNewProject } from "../../actions/formAction";
import { setVisibleForm } from "../../actions/formAction";
import { isError } from '../../actions/formAction'

 const NewProjectForm = ({ formState, addNewProject, setVisibleForm, isError }) => {

  //  State
  const [project, setProject] = useState({
    name: "",
  });


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
      isError()
      return;
    }

    addNewProject(project);
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
        onClick={() => setVisibleForm()}
      >
        {formState.visible ? "Cancelar" : "Nuevo Proyecto"}
      </button>
      {formState.visible ? (
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
      <span className="">{formState.error ? 'Dale un nombre a tu proyecto' : null}</span>
    </>
  );
};

const mapStateToProps = (state) => ({
  formState: state.form    
})

const mapDispatchToProps = {
  addNewProject,
  setVisibleForm,
  isError
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm) 
