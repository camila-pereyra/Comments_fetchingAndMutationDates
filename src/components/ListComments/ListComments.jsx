import { Comment } from "../Comment/Comment";
import "./ListComments.css";

export const ListComments = ({ listComments }) => {
  return (
    <>
      <p className="listComments">Comments</p>
      <div className="containerComments">
        {listComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    </>
  );
};
