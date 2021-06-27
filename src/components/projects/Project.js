import { useDispatch } from "react-redux";
import { selectActualProject } from '../../actions/formAction'


export const Project = ({project}) => {

  const dispatch = useDispatch()
  const selectProject = () => dispatch(selectActualProject(project))

  const handleClick = (e) => {
    selectProject(project) 
    console.log(project)
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
