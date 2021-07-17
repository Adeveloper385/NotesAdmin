import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USER,
  LOG_OUT,
} from "../types";

import axiosClient from "../config/axios";
import authToken from "../config/authToken";

export function registerUser(data) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.post("/api/users", data);
      console.log(response);
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });

      // get authUser
      dispatch(authUser());
    } catch (err) {
      //console.log(err.response);
      const alert = {
        msg: err.response.data.msg,
        category: "alerta-error",
      };

      dispatch({ type: REGISTER_ERROR, payload: alert });
    }
  };
}

export function authUser() {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      //    Send token by headers
      authToken(token);
    }
    try {
      const response = await axiosClient.get("/api/auth");
      dispatch({ type: GET_USER, payload: response.data });
    } catch (err) {
      console.log(err.response);
      dispatch({ type: LOGIN_ERROR });
    }
  };
}

export function logIn(data) {
  return async (dispatch) => {
    try {
      const response = await axiosClient.post("/api/auth", data);
      console.log(response);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });

      //    auth user and logIn
      dispatch(authUser());
    } catch (err) {
      console.log(err);
      const alert = {
        msg: err.response.data.msg,
        category: "alerta-error",
      };

      dispatch({ type: LOGIN_ERROR, payload: alert });
    }
  };
}

export function logOut(){
  return { type: LOG_OUT}
}
