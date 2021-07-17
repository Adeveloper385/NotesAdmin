import { v4 as uuidv4 } from "uuid";

import {
  GET_TASK,
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  TASK_ERROR,
  DELETE_TASK,
  EDIT_TASK,
  CHANGE_STATE,
  ACTUAL_TASK,
} from "../types";

export function getTheTasks(projectId) {
  return (disptach) => {
    disptach({
      type: GET_TASK,
      payload: projectId,
    });
  };
}

export function addNewTask(task, id) {
  task.id = uuidv4();
  task.projectId = id;
  return (dispatch) => {
    dispatch({
      type: ADD_TASK,
      payload: true,
    });
    try {
      dispatch({
        type: ADD_TASK_SUCCESS,
        payload: task,
      });
    } catch (err) {
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

export function deleteATask(taskId) {
  return (dispatch) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };
}

export function editTask(task) {
  return {
    type: EDIT_TASK,
    payload: task,
  };
}

export function changeState(task) {
  return {
    type: CHANGE_STATE,
    payload: task,
  };
}

export function actualTask(task) {
  return {
    type: ACTUAL_TASK,
    payload: task,
  };
}

