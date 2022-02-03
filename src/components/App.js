import React from "react";
import video from "../data/video.js";
import Video from "./Video";
import VideoContent from "./VideoContent.js";

function App() {
  // console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video title={video.title} embedURL={video.embedUrl} />
      <VideoContent
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
      />
    </div>
  );
}

export default App;
