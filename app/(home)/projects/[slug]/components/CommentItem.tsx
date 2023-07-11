import { Timestamp } from "firebase/firestore";
import Image from "next/image";
import { FC } from "react";
import moment from "moment";

import "moment/locale/es";

moment.locale("es");

type Props = {
  comment: string;
  author: string;
  avatarUrl: string;
  date: Timestamp;
};

const CommentItem: FC<Props> = ({ author, avatarUrl, comment, date }) => {
  return (
    <div className="comment-list">
      <div className="single-comment justify-content-between d-flex">
        <div className="user justify-content-between d-flex">
          <div className="thumb">
            <Image width={50} height={50} src={avatarUrl} alt="" />
          </div>
          <div className="desc">
            <p className="comment text-dark">{comment}</p>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h5 className="author text-secondary">{author}</h5>
                <p className="date">
                  {moment(date.toDate()).fromNow()}
                </p>
              </div>
              {/* <div className="reply-btn">
                <a href="#" className="btn-reply text-uppercase">
                  reply
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommentItem;
