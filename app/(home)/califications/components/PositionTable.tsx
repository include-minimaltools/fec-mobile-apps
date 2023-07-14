"use client";

import Image from "next/image";
import { FC } from "react";
import { Jury, Project, Rate } from "~/firebase/models";

type Props = {
  projects: Project[];
  juries: Jury[];
  rates: Rate[];
};

const PositionTable: FC<Props> = ({ projects, juries, rates }) => {
  const bestProjects = projects.sort(
    (a, b) =>
      rates
        .filter((x) => x.projectId === b.id && juries.find((y) => y.id === x.email)?.active)
        .reduce((acum, data) => {
          const result =
            data.complexity +
            data.funcionality +
            data.innovation +
            data.presentation +
            data.userExperience;

          return isNaN(result) ? acum : acum + result;
        }, 0) /
        juries.length -
      rates
        .filter(
          (x) =>
            x.projectId === a.id && juries.find((y) => y.id === x.email)?.active
        )
        .reduce((acum, data) => {
          const result =
            data.complexity +
            data.funcionality +
            data.innovation +
            data.presentation +
            data.userExperience;

          return isNaN(result) ? acum : acum + result;
        }, 0) /
        juries.length
  );

  return (
    <section className="job-list section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 m-auto">
            <div className="block">
              <div className="title text-center">
                <h2>Ganadores de la VI Edición</h2>
              </div>
              {bestProjects.slice(0, 5).map(({ id, title, authors }, index) => (
                <div className="job" key={id}>
                  <div>
                    {index < 3 && (
                      <Image
                        width={75}
                        height={75}
                        alt=""
                        src={`/images/gallery/${index + 1}.png`}
                      />
                    )}
                  </div>
                  <div className="content">
                    <h3>
                      <span className="font-weight-bold">{index + 1}. </span>
                      {title}
                    </h3>
                    <p>
                      {authors.map((x) => (
                        <>
                          {x.name} <br />
                        </>
                      ))}
                    </p>
                  </div>
                  <div className="apply-button">
                    <a
                      href="#"
                      className="btn btn-main-sm"
                      data-toggle="modal"
                      data-target="#android-developer"
                    >
                      {rates
                        .filter((x) => x.projectId === id)
                        .reduce((acum, data) => {
                          const result =
                            data.complexity +
                            data.funcionality +
                            data.innovation +
                            data.presentation +
                            data.userExperience;

                          return isNaN(result) ? acum : acum + result * 4;
                        }, 0) / juries.length}{" "}
                      %
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PositionTable;
