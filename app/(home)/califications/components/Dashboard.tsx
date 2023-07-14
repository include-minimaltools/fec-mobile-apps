"use client";

import { FC, useEffect, useState } from "react";
import { CRITERIA_WITH_TITLE, Jury, Project, Rate } from "~/firebase/models";
import { Bar, Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { ProjectCollection } from "~/firebase/database";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

type Props = {
  projects: Project[];
  juries: Jury[];
  rates: Rate[];
};

const colors = [
  "#007FBF",
  "#00547F",
  "#002A40",
  "#0087CC",
  "#006EA6",
  "#520080",
  "#6B00BF",
  "#946CFF",
  "#290040",
  "#9400E6",
];

const radarColors = [
  "#34E800",
  "#B42AFF",
  "#FF0000",
  "#0CE8B1",
  "#FF881A",
  "#07288C",
  "#361672",
  "#BF1A43",
];

const Dashboard: FC<Props> = ({ projects, juries, rates }) => {
  

  const orderedProjects = projects.sort((a, b) => a.order - b.order);

  const radarData = {
    labels: CRITERIA_WITH_TITLE.map((x) => x.title),
    datasets: orderedProjects.map((project, index) => ({
      label: project.title,
      data: CRITERIA_WITH_TITLE.map(
        ({ criteria }) =>
          rates
            .filter((x) => x.projectId === project.id && juries.find((y) => y.id === x.email)?.active)
            .reduce((acum, data) => acum + data[criteria] * 2, 0) /
          juries.length
      ),
      backgroundColor: radarColors[index] + "75",
    })),
  };

  const barData = {
    // @ts-ignore
    labels: orderedProjects.map((x) => x.title),
    datasets: [
      {
        label: "Puntuación",
        data: orderedProjects.map(
          (data) =>
            rates
              .filter((x) => x.projectId === data.id && juries.find((y) => y.id === x.email)?.active)
              .reduce((acum, data) => {
                const result =
                  data.complexity +
                  data.funcionality +
                  data.innovation +
                  data.presentation +
                  data.userExperience;

                return isNaN(result) ? acum : acum + result * 4;
              }, 0) / juries.length
        ),
        backgroundColor: colors,
      },
    ],
  };

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Gráficas de Votaciones</h2>
              <p>
                Las votaciones se verán reflejadas en las gráficas en tiempo
                real
              </p>
            </div>
          </div>
          <Bar
            data={barData}
            options={{
              indexAxis: "x",
              scales: {
                y: {
                  // max: 100,
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "Users Gained between 2016-2020",
                },
                legend: {
                  display: true,
                },
              },
            }}
          />
          <div className="col-12" style={{ marginTop: "5rem" }}>
            <div className="section-title">
              <h2>Gráficas de Habilidades</h2>
              <p>
                Las votaciones se verán reflejadas en las gráficas en tiempo
                real
              </p>
            </div>
          </div>
          <div
            className="col-12 d-flex justify-content-center"
            style={{ maxHeight: "50%" }}
          >
            <Radar
              data={radarData}
              options={{
                scales: {
                  r: {
                    // max: 10,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
