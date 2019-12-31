import React from "react";

const CommentDetail = ({ name, timeAgo, comment, src }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={src} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {name}
        </a>
        <div className="metadata">
          <span className="date">{timeAgo}</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
