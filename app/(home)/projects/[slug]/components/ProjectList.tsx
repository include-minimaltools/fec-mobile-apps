/* eslint-disable @next/next/no-img-element */
"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ProjectCollection } from "~/firebase/database";
import { Project, Rate } from "~/firebase/models";

const ProjectList = () => {
  const session = useSession();
  const email = session?.data?.user?.email;

  const [rates, setRates] = useState<Rate[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => new ProjectCollection().subscribeToGroup(setRates), []);
  useEffect(() => new ProjectCollection().subscribeToAll(setProjects), []);

  return (
    <>
      {projects
        .filter(
          (project) =>
            !rates
              .filter((rate) => rate.email === email)
              .some((x) => x.projectId === project.id)
        )
        .map(({ coverUrl, id, title, description }) => (
          <div key={id} className="col-xl-3 col-lg-4 col-sm-6">
            <div className="block text-center">
              <div className="image shadow hover-zoom">
                <img height={200} src={coverUrl} alt="investor" />
              </div>
              <h3>{title}</h3>
              <p
                style={{
                  maxHeight: 75,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {description}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};
export default ProjectList;
