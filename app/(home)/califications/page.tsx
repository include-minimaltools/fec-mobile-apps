import { JuryCollection, ProjectCollection } from "~/firebase/database";
import CalificationPage from "./components/CalificationPage";

const CalificationsPage = async () => {
  const projects = await new ProjectCollection().getAll();
  const juries = await new JuryCollection().getAll();

  const activeJuries = juries.filter((x) => x.active);

  if (!activeJuries.length)
    return (
      <section className="section investors" style={{ height: "85vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>No hay Jueces</h2>
                <p>No se encuentran jueces activos en este momento</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  return <CalificationPage juries={activeJuries} projects={projects} />;
};
export default CalificationsPage;
