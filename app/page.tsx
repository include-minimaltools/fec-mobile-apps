/* eslint-disable @next/next/no-img-element */
import { Countdown, TestimonialCard } from "./components";
import { calculateDiffDate } from "./utils";

const testimonials = [
  {
    description:
      "Año con año organizamos la feria de aplicaciones móviles donde damos a conocer el trabajo que se está realizando a nivel interno en la línea del desarrollo de software con aplicaciones móviles, donde se invita a empresas relacionadas a la rama de la informática.",
    author: "Glenda Barrios, Organizadora del evento",
    imageUrl: "images/testimonial/feature-testimonial-thumb.jpg",
  },
  {
    description:
      "Estamos emocionados por compartir nuestros proyectos con personas que saben de nuestra materia ... Este proyecto nos abre muchas puertas a nosotros como desarrolladores para tener un espacio a oportunidades de negocio ... El propósito de nuestra aplicación es tener un enfoque colaborativo en el que todos puedan apoyarse de nuestra aplicación",
    author: "Richard Briones, Participante de la V Edición",
    imageUrl: "images/testimonial/feature-testimonial-thumb.jpg",
  },
];

export default function Home() {
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
      <Countdown initialCountdown={calculateDiffDate(new Date("7/14/2023"))} />
      <section className="feature section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ml-auto justify-content-center">
              <div className="image-content" data-aos="fade-right">
                <img
                  className="img-fluid"
                  src="images/feature/feature-new-01.jpg"
                  alt="iphone"
                />
              </div>
            </div>
            <div className="col-lg-6 mr-auto align-self-center">
              <div className="feature-content">
                <h2>
                  Aplicación <a href="">Rommies</a>
                </h2>
                {/* Feature Description */}
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              {/* Testimonial Quote */}
              <div className="testimonial">
                <p>
                  InVision is a window into everything being designed at
                  Twitter. It gets all of our best work in one
                </p>
                <ul className="list-inline meta">
                  <li className="list-inline-item">
                    <img
                      src="images/testimonial/feature-testimonial-thumb.jpg"
                      alt=""
                    />
                  </li>
                  <li className="list-inline-item">
                    Jonathon Andrew , Themefisher.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ml-auto align-self-center">
              <div className="feature-content">
                <h2>
                  Aplicación <a href="">UNI Pass ID</a>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="testimonial">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  dolores ipsum culpa eligendi recusandae illum odit fugiat!
                  Quasi, sunt possimus porro magni vero voluptas unde laborum
                  nulla labore facilis consequatur?
                </p>
                <ul className="list-inline meta">
                  <li className="list-inline-item">
                    <img
                      src="images/testimonial/feature-testimonial-thumb.jpg"
                      alt=""
                    />
                  </li>
                  <li className="list-inline-item">
                    Jonathon Andrew , Themefisher.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mr-auto justify-content-center">
              <div className="image-content" data-aos="fade-left">
                <img
                  className="img-fluid"
                  src="images/feature/feature-new-02.jpg"
                  alt="ipad"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service section bg-gray">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>An Interface For Lifestyle</h2>
                <p>
                  <a href="https://themefisher.com/products/small-apps-free-app-landing-page-template/">
                    Small Apps
                  </a>{" "}
                  makes it easy to stay on top of your Life Style. No late
                  tasks. No gimmicks.
                </p>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 align-self-center">
              {/* Feature Image */}
              <div className="service-thumb left" data-aos="fade-right">
                <img
                  className="img-fluid"
                  src="images/feature/iphone-ipad.jpg"
                  alt="iphone-ipad"
                />
              </div>
            </div>
            <div className="col-lg-5 mr-auto align-self-center">
              <div className="service-box">
                <div className="row align-items-center">
                  <div className="col-md-6 col-xs-12">
                    <div className="service-item">
                      <i className="ti-bookmark" />
                      <h3>Easy Prototyping</h3>
                      <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Curabitur aliquet quam id dui
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="service-item">
                      <i className="ti-pulse" />
                      <h3>Sensor Bridge</h3>
                      <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Curabitur aliquet quam id dui
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="service-item">
                      <i className="ti-bar-chart" />
                      <h3>Strategist</h3>
                      <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Curabitur aliquet quam id dui
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-xs-12">
                    <div className="service-item">
                      <i className="ti-panel" />
                      <h3>Art Direction</h3>
                      <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor
                        at sem. Curabitur aliquet quam id dui
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video-promo section bg-lalo" id="v-edition">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-block">
                <h2>Mira los resultados de la V Edición</h2>
                <p>
                  La Facultad de Electrotecnia y Computación activa en el
                  desarrollo de aplicaciones, efectuó la Exposición de Proyectos
                  en la V Feria de Aplicaciones móviles, desarrollados por
                  futuros ingenieros en computación.
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
      <section className="section testimonial" id="testimonial">
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
    </>
  );
}
