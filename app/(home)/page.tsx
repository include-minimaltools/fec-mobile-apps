import { EditionCollection, ProjectCollection } from "~/firebase/database";
import {
  ComplexAppSection,
  Countdown,
  ScheduleSection,
  SimpleAppSection,
  SingleAppSection,
  TestimonialCard,
} from "./components";
import { calculateDiffDate } from "./utils";
import { notFound } from "next/navigation";
import moment from "moment";
import Image from "next/image";

export default async function Home() {
  const edition = await new EditionCollection().getCurrentEdition();

  if (!edition) notFound();

  const projects = (await new ProjectCollection().getAll()) || [];

  // await new EditionCollection().update({
  //   id: edition.id,
  //   testimonials: [...edition.testimonials, {
  //     description: "Fue una oportunidad unica para conocer las diferentes aplicaiones desarrolladas, así como para interactuar con otros sobre los desafios y oportunidades relacionados al campo que abarca su aplicacion.",
  //     author: "Luis Pineda",
  //     imageUrl: "/images/team/luis-pineda.jpg"
  //   }]
  // })

  const {
    testimonials,
    eventDate,
    videoData,
    judgesPanel,
    locationDescription,
  } = edition;

  const dateWithHours = moment(eventDate.toDate()).subtract(3, "seconds");

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
                Facultad de Electrotecnia y Computación te invita a
              </p>
              <h1 className="text-white font-weight-bold mb-4">
                VI Edición de la Feria de Aplicaciones Móviles
              </h1>
              {locationDescription && (
                <h5
                  className="text-white"
                  data-aos="fade-right"
                  data-aos-duration={500}
                  data-aos-delay={100}
                >
                  <i className="ti-location-pin" />
                  {locationDescription}
                </h5>
              )}
            </div>
            <div className="col-md-6 text-center order-1 order-md-2">
              <Image
                width={1280}
                height={768}
                className="img-fluid"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-delay={100}
                src="/images/logos/logo-white.png"
                alt="screenshot"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <Countdown
        initialCountdown={calculateDiffDate(dateWithHours.toDate())}
        eventDate={eventDate.toDate()}
      />

      <ScheduleSection />

      {testimonials.length && (
        <section
          className="section testimonial p-0"
          id="testimonial"
          style={{ paddingTop: "1rem" }}
        >
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

      {projects
        .sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0))
        .map(
          ({ title, description, previewUrl, id, sectionType, features }) => {
            if (sectionType === "SingleAppSection")
              return (
                <SingleAppSection
                  title={title}
                  key={id}
                  description={description}
                  href={`/projects/${id}`}
                  previewUrl={previewUrl}
                />
              );
            else if (sectionType === "SimpleAppSection")
              return (
                <SimpleAppSection
                  title={title}
                  key={id}
                  description={description}
                  href={`/projects/${id}`}
                  previewUrl={previewUrl}
                />
              );
            else if (sectionType === "ComplexAppSection")
              return (
                <ComplexAppSection
                  title={title}
                  key={id}
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
                    data-fancybox
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

      <section className="job-list section" id="judges">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 m-auto">
              <div className="block">
                <div className="title text-center">
                  <h2>Jurado Calificador</h2>
                </div>
                {judgesPanel.map(({ name, position }, index) => (
                  <div className="job" key={`job-${index}`}>
                    <div className="content">
                      <h3>{name}</h3>
                      <p>{position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
