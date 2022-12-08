import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";
import img1 from "../../assects/92620825-removebg-preview.png";

function HeaderSection() {
  return (
    <section className="text-gray-900">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-4xl leading-none sm:text-2xl">Hello, I'm</h1>
          <h1 className="text-7xl  leading-none sm:text-5xl">Ala Uddin</h1>

          <p className="mt-2 text-xl sm:mb-4">
            Creative Web Developer From Bangladesh
          </p>
          <p className="  text-lg mb-4">
            I'm Link Junior Web Developer based in Bangladesh,
            <br className="hidden md:inline lg:hidden" /> and I'm very
            passionate and dedicated to my work.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="#"
              className=" text-lg font-semibold rounded"
            >
              <PrimaryButton classes="px-8 py-3 text-lg font-semibold rounded-full">
                About Me
              </PrimaryButton>
            </Link>
            <Link
              rel="noopener noreferrer"
              to="#"
              className=" text-lg font-semibold rounded"
            >
              <PrimaryButton classes="px-8 py-3 text-lg font-semibold rounded-full">
                Hire Me
              </PrimaryButton>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={img1}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
