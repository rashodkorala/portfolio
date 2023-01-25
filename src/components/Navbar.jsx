import React, { useState } from "react";
import Logo from "../assets/logo.PNG";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const HandleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-bg text-gray-50">
      <div className="z-10">
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      {/*menu */}
      <div className="hidden md:flex ">
        <ul className="flex">
          <li>
            <Link to="Home" smooth={true} duration={1000} offset={10}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="About" smooth={true} duration={1000}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="Skills" smooth={true} duration={1000}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="Work"
              smooth={true}
              duration={1000}
              offset={-150}
              isDynamic={true}
            >
              WORK
            </Link>
          </li>
          <li>
            <Link to="Contact" smooth={true} duration={1000} offset={120}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      {/*hamburgur menu */}
      <div onClick={HandleClick} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/*mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4fxl">
          <Link onClick={HandleClick} to="Home" smooth={true} duration={500}>
            HOME
          </Link>
        </li>

        <li className="py-6 text-4fxl">
          <Link onClick={HandleClick} to="About" smooth={true} duration={500}>
            ABOUT
          </Link>
        </li>

        <li className="py-6 text-4fxl">
          <Link onClick={HandleClick} to="Skills" smooth={true} duration={500}>
            SKILLS
          </Link>
        </li>

        <li className="py-6 text-4fxl">
          <Link
            onClick={HandleClick}
            to="Work"
            smooth={true}
            duration={500}
            offset={-100}
          >
            WORK
          </Link>
        </li>

        <li className="py-6 text-4fxl">
          <Link onClick={HandleClick} to="Contact" smooth={true} duration={500}>
            CONTACT
          </Link>
        </li>

        {/*social icons */}
        <div>
          <ul className="flex">
            <li>
              <a href="https://www.instagram.com/rashodk_/">
                <FaInstagram size={30} />
              </a>{" "}
            </li>
            <li>
              <a href="https://github.com/rashodkorala">
                <FaGithub size={30} />
              </a>{" "}
            </li>
            <li>
              <a href="https://twitter.com/rashodkorala">
                <FaTwitter size={30} />
              </a>{" "}
            </li>
            <li>
              <a href="mailto:rashodkorala2002@gmail.com">
                <HiOutlineMail size={30} />
              </a>{" "}
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
