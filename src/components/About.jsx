import React from "react";

export const About = () => {
  return (
    <div id="About" className="w-full h-screen bg-bg ">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-white xsm:px-5">
        <h1 className="font-bold text-4xl xsm:text-5xl sm:text-6xl">
          Me, Myself & I
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-1 ">
          <p className="py-4 text-md xsm:text-xl xl:text-2xl ">
            I am a third year student at the Memorial University of Newfoundland
            studying Computer Science. I am a self-taught developer and designer
            with a passion for creating beautiful and functional websites. I am
            also passionate about photography and love to create and edit
            photos.
          </p>
          <a
            href="https://photosbyrashod.myportfolio.com"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500">
              Veiw Photos
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
