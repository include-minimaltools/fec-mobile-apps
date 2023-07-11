"use client";

import { FC, useEffect, useState } from "react";
import { CommentCollection, RateCollection } from "~/firebase/database";
import { Comment, Rate } from "~/firebase/models";
import CommentItem from "./CommentItem";
import CommentForm from "./CommentForm";
import moment from "moment";
import { Rating } from "@progress/kendo-react-inputs";
import { signIn, useSession } from "next-auth/react";
import { Timestamp } from "firebase/firestore";

type Props = {
  projectId: string;
};

const CommentArea: FC<Props> = ({ projectId }) => {
  const session = useSession();
  const [comment, setComment] = useState<Comment[]>([]);
  const [rates, setRates] = useState<Rate[]>([]);

  useEffect(
    () => new CommentCollection(projectId).subscribeToAll(setComment),
    [projectId]
  );

  useEffect(
    () => new RateCollection(projectId).subscribeToAll(setRates),
    [projectId]
  );

  const onChangeRating = async (value: number) => {
    if (!session.data?.user?.email) return signIn("google");

    if (!value)
      return await new RateCollection(projectId).delete(session.data.user.email);

    await new RateCollection(projectId).createWithId({
      id: session.data.user.email,
      date: Timestamp.now(),
      rate: value,
    });
  };

  return (
    <>
      <section className="company-fun-facts section">
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
                <h3>
                  {rates.reduce((a, b) => a + b.rate, 0) / rates.length || "-"}
                </h3>
                <p>
                  {rates.length === 0
                    ? "No se ha votado aún"
                    : rates.length === 1
                    ? "Se ha realizado una votación"
                    : `Se han realizado ${rates.length} votaciones`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="comments-area">
        <h4>{comment.length} Comentarios</h4>
        {comment
          // @ts-ignore
          .sort((a, b) => moment(a.date.toDate()) - moment(b.date.toDate()))
          .map(({ author, avatarUrl, comment, date, id }) => (
            <CommentItem
              key={id}
              author={author}
              avatarUrl={avatarUrl}
              comment={comment}
              date={date}
            />
          ))}
      </div>
      <div className="comments-area">
        <h4>Califica este proyecto</h4>

        <div className="d-flex justify-content-center">
          {session.data?.user ? (
            <Rating
              defaultValue={
                rates.find((x) => x.id === session.data.user?.email)?.rate || 0
              }
              onChange={({ value }) => onChangeRating(value)}
            />
          ) : (
            <div className="d-flex flex-column">
              <h4>Inicia sesión para valorar este proyecto</h4>
              <button
                className="btn btn-sm btn-secondary align-self-center"
                onClick={() => signIn("google")}
              >
                Iniciar sesión
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="comment-form">
        <h4>Comenta tus dudas</h4>
        <CommentForm projectId={projectId} />
      </div>
    </>
  );
};
export default CommentArea;
