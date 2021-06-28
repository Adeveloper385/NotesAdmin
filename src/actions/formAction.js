import {
  SHOW_FORM,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
  GET_PROJECTS,
  FORM_ERROR,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "../types";

import {v4 as uuidv4} from "uuid";

export function addNewProject(project) {
  project.id = uuidv4();
  return (dispatch) => {
    dispatch(addProject());
    try {
      dispatch(addProjectSuccess(project));
    } catch (err) {
      dispatch(addProjectError());
    }
  };
}

export function setVisibleForm() {
  return (dispatch) => {
    dispatch(showForm());
  };
}

export function getTheProjects(projects) {
  return (dispatch) => {
    dispatch(getProjects(projects));
  };
}

export function isError() {
  return (dispatch) => {
    dispatch(formError());
  };
}

export function selectActualProject(projectId) {
  return (dispatch) => {
    dispatch(actualProject(projectId));
  };
}

export function deleteActualProject(projectId) {
  return (dispatch) => {
    dispatch(deleteProject(projectId));
  };
}

const showForm = () => ({
  type: SHOW_FORM,
});

const addProject = () => ({
  type: ADD_PROJECT,
  payload: true,
});

const addProjectSuccess = (project) => ({
  type: ADD_PROJECT_SUCCESS,
  payload: project,
});

const addProjectError = () => ({
  type: ADD_PROJECT_ERROR,
});

const getProjects = (projects) => ({
  type: GET_PROJECTS,
  payload: projects,
});

const formError = () => ({
  type: FORM_ERROR,
  payload: true,
});

const actualProject = (projectId) => ({
  type: ACTUAL_PROJECT,
  payload: projectId,
});

const deleteProject = (projectId) => ({
  type: DELETE_PROJECT,
  payload: projectId,
});
