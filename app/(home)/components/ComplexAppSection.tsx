import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  name: string;
  description: string;
  features: Feature[];
  image: string;
  href: string;
};

const ComplexAppSection: FC<Props> = ({
  name,
  href,
  image,
  features,
  description,
}) => {
  return (
    <section className="service section bg-gray">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>
                Aplicación
                <a href={href}>
                  {name}
                </a>
              </h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 align-self-center">
            <div className="service-thumb left" data-aos="fade-right">
              <Image
                width={1000}
                height={650}
                className="img-fluid"
                src={image}
                alt="iphone-ipad"
              />
            </div>
          </div>
          <div className="col-lg-5 mr-auto align-self-center">
            <div className="service-box">
              <div className="row align-items-center">
                {features?.map(({ title, description, icon }) => (
                  <div key={title} className="col-md-6 col-xs-12">
                    <div className="service-item">
                      <i className={clsx(icon || "ti-info-alt")} />
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ComplexAppSection;
