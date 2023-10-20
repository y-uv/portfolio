import React from "react";
import SoundCloudCard from "./SoundCloudCard"; // Import your SoundCloudCard component

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen flex items-center justify-center bg-yuvbg"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center mt-20 mb-20">
        {/* Add some top margin (mt-20) to push the card down */}
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className="text-gray-700 mb-8">Some projects...</p>

        {/* Embed the SoundCloudCard component here */}
        <SoundCloudCard />
      </div>
    </div>
  );
};

export default Projects;
