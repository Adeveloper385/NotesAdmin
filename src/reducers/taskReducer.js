import { 
  GET_TASK,
  ADD_TASK,
  ADD_TASK_ERROR,
  ADD_TASK_SUCCESS,
  TASK_ERROR,
  DELETE_TASK,
  EDIT_TASK, 
  CHANGE_STATE,
  ACTUAL_TASK
} from "../types"

const initialState = {
  tasks: [],
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
        projectTasks: state.tasks.filter(task => task.projectId === action.payload) 
      }
    
    case ADD_TASK:
      return {
        ...state,
        loading: action.payload
      }

    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
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
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }

    case ACTUAL_TASK:
      return {
        ...state,
        actualTask: action.payload
      }

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
        actualTask: null
      }

    case CHANGE_STATE:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
      }

    default:
      return state
  }
}
