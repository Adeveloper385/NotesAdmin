import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USER,
  LOG_OUT
} from '../types'

const initialState = {
  token: localStorage.getItem('token'),
  auth: null,
  user: null,
  msg: null
}

export default function authReducer(state = initialState, action){
  switch(action.type){
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        auth: true,
        msg: null
      }

    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        msg: action.payload
      }

    case GET_USER:
      return {
        ...state,
        user: action.payload
      }
  
    default: 
      return state
  }
}
