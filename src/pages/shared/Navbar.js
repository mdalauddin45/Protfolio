import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="navbar ">
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
                <li>
                  <Link to="/resume">Download Resume</Link>
                </li>
                <li>
                  <Link to="/about">About me</Link>
                </li>
                <li>
                  <Link to="/contact">Contact me</Link>
                </li>
                <li>
                  <Link to="/blog">My Blog</Link>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500  md:mb-0"
            >
              <span className="ml-3 text-2xl font-bold ">Md Ala Uddin</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/resume">Download Resume</Link>
              </li>
              <li>
                <Link to="/about">About me</Link>
              </li>
              <li>
                <Link to="/contact">Contact me</Link>
              </li>
              <li>
                <Link to="/blog">My Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
