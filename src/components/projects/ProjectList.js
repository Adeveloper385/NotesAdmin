import { Project } from "./Project";
import { useSelector } from "react-redux";
import {useEffect} from "react";
import { getTheProjects } from "../../actions/formAction";
import { useDispatch } from "react-redux";

export const ProjectList = () => {


  const storeState = useSelector(state => state.form)
  const dispatch = useDispatch
  const getProjects = dispatch(() => getTheProjects)


  if (storeState.projects.lenght === 0) return null
  return (
    <ul className="listado-proyectos">
      {storeState.projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};
