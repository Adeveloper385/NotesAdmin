import {
  SHOW_FORM,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
  GET_PROJECTS,
  FORM_ERROR,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from "../types";

import axiosClient from "../config/axios";

export function addNewProject(project) {
  return async (dispatch) => {
    dispatch({
      type: ADD_PROJECT,
      payload: true,
    });
    try {
      const response = await axiosClient.post("/api/projects", project);
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
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

export function getTheProjects() {
  return async (dispatch) => {
    try {
      const response = await axiosClient.get("/api/projects");
      dispatch({
        type: GET_PROJECTS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      const alert = {
        msg: "Hubo un error",
        category: "alerta-error",
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
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
  return async (dispatch) => {
    try {
      await axiosClient.delete(`/api/projects/${projectId}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (err) {
      console.log(err);
      const alert = {
        msg: "Hubo un error",
        category: "alerta-error",
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };
}
