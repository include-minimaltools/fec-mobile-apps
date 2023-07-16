"use client";

import moment from "moment";
import { FC, useEffect, useState } from "react";
import { Comment, Edition, Jury } from "~/firebase/models";
import { CommentItem, CommentForm, RateForm } from "./index";
import {
  CommentCollection,
  EditionCollection,
  JuryCollection,
} from "~/firebase/database";
import { useSession } from "next-auth/react";
import { CURRENT_EDITION } from "~/constants";

type Props = {
  projectId: string;
};

const CommentArea: FC<Props> = ({ projectId }) => {
  const session = useSession();
  const [comment, setComment] = useState<Comment[]>([]);
  const [edition, setEdition] = useState<Edition>();
  const [isJury, setIsJury] = useState<Jury>();
  const email = session.data?.user?.email;

  useEffect(
    () => new EditionCollection().subscribe(CURRENT_EDITION, setEdition),
    []
  );

  useEffect(() => {
    if (email) return new JuryCollection().subscribe(email, setIsJury);
  }, [session, email]);

  useEffect(
    () => new CommentCollection(projectId).subscribeToAll(setComment),
    [projectId]
  );

  return (
    <>
      {edition?.status === "in progress" && (
        <RateForm projectId={projectId} isJury={isJury?.active} />
      )}
      <div className="comments-area">
        <h4>{comment.length} Comentarios del Jurado</h4>
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
      {isJury && isJury.active && (
        <div className="comment-form">
          <h4>Comenta tus dudas</h4>
          <CommentForm projectId={projectId} />
        </div>
      )}
    </>
  );
};
export default CommentArea;
