import Image from "next/image";
import { FC } from "react";

type TestimonialCardProps = {
  author: string;
  description: string;
  imageUrl: string;
};

const TestimonialCard: FC<TestimonialCardProps> = ({
  author,
  description,
  imageUrl,
}) => {
  return (
    <div className="item">
      <div className="block shadow">
        <p>{description}</p>
        <div className="image">
          <Image
            src={imageUrl}
            width={30}
            height={30}
            alt="image"
          />
        </div>
        <cite>{author}</cite>
      </div>
    </div>
  );
};
export default TestimonialCard;
