import Image from "next/image";
import { FC } from "react";

type Props = {
  title: string;
  href: string;
  description: string;
  previewUrl: string;
};

const SimpleAppSection: FC<Props> = ({
  title,
  description,
  href,
  previewUrl,
}) => {
  return (
    <section className="feature section pt-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ml-auto justify-content-center">
            <div className="image-content" data-aos="fade-right">
              <Image
                className="img-fluid"
                width={1144}
                height={1244}
                src={previewUrl}
                alt="iphone"
              />
            </div>
          </div>
          <div className="col-lg-6 mr-auto align-self-center">
            <div className="feature-content">
              <h2>
                Aplicación <a href={href}>{title}</a>
              </h2>
              {/* Feature Description */}
              <p className="desc">{description}</p>
            </div>
            {/* Testimonial Quote */}
            {/* <div className="testimonial">
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
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SimpleAppSection;
