"use client";

import { useEffect, useState } from "react";
import { ProjectCollection } from "~/firebase/database";
import { Project } from "~/firebase/models";

const ProjectMenu = () => {
  const [projects, setProjects] = useState<Project[]>();
  
  useEffect(() => new ProjectCollection().subscribeToAll(setProjects), []);

  return (
    <li className="nav-item dropdown @@home">
      <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
        Proyectos
      </a>
      <ul className="dropdown-menu">
        {projects?.map(({ id, title }) => (
          <li key={id}>
            <a className="dropdown-item @@home1" href={`/projects/${id}`}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
export default ProjectMenu;
