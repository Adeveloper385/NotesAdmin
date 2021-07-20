import axiosClient from "../config/axios";

import {
  GET_TASK,
  ADD_TASK,
  ADD_TASK_ERROR,
  TASK_ERROR,
  DELETE_TASK,
  EDIT_TASK,
  ACTUAL_TASK,
} from "../types";

export function getTheTasks(project) {
  return async (disptach) => {
    try {
      const res = await axiosClient.get("/api/tasks", { params: { project } });
      disptach({
        type: GET_TASK,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.response);
    }
  };
}

export function addNewTask(task) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.post("/api/tasks", task);
      dispatch({
        type: ADD_TASK,
        payload: response.data.task,
      });
    } catch (err) {
      console.log(err.respone);
      dispatch({
        type: ADD_TASK_ERROR,
        payload: true,
      });
    }
  };
}

export function taskErrors() {
  return (dispatch) => {
    dispatch({
      type: TASK_ERROR,
      payload: true,
    });
  };
}

export function deleteATask(id, project) {
  return async (dispatch) => {
    await axiosClient.delete(`/api/tasks/${id}`, { params: { project } });
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };
}

export function editTask(task) {
  return async (dispatch) => {
    try {
      const res = await axiosClient.put(`/api/tasks/${task._id}`, task);
      dispatch({
        type: EDIT_TASK,
        payload: res.data.task
      })
    } catch (err) {
      console.log(err)

    }
  };
}

export function actualTask(task) {
  return {
    type: ACTUAL_TASK,
    payload: task,
  };
}
