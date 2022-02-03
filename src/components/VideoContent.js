import React, { useState } from "react";
import Buttons from "./Buttons"

function VideoContent({ title, views, createdAt, upvotes, downvotes }) {

  const [likes, setLikes] = useState(upvotes)
  const [dislikes, setDislikes] = useState(downvotes)
  // const [showComment, setShowComment] = setState(true)

  function handleUpvote(){
    setLikes((likes) => likes + 1)
  }

  function handleDownvote(){
    setDislikes((dislikes) => dislikes + 1)
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
      <div>
        <Buttons upvotes={likes} onUpvote={handleUpvote} />
        <Buttons downvotes={dislikes} onDownvote={handleDownvote} />
      </div>
        
    </div>
  );
}

export default VideoContent;
