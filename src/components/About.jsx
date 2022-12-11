import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg text-center p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <h3 className="text-3xl text-gray-300">Hello, you can call me  </h3>
            <h3 className="text-3xl text-gray-300"> <span className="text-pink-600">Sobuz</span>, nice to meet you.</h3>
            <h3 className="text-3xl text-gray-300">Please take a look around.</h3>
          <br />
            <h3 className="text-4xl text-bold text-pink-600">
              React.js, Next.js, JavaScript Developer || Node.js, Express.js || MongoDB
            </h3>
          </div>
          <div className="text-left">
            <p>I'm experienced in HTML5 and CSS3, JavaScript, React JS, Bootstrap, and TailwindCSS; (PSD to HTML, Figma to HTML, XD, Sketch to HTML, etc.) ✅ I'll do fully project manage your brief from start to finish ✅ Fully Responsive Website (Mobile Friendly) ✅ Clean Code(w3 validation) and Cross-browser compatibility ✅ Regular communication is really important to me, so let's keep in touch!” mr9sobuz@gmail.com</p>
            <br />
            <p>Seeking an amateur role to increase and expand my developer knowledge achieved from Programming Hero Web Course with Jhankar Mahbub and Reading Docs and got the skills of development sectors completed. During my studies, I have done 12 projects and among the best 03 projects included in my Resume. I am eager to apply my skills and knowledge to an inspiring organization where I can make a meaningful contribution.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
