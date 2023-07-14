"use client";

import { Rating } from "@progress/kendo-react-inputs";
import { Timestamp } from "firebase/firestore";
import { signIn, useSession } from "next-auth/react";
import { FC, useEffect, useState } from "react";
import { JuryCollection, RateCollection } from "~/firebase/database";
import { Criteria, EMPTY_RATE, Jury, Rate } from "~/firebase/models";

export type Props = {
  projectId: string;
  isJury?: boolean;
};

const RateForm: FC<Props> = ({ projectId, isJury }) => {
  const session = useSession();
  const [rate, setRate] = useState<Rate>();

  const email = session.data?.user?.email;

  useEffect(() => {
    if (email) return new RateCollection(projectId).subscribe(email, setRate);
  }, [projectId, email]);

  if (!email || !rate) return <></>;

  const onChangeRating = async (value: number, criteria: Criteria) => {
    const rateCollection = new RateCollection(projectId);

    const exist = await rateCollection.exists(email);

    if (!exist)
      return await rateCollection.createWithId({
        id: email,
        date: Timestamp.now(),
        ...EMPTY_RATE,
        [criteria]: value ?? 0,
      });

    await rateCollection.update({
      id: email,
      [criteria]: value ?? 0,
    });
  };

  if (!isJury) return <p>No estas autorizado para calificar</p>;

  const currentRate =
    (rate.complexity +
      rate.funcionality +
      rate.innovation +
      rate.presentation +
      rate.userExperience) *
    4;

  return (
    <section className="company-fun-facts section rating-area">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Calificación del Proyecto</h2>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-lg-3 col-md-6">
            <div className="fun-fact">
              <i className="ti-star" />
              <h3>{isNaN(currentRate) ? "-" : currentRate.toFixed(1)}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="rating-item">
        <h4>Presentación del Producto</h4>
        <p className="text-muted">
          Capacidad de los autores para comunicar de manera efectiva y
          persuasiva los aspectos clave de su aplicación móvil.
        </p>
        <div className="d-flex justify-content-center">
          <Rating
            defaultValue={rate.presentation || 0}
            value={rate.presentation || 0}
            onChange={({ value }) => onChangeRating(value, "presentation")}
          />
        </div>
      </div>
      <div className="rating-item">
        <h4>Experiencia de Usuario y Diseño de Interfaz</h4>
        <p className="text-muted">
          Interfaz intuitiva, con una navegación fluida, iconografía y elementos
          interactivos adecuados para el contexto móvil.
        </p>
        <div className="d-flex justify-content-center">
          <Rating
            defaultValue={rate.userExperience || 0}
            value={rate.userExperience || 0}
            onChange={({ value }) => onChangeRating(value, "userExperience")}
          />
        </div>
      </div>
      <div className="rating-item">
        <h4>Funcionalidad del producto</h4>
        <p className="text-muted">
          Evalúa las características y capacidades de la aplicación móvil en
          relación con sus objetivos y propósito
        </p>
        <div className="d-flex justify-content-center">
          <Rating
            defaultValue={rate.funcionality || 0}
            value={rate.funcionality || 0}
            onChange={({ value }) => onChangeRating(value, "funcionality")}
          />
        </div>
      </div>
      <div className="rating-item">
        <h4>Complejidad del producto</h4>
        <p className="text-muted">
          Examina el nivel de complejidad de la aplicación móvil y cómo impacta
          en su usabilidad y comprensión.
        </p>
        <div className="d-flex justify-content-center">
          <Rating
            defaultValue={rate.complexity || 0}
            value={rate.complexity || 0}
            onChange={({ value }) => onChangeRating(value, "complexity")}
          />
        </div>
      </div>
      <div className="rating-item">
        <h4>Innovación</h4>
        <p className="text-muted">
          Mide la originalidad y novedad de la aplicación móvil en comparación
          con otras aplicaciones existentes en el mercado.
        </p>
        <div className="d-flex justify-content-center">
          <Rating
            defaultValue={rate.innovation || 0}
            value={rate.innovation || 0}
            onChange={({ value }) => onChangeRating(value, "innovation")}
          />
        </div>
      </div>
    </section>
  );
};
export default RateForm;
