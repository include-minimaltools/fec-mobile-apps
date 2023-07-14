"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { JuryCollection } from "~/firebase/database";
import { Jury } from "~/firebase/models";
import ProjectList from "./ProjectList";

const RecommendedSection = () => {
  const session = useSession();
  const [jury, setJury] = useState<Jury>();

  const email = session.data?.user?.email;

  useEffect(() => {
    if (email) new JuryCollection().subscribe(email, setJury);
  }, [email]);

  if (!email || !jury || !jury.active) return <></>;

  return (
    <section className="section investors">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2>Proyectos sin calificar</h2>
              <p>Te faltan por calificar estos proyectos</p>
            </div>
          </div>
          <ProjectList />
        </div>
      </div>
    </section>
  );
};
export default RecommendedSection;
