import { 
  GET_TASK,
  ADD_TASK,
  ADD_TASK_ERROR,
  TASK_ERROR,
  DELETE_TASK,
  EDIT_TASK, 
  ACTUAL_TASK
} from "../types"

const initialState = {
  projectTasks: [],
  loading: false,
  error: null,
  taskError: null,
  actualTask: null
}


export default function taskReducer(state = initialState, action){
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        projectTasks: action.payload 
      }
    
    case ADD_TASK:
      return {
        ...state,
        projectTasks: [action.payload, ...state.projectTasks],
        loading: false,
        taskError: false
      }

    case ADD_TASK_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case TASK_ERROR: 
      return {
        ...state,
        taskError: action.payload
      }

    case DELETE_TASK:
      return {
        ...state,
        projectTasks: state.projectTasks.filter(task => task._id !== action.payload)
      }

    case ACTUAL_TASK:
      return {
        ...state,
        actualTask: action.payload
      }

    case EDIT_TASK:
      return {
        ...state,
        projectTasks: state.projectTasks.map(task => task._id === action.payload._id ? action.payload : task),
        actualTask: null
      }

    default:
      return state
  }
}
