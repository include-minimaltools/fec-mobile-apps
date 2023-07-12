import Image from "next/image";
import { FC } from "react";

type Props = {
  title: string;
  href: string;
  description: string;
  previewUrl: string;
};

const SingleAppSection: FC<Props> = ({ title, href, description, previewUrl }) => {
  return (
    <section className="feature section pt-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ml-auto align-self-center">
            <div className="feature-content">
              <h2>
                Aplicación <a href={href}>{title}</a>
              </h2>
              <p>{description}</p>
            </div>
            {/* <div className="testimonial">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                dolores ipsum culpa eligendi recusandae illum odit fugiat!
                Quasi, sunt possimus porro magni vero voluptas unde laborum
                nulla labore facilis consequatur?
              </p>
              <ul className="list-inline meta">
                <li className="list-inline-item">
                  <img
                    src="/images/testimonial/feature-testimonial-thumb.jpg"
                    alt=""
                  />
                </li>
                <li className="list-inline-item">
                  Jonathon Andrew , Themefisher.com
                </li>
              </ul>
            </div> */}
          </div>
          <div className="col-lg-6 mr-auto justify-content-center">
            <div className="image-content" data-aos="fade-left">
              <Image
                width={1374}
                height={1326}
                className="img-fluid"
                src={previewUrl}
                alt="ipad"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleAppSection;
