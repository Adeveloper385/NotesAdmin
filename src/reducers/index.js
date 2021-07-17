import {combineReducers} from "redux";
import formReducer from './formReducer'
import tasksReducer from './taskReducer'
import alertReducer from "./alertReducer";
import authReducer from './authReducer'

export default combineReducers({
  form: formReducer,
  projectTasks: tasksReducer,
  alertState: alertReducer,
  authState: authReducer,
})
