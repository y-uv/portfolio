import React from "react";

const Header = () => {
  const linkedInUrl = "https://www.linkedin.com/in/yuval-smith-b92114241/";

  return (
    <header className="bg-yuvheader text-white py-8 text-center">
      <div className="container mx-auto">
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl font-bold transition duration-200 ease-in-out hover:text-yuvhover active:text-yuvactive 30 0"
        >
          Yuval Smith
        </a>
      </div>
    </header>
  );
};

export default Header;
