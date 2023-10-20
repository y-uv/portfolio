import React from "react";

const Header = () => {
  const linkedInUrl = "https://www.linkedin.com/in/yuval-smith-b92114241/";

  return (
    <header className="bg-black text-white py-4 text-center">
      <div className="container mx-auto text-center lg:text-left">
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-bold transition duration-400 ease-in-out hover:text-yuvhover active:text-yuvactive inline-block mx-auto lg:mx-20"
        >
          Yuval Smith
        </a>
      </div>
    </header>
  );
};

export default Header;
