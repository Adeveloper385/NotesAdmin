import { GET_TASK } from "../types"

const initialState = {
  tasks: []
}

const tasksP = [{name: 'diseñar el logo', projectName: 'diseñar pagina'}]

export default function (state = initialState, action){
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
        tasks: tasksP
      }
    
    default:
      return state
  }
}
