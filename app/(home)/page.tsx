import { EditionCollection, ProjectCollection } from "~/firebase/database";
import {
  ComplexAppSection,
  Countdown,
  SimpleAppSection,
  SingleAppSection,
  TestimonialCard,
} from "./components";
import { calculateDiffDate } from "./utils";
import { notFound } from "next/navigation";

export default async function Home() {
  const edition = await new EditionCollection().getCurrentEdition();

  if (!edition) notFound();

  const projects = (await new ProjectCollection().getAll()) || [];

  const { eventSchedule, testimonials, eventDate, videoData } = edition;

  return (
    <>
      <section className="section gradient-banner">
        <div className="shapes-container">
          <div
            className="shape"
            data-aos="fade-down-left"
            data-aos-duration={1500}
            data-aos-delay={100}
          />
          <div
            className="shape"
            data-aos="fade-down"
            data-aos-duration={1000}
            data-aos-delay={100}
          />
          <div
            className="shape"
            data-aos="fade-up-right"
            data-aos-duration={1000}
            data-aos-delay={200}
          />
          <div
            className="shape"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-delay={200}
          />
          <div
            className="shape"
            data-aos="fade-down-left"
            data-aos-duration={1000}
            data-aos-delay={100}
          />
          <div
            className="shape"
            data-aos="fade-down-left"
            data-aos-duration={1000}
            data-aos-delay={100}
          />
          <div
            className="shape"
            data-aos="zoom-in"
            data-aos-duration={1000}
            data-aos-delay={300}
          />
          <div
            className="shape"
            data-aos="fade-down-right"
            data-aos-duration={500}
            data-aos-delay={200}
          />
          <div
            className="shape"
            data-aos="fade-down-right"
            data-aos-duration={500}
            data-aos-delay={100}
          />
          <div
            className="shape"
            data-aos="zoom-out"
            data-aos-duration={2000}
            data-aos-delay={500}
          />
          <div
            className="shape"
            data-aos="fade-up-right"
            data-aos-duration={500}
            data-aos-delay={200}
          />
          <div
            className="shape"
            data-aos="fade-down-left"
            data-aos-duration={500}
            data-aos-delay={100}
          />
          <div
            className="shape"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-delay={0}
          />
          <div
            className="shape"
            data-aos="fade-down"
            data-aos-duration={500}
            data-aos-delay={0}
          />
          <div
            className="shape"
            data-aos="fade-up-right"
            data-aos-duration={500}
            data-aos-delay={100}
          />
          <div
            className="shape"
            data-aos="fade-down-left"
            data-aos-duration={500}
            data-aos-delay={0}
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-2 order-md-1 text-center text-md-left">
              <p className="text-white mb-5">
                Universidad Nacional de Ingeniería te invita a
              </p>
              <h1 className="text-white font-weight-bold mb-4">
                VI Edición de la Feria de Aplicaciones Móviles
              </h1>
            </div>
            <div className="col-md-6 text-center order-1 order-md-2">
              {/* <img
                className="img-fluid"
                src="images/mobile.png"
                alt="screenshot"
              /> */}
            </div>
          </div>
        </div>
      </section>
      <Countdown
        initialCountdown={calculateDiffDate(new Date(eventDate.toDate()))}
      />
      <section className="section schedule">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>
                  <span className="alternate">Programa</span> del Evento
                </h2>
                <p>
                  Explora nuestro completo programa de eventos para obtener una
                  visión detallada de la VI Feria de Aplicaciones Móviles.
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "-6rem" }}>
            <div className="col-12">
              <div className="schedule-contents bg-schedule">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active schedule-item"
                    id="nov20"
                  >
                    <ul className="m-0 p-0">
                      <li className="headings">
                        <div className="time">Hora</div>
                        <div className="speaker">Anfitrión</div>
                        <div className="subject">Tópico</div>
                      </li>
                      {eventSchedule.map(({ host, subject, time }) => (
                        <li key={time} className="schedule-details">
                          <div className="block">
                            <div className="time">
                              <i className="fa fa-clock-o" />
                              <span className="time">{time}</span>
                            </div>
                            <div className="speaker">
                              <span className="name">{host.name}</span>
                            </div>
                            <div className="subject">{subject}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {testimonials.length && (
        <section className="section testimonial" id="testimonial" style={{ paddingTop: "1rem"}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Testimonial Slider */}
                <div className="testimonial-slider owl-carousel owl-theme">
                  {testimonials.map(({ author, description, imageUrl }) => (
                    <TestimonialCard
                      key={author}
                      author={author}
                      description={description}
                      imageUrl={imageUrl}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {projects.map(
        ({ title, description, previewUrl, id, sectionType, features }) => {
          if (sectionType === "SingleAppSection")
            return (
              <SingleAppSection
                title={title}
                description={description}
                href={`/projects/${id}`}
                previewUrl={previewUrl}
              />
            );
          else if (sectionType === "SimpleAppSection")
            return (
              <SimpleAppSection
                title={title}
                description={description}
                href={`/projects/${id}`}
                previewUrl={previewUrl}
              />
            );
          else if (sectionType === "ComplexAppSection")
            return (
              <ComplexAppSection
                title={title}
                description={description}
                href={`/projects/${id}`}
                previewUrl={previewUrl}
                features={features}
              />
            );
        }
      )}

      {videoData && (
        <section className="video-promo section bg-lalo" id="v-edition">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="content-block">
                  <h2>Mira los resultados de la V Edición</h2>
                  <p>
                    La Facultad de Electrotecnia y Computación activa en el
                    desarrollo de aplicaciones, efectuó la Exposición de
                    Proyectos en la V Feria de Aplicaciones móviles,
                    desarrollados por futuros ingenieros en computación.
                  </p>
                  <a
                    data-fancybox=""
                    href="https://www.youtube.com/watch?v=RWcWginJA1o"
                  >
                    <i className="ti-control-play video" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
