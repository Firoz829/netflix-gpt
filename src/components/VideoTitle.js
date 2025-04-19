import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-24 absolute text-white bg-gradient-to-t from-black">
      <h1 className="text-6xl font-bold max-w-xl">{title}</h1>
      <div className="max-w-xl">
        <p className="">{overview.slice(0, 200)}...</p>
      </div>

      <div>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
