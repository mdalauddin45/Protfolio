import React from "react";
import { Link } from "react-router-dom";
import img2 from "../../../assects/about1.jpg";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import "./About.css";
const About = () => {
  return (
    <div id="about">
      <section className="dark:text-gray-900">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={img2}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left seca">
            <h1 className="text-2xl leading-none sm:text-2xl">
              I'm a Designer
            </h1>
            <h1 className="text-3xl font-bold leading-none sm:text-3xl">
              I Can Design Anything You Want
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Hello there! I'm a web designer, and I'm very passionate and
              dedicated to my work. With 6 months of experience as a
              professional web developer, I have acquired the skills and
              knowledge necessary to make your project a success. I enjoy every
              step of the design process, from discussion and collaboration.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="/contact"
                className=" text-lg font-semibold rounded"
              >
                <PrimaryButton classes="px-8 py-3 text-lg font-semibold rounded-full">
                  Hire Me
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
