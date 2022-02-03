import React from "react";
import video from "../data/video";

function Comments({ isBtnStatus }) {
  return (
    <>
      <hr></hr>
      <div style={{ display: isBtnStatus ? "block" : "none" }}>
        <div>
          <h2>{video.comments.length} Comments</h2>
          <h3>{video.comments[0].user}</h3>
          <p>{video.comments[0].comment}</p>
          <h3>{video.comments[1].user}</h3>
          <p>{video.comments[1].comment}</p>
        </div>
      </div>
    </>
  );
}

export default Comments;
