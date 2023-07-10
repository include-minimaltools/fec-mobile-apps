import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { EditorCollection, ProjectCollection } from "~/firebase/database";
import { authOptions } from "~/pages/api/auth/[...nextauth]";
import { ProjectForm } from "./components";
import { Project } from "~/firebase/models";

const EditPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) notFound();

  const editorData = await new EditorCollection().get(session?.user?.email);

  if (!editorData) notFound();

  const projectData =
    (await new ProjectCollection().get(editorData.projectId)) ||
    ({} as Project);

  return (
    <section className="user-login section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <ProjectForm id={editorData.projectId} data={projectData} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default EditPage;
