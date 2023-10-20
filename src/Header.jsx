const Header = () => {
  const linkedInUrl = "https://www.linkedin.com/in/yuval-smith-b92114241/";

  return (
    <header className="bg-black text-white py-4 text-center">
      <div className="container mx-auto flex flex-row justify-center items-center lg:flex-row lg:justify-between lg:items-center">
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-widest text-2xl font-bold transition duration-400 ease-in-out hover:text-yuvhover active:text-yuvactive mx-auto lg:mx-20 mb-2 lg:mb-0"
        >
          Yuval Smith
        </a>
        <div className="flex justify-between">
          <p className="tracking-tighter text-1xl font-bold transition duration-400 ease-in-out hover:text-yuvhover active:text-yuvactive mx-4">
            About me
          </p>

          <p className="tracking-tighter text-1xl font-bold transition duration-400 ease-in-out hover:text-yuvhover active:text-yuvactive mx-4">
            Testimonials
          </p>

          <p className="tracking-tighter text-1xl font-bold transition duration-400 ease-in-out hover:text-yuvhover active:text-yuvactive mx-4">
            Projects
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
