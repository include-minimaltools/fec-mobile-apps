import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { ProjectCollection } from "~/firebase/database/";
import { AuthorCard } from "./components";
import Image from "next/image";

const ProjectPage = async (props: any) => {
  const slug = props.params.slug;
  const data = await new ProjectCollection().get(slug);

  if (!data) notFound();

  const { title, authors, content, coverUrl, description, id, previewUrl } =
    data;

  return (
    <section className="section blog-single">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <article className="single-post">
              <div className="post-title text-center">
                <h1>{title}</h1>
                <ul className="list-inline post-tag">
                  <li className="list-inline-item">
                    Asesor(a):
                  </li>
                  <li className="list-inline-item">
                    <Image
                      width={30}
                      height={30}
                      src="/images/team/glenda-barrios.jpg"
                      alt="author-thumb"
                    />
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Glenda Barrios</a>
                  </li>
                </ul>
              </div>
              {/* Post body */}
              <div className="post-body">
                <div className="feature-image">
                  <Image
                    className="img-fluid"
                    width={700}
                    height={349}
                    src={coverUrl}
                    alt="feature-image"
                  />
                </div>
                <Markdown>{content}</Markdown>
              </div>
            </article>
            <div className="about-author">
              <h2>Desarrolladores</h2>
              {authors.map((author) => (
                <AuthorCard key={author.name} {...author} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectPage;
