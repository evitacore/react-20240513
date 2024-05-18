export const Review = ({ review }) => {
  return <div>
    <div>{"User: " + review.user}</div>
    <div>{"Rating: " + review.rating}</div>
    <div>{"Text: " + review.text}</div>
  </div>;
};