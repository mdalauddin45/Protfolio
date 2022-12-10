import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assects/Korai.jpg";
import { LinkIcon } from "@heroicons/react/24/solid";
const Work = () => {
  return (
    <div aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl ">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={img1}
          alt=""
        />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 ">
          <a href="https://korai-cox.web.app/" target="_blank">
            <p className="mb-4 text-lg font-bold text-gray-100 flex my-10 mx-20 ">
              <LinkIcon className="w-6 h-6 mx-2" /> Live Site
            </p>
          </a>
          <a
            href="https://github.com/mdalauddin45/Korai-Restaurant-Clint"
            target="_blank"
          >
            <p className="mb-4 text-lg font-bold text-gray-100 flex mx-20">
              <LinkIcon className="w-6 h-6 mx-2" /> Clint Site
            </p>
          </a>
          <a
            href="https://github.com/mdalauddin45/Korai-Restaurant-Server"
            target="_blank"
          >
            <p className="mb-4 text-lg font-bold text-gray-100 flex mx-20">
              <LinkIcon className="w-6 h-6 mx-2" /> Server Site
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
