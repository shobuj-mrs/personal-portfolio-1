import React from "react";
import HeroImage from "../assets/my new dp.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {

  const resume = {
    child: (
      <>
        Resume 
      </>
    ),
    href: "/resume.pdf",
    style: "rounded-br-md",
    download: true,
  }

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-pink-500">Hi, my name is</p>
          <h2 className="text-5xl sm:text-5xl font-bold text-white">
            Md. Mustafizur Rahman Sobuz
          </h2>
          <h2 className="text-3xl sm:text-3xl font-bold text-white">
            Front End & MERN Stack Web Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a ''Front End Web Developer with a little bit of backend knowledge'' and with experience in building websites for small and medium businesses. Whether you're trying to win work, list your services or even create a whole online store - I can help! I do have a professional course on Web Development.
          </p>

          <div>
            <button
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
             > 
             <a
              href={resume.href}
              className="flex justify-between items-center w-full text-white"
              download={resume.download}
              target="_blank"
              rel="noreferrer"
            >
              {resume.child}
            </a>
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
