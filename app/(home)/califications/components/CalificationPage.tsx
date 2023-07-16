"use client";
import { FC, useEffect, useState } from "react";
import { ProjectCollection } from "~/firebase/database";
import { Jury, Project, Rate } from "~/firebase/models";
import { PositionTable } from "~/app/components";
import { Dashboard, JurySection } from "./index";

type Props = {
  projects: Project[];
  juries: Jury[];
};

const CalificationPage: FC<Props> = ({ juries, projects }) => {
  const [rates, setRates] = useState<Rate[]>([]);

  useEffect(() => {
    return new ProjectCollection().subscribeToGroup(setRates);
  }, []);

  return (
    <>
      <Dashboard rates={rates} projects={projects} juries={juries} />

      <JurySection rates={rates} projects={projects} juries={juries} />

      <PositionTable rates={rates} projects={projects} juries={juries} />
    </>
  );
};
export default CalificationPage;
