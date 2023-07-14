"use client";

import { Timestamp } from "firebase/firestore";
import { signIn, useSession } from "next-auth/react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { CommentCollection } from "~/firebase/database";

type CommentFormInput = {
  comment: string;
};

type Props = {
  projectId: string;
};

const CommentForm: FC<Props> = ({ projectId }) => {
  const { data } = useSession();
  const { register, handleSubmit, reset } = useForm<CommentFormInput>({});

  const onSubmit = async ({ comment }: CommentFormInput) => {
    if (!data || !data.user) return signIn("google");

    const {
      user: { name, email, image },
    } = data;

    if (!name || !email || !image || !comment.trim()) return;

    reset();

    await new CommentCollection(projectId).create({
      author: name,
      comment: comment.trim(),
      avatarUrl: image,
      date: Timestamp.now()
    });
  };

  return (
    <form
      className="form-contact comment_form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <textarea
              className="form-control w-100"
              cols={30}
              rows={9}
              maxLength={1000}
              placeholder="Escribe tu duda aquí"
              {...register("comment", { required: true })}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Enviar comentario
        </button>
      </div>
    </form>
  );
};
export default CommentForm;
