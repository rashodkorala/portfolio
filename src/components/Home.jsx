import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
export const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-bg snap-center">
      {/*container*/}
      <div class="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-white xsm:px-5">
        <p className="text-white text-2xl xsm:text-5xl sm:text-4xl md:text-5xl xl:text-7xl">
          Hi , I'm
        </p>
        <h1 className="text-white font-bold text-5xl xsm:text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
          RASHOD
        </h1>
        <p className="text-white text-lg xsm:text-xl sm:text-2xl md:text-3xl xl:text-3xl">
          DEVELEOPER | PHOTOGRAPHER | CREATOR
        </p>
        <div className="w-[180px]">
          {/* <Link
            className="flex items-center text-blue-500 ring-2  cursor-pointer text-lg xsm:text-xl sm:text-2xl md:text-3xl xl:text-3xl"
            to="Work"
            smooth={true}
            offset={-100}
            duration={500}
          >
            View Work <HiArrowNarrowRight className="ml-1" />
          </Link> */}

          <Link smooth={true} offset={-100} duration={500}>
            <button className=" flex justify-center items-center bg-black text-white px-4 py-2 rounded-3xl ring-2 ring-blue-500 my-4 ">
              View Work
              <HiArrowNarrowRight className="ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
// text-cyan-300
// text-blue-300
// text-green-500
// text-yellow-600
