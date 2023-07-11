import Markdown from "markdown-to-jsx";
import { notFound } from "next/navigation";
import { ProjectCollection } from "~/firebase/database/";
import { AuthorCard, CommentArea } from "./components";
import Image from "next/image";

const ProjectPage = async (props: any) => {
  const id = props.params.slug;
  const data = await new ProjectCollection().get(id);

  if (!data) notFound();

  const { title, authors, content, coverUrl, videoUrl } = data;

  return (
    <section className="blog-single">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <article className="single-post">
              <div className="post-title text-center">
                <h1>{title}</h1>
                <ul className="list-inline post-tag">
                  <li className="list-inline-item">Asesor(a):</li>
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
                  <Image fill src={coverUrl} alt="feature-image" priority />
                </div>
                <Markdown>{content}</Markdown>
              </div>
            </article>
            {videoUrl && (
              <section className="section video-promo bg-promo-video">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="content-block">
                        <h2>Video de Presentación</h2>
                        <a data-fancybox="" href={videoUrl}>
                          <i className="ti-control-play video" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            <div className="about-author mt-5">
              <h2>Desarrolladores</h2>
              {authors.map((author) => (
                <AuthorCard key={author.name} {...author} />
              ))}
            </div>
            <CommentArea projectId={id} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectPage;
