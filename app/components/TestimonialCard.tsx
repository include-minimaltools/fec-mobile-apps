import { FC } from "react";

type TestimonialCardProps = {
  author: string;
  description: string;
  imageUrl?: string;
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
          <img
            src={imageUrl ?? "images/testimonial/feature-testimonial-thumb.jpg"}
            alt="image"
          />
        </div>
        <cite>{author}</cite>
      </div>
    </div>
  );
};
export default TestimonialCard;
