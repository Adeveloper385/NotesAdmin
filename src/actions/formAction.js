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

import { v4 as uuidv4 } from "uuid";

export function addNewProject(project) {
  project.id = uuidv4();
  return (dispatch) => {
    dispatch({
      type: ADD_PROJECT,
      payload: true,
    });
    try {
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: project,
      });
    } catch (err) {
      dispatch({
        type: ADD_PROJECT_ERROR,
      });
    }
  };
}

export function setVisibleForm() {
  return (dispatch) => {
    dispatch({
      type: SHOW_FORM,
    });
  };
}

export function getTheProjects(projects) {
  return (dispatch) => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };
}

export function isError() {
  return (dispatch) => {
    dispatch({
      type: FORM_ERROR,
      payload: true,
    });
  };
}

export function selectActualProject(projectId) {
  return (dispatch) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId,
    });
  };
}

export function deleteActualProject(projectId) {
  return (dispatch) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };
}

