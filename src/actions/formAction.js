import { 
  SHOW_FORM, ADD_PROJECT,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_ERROR,
  GET_PROJECTS,
  FORM_ERROR,
  ACTUAL_PROJECT
} from "../types"

const projects = [
  {name: 'pasear', id: 1}
]

export function addNewProject(project){
  return (dispatch) => {
    dispatch(addProject())

    try {
      dispatch(addProjectSuccess(project))  
    } catch (err) {
      dispatch(addProjectError()) 
    }
  }
}

export function setVisibleForm(){
  return (dispatch) => {
    dispatch(showForm())
  }
}

export function getTheProjects(){
  return (dispatch) => {
    dispatch(getProjects(projects))
  }
}

export function isError(){
  return (dispatch) => {
    dispatch(formError())
  }
}

export function selectActualProject(project){
  return (dispatch) => {
    dispatch(actualProject(project))
  }
}

const showForm = () => ({
  type: SHOW_FORM
})

const addProject = () => ({
  type: ADD_PROJECT,
  payload: true
})

const addProjectSuccess = (project) => ({
  type : ADD_PROJECT_SUCCESS,
  payload: project
})

const addProjectError = () => ({
  type : ADD_PROJECT_ERROR
})

const getProjects = () => ({
  type: GET_PROJECTS,
  payload: projects
})

const formError = () => ({
  type: FORM_ERROR,
  payload: true
})

const actualProject = project => ({
  type: ACTUAL_PROJECT,
  payload: project
})
