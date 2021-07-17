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
  msg: null,
  loading: true
}

export default function authReducer(state = initialState, action){
  switch(action.type){
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        auth: true,
        msg: null,
        loading: true,
      }

    case LOG_OUT:
    case LOGIN_ERROR:
    case REGISTER_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        auth: null,
        msg: action.payload,
        loading: false
      }

    case GET_USER:
      return {
        ...state,
        auth: true,
        user: action.payload,
        loading: false
      }

    default: 
      return state
  }
}
