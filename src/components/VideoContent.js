import React from "react";

function VideoContent({ title, views, createdAt, upvotes, downvotes }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
    </div>
  );
}

export default VideoContent;
