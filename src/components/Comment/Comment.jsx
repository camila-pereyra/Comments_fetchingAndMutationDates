import "./Comment.css";

export const Comment = ({ name, email, body }) => {
  return (
    <div className="comment">
      <p className="commentName">{name}</p>
      <p className="commentBody">{body}</p>
      <p className="commentEmail">Comented by: {email}</p>
    </div>
  );
};
