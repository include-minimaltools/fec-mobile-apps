import Image from "next/image";
import { FC } from "react";
import { Author } from "~/firebase/models";

type Props = Author;

const AuthorCard: FC<Props> = ({
  name,
  biography,
  avatarUrl,
  twitter,
  instagram,
  facebook,
}) => {
  return (
    <div className="media">
      <div className="image">
        <Image
          className="d-flex justify-content-center align-self-center"
          width={600}
          height={600}
          
          src={avatarUrl}
          alt="author-image"
        />
      </div>
      <div className="media-body align-self-center">
        <h4>{name}</h4>
        <p>{biography}</p>
        <ul className="list-inline social-links">
          {facebook && (
            <li className="list-inline-item">
              <a target="_blank" href={facebook}>
                <i className="ti-facebook" />
              </a>
            </li>
          )}
          {twitter && (
            <li className="list-inline-item">
              <a href={twitter}>
                <i className="ti-twitter" />
              </a>
            </li>
          )}
          {instagram && (
            <li className="list-inline-item">
              <a href={instagram}>
                <i className="ti-instagram" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default AuthorCard;
