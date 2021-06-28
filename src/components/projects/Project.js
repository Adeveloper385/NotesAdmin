import { useDispatch } from "react-redux";
import { selectActualProject } from '../../actions/formAction'
import { getTheTasks } from "../../actions/taskAction";

export const Project = ({project}) => {

  const dispatch = useDispatch()
  const selectProject = () => dispatch(selectActualProject(project.id))
  const getTasks = () => dispatch(getTheTasks())

  const handleClick = () => {
    selectProject(project.id) 
    getTasks()
  }

  return (
    <li>
      <button 
        className="btn btn-blank"
        onClick={handleClick}
      >{project.name}</button>
    </li>
  );
};
