import { NewProjectForm } from "../projects/NewProjectForm";
import { ProjectList } from '../projects/ProjectList'

export const Aside = () => {
  return (
    <aside>
      <h1>
        Notes<span>Admin</span>
      </h1>
      <NewProjectForm />
      <div className="proyectos">
        <h2>Tus Proyectos</h2>

        <ProjectList />
      </div>
    </aside>
  );
};
