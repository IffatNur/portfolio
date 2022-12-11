import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.PNG";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <h1 className="btn btn-ghost normal-case text-xl">Portfolio</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <a href="https://drive.google.com/file/d/1uGRhY0xUsxO1pALwP0ePhPXDuVqKHYVW/view?usp=sharing">
            <button className="btn bg-yellow-500 border-0 rounded-none px-14">
              Resume <FaDownload className="ml-2"></FaDownload>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
