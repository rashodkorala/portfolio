import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
export const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-bg">
      {/*container*/}
      <div class="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-white xsm:px-5">
        <p className="text-cyan-300 text-2xl xsm:text-3xl sm:text-4xl md:text-5xl xl:text-7xl">
          Hi , I'm{" "}
        </p>
        <h1 className="text-blue-300 font-bold text-4xl xsm:text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
          RASHOD
        </h1>
        <p className="text-green-500 text-md xsm:text-xl sm:text-2xl md:text-3xl xl:text-3xl">
          DEVELEOPER | PHOTOGRAPHER | CREATOR
        </p>
        <div>
          <Link
            className="flex items-center text-yellow-600 cursor-pointer text-md xsm:text-xl sm:text-2xl md:text-3xl xl:text-3xl"
            to="Work"
            smooth={true}
            offset={-100}
            duration={500}
          >
            View Work <HiArrowNarrowRight className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
