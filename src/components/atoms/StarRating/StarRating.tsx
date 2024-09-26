interface StarRatingProps {
    analystRating: number;
    analystRatingLabel: string;
}

const StarRating: React.FC<StarRatingProps> = ({ analystRating, analystRatingLabel }) => {
  return (
    <div>
      <p>Label: {analystRatingLabel}</p>
      <p>{analystRating}  </p>
    </div>
  );
}

export default StarRating;
