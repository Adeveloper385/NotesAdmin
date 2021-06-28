import { GET_TASK } from "../types";

export function getTheTasks() {
  return (disptach) => {
    disptach(getTask())
  }
}

const getTask = () => ({
  type: GET_TASK,
})
