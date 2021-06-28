import {combineReducers} from "redux";
import formReducer from './formReducer'
import tasksReducer from './taskReducer'

export default combineReducers({
  form: formReducer,
  tasks: tasksReducer
})
