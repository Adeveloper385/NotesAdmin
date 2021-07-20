import {
  SHOW_FORM,
  ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
  GET_PROJECTS,
  FORM_ERROR,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR
} from "../types";

const initialState = {
  visible: false,
  projects: [],
  loading: false,
  error: null,
  project: [] ,
  msg: null
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_FORM:
      return {
        ...state,
        visible: !state.visible,
      };

    case ADD_PROJECT:
      return {
        ...state,
        loading: action.payload,
        error: false
      };

    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [ action.payload, ...state.projects],
        visible: false
      };

    case ADD_PROJECT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case FORM_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter(project => project._id === action.payload) 
      }

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project._id !== action.payload),
        project: []
      }

    case PROJECT_ERROR:
      return {
        ...state,
        msg: action.payload
      }

    default:
      return state;
  }
}
