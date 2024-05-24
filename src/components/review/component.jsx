export const Review = ({ review }) => {
  const {user, rating, text} = review;

  return <div>
    <div>{"User: " + user}</div>
    <div>{"Rating: " + rating}</div>
    <div>{"Text: " + text}</div>
  </div>;
};