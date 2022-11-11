import React from "react";
import Squeekleen from "../assets/Projects/SqueeKleen.png";
import KingDomino from "../assets/Projects/KingDomino.png";
import MyPortfolio from "../assets/Projects/MyPortfolio.png";

const Work = () => {
  return (
    <div id="Work" className=" snap-start w-full bg-bg">
      <div
        id="workcont"
        className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-white xsm:px-5"
      >
        <h1 name="workh1" className="text-4xl font-bold">
          WORK
        </h1>
        <h2 className="text-3xl py-3 px-2">PROJECTS</h2>
        <div>
          <div className="py-3 px-3" name="Squeekleen">
            <h3 className="text-2xl">SqueeKleen Inc.</h3>
            <img className="" src={Squeekleen} alt="Squeekleen" />
            <p className="text-white text-md py-3 text-center">
              Simple website for a local cleaning company. Built Using Html and
              pure CSS.
            </p>
            <div className="flex justify-center">
              <a
                href="https://squeekleen.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500">
                  View Project
                </button>
              </a>
            </div>
          </div>
          <div className="py-3 px-3" name="KingDomino">
            <h3 className="text-2xl">KingDomino</h3>
            <img className="" src={KingDomino} alt="KingDomino" />
            <p className="text-white text-md py-3 text-center">
              Acadamic project for a board game called KingDomino. Built with
              Jav Swing. This project was a group project with 3 other students.
            </p>
            <div className="flex justify-center">
              <a href="/" target="_blank" rel="noreferrer">
                <button className="bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500">
                  View Project
                </button>
              </a>
            </div>
          </div>
          <div className="py-3 px-3" name="MyPortFolio">
            <h3 className="text-2xl">My PortFolio</h3>
            <img className="" src={MyPortfolio} alt="RashodKorala" />
            <p className="text-white text-md py-3 text-center">
              This is my portfolio website. Built with React and TailwindCSS to
              showcase my skills and projects.
            </p>
            <div className="flex justify-center">
              {/* <a href="/" target="_blank" rel="noreferrer">
                <button className="bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500">
                  View Project
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
