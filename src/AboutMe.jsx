import React from "react";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="min-h-screen flex items-center justify-center bg-gray-200"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">About me</h1>
        <p className="text-gray-700 mb-8">
          I'm a computer-science student at Wilfrid Laurier University studying
          web development. I enjoy Music Production and creating responsive
          websites using React, HTML, CSS and JavaScript.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
