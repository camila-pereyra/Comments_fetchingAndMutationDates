import "./Comment.css";

export const Comment = ({ name, email, body }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{body}</p>
      <p>Comented by: {email}</p>
    </div>
  );
};
