import { Comment } from "../Comment/Comment";
import "./ListComments.css";

export const ListComments = ({ listComments }) => {
  return (
    <div>
      {listComments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};
