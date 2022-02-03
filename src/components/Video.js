import React from "react";

function Video({ title, embedURL }) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={embedURL}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
    </div>
  );
}

export default Video;
