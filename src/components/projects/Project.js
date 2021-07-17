//    REDUX
import { connect } from "react-redux";

//    Actions
import { selectActualProject } from '../../actions/formAction'
import { getTheTasks } from "../../actions/taskAction";

 const Project = ({project, getTheTasks, selectActualProject}) => {

  const handleClick = () => {
    selectActualProject(project.id) 
    getTheTasks(project.id)
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

const mapDispatchToProps = {
  getTheTasks,
  selectActualProject
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps, mapDispatchToProps)(Project)
