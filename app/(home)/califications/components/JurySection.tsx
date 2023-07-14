/* eslint-disable @next/next/no-img-element */
"use client";

import { FC, useEffect, useState } from "react";
import { UserCollection } from "~/firebase/database";
import { Jury, Project, Rate, User } from "~/firebase/models";

type Props = {
  projects: Project[];
  juries: Jury[];
  rates: Rate[];
};

const JurySection: FC<Props> = ({ juries, projects, rates }) => {
  const [juryUsers, setJuryUsers] = useState<User[]>([]);

  useEffect(() => {
    new UserCollection().subscribeToAll((users) =>
      setJuryUsers(
        users.filter((user) => juries.some((x) => x.id === user.email))
      )
    );
  }, [juries]);

  return (
    <section className="section investors">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Jueces Deliberando</h2>
              <p>
                Jueces que se encuentran deliberando las notas en este momento
              </p>
            </div>
          </div>
          {juryUsers.map(({ id, image, name, email }) => (
            <div key={id} className="col-xl-3 col-lg-4 col-sm-6">
              <div className="block text-center">
                <div className="image shadow hover-zoom">
                  <img className="img-fluid" src={image} alt="investor" />
                </div>
                <h3>{name}</h3>

                {projects.every(({ id }) =>
                  rates
                    .filter((x) => x.email === email)
                    .some((x) => x.projectId === id)
                ) ? (
                  <p className="text-success">Finalizado</p>
                ) : (
                  <p className="text-danger">Deliberando</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default JurySection;
