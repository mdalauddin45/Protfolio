import React from "react";

function HeaderSection() {
  return (
    <div>
      <div>
        <h1></h1>
        <h1></h1>
      </div>
      <section className=" text-gray-900">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-2xl  leading-none sm:text-2xl">Hello, I'm</h1>
            <h1 className="text-5xl  leading-none sm:text-5xl">Ala Uddin</h1>

            <p className="mt-2 text-lg sm:mb-12">
              A Creative Web Developer From Bangladesh
            </p>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              I'm a Junior Web Developer based in Bangladesh,
              <br className="hidden md:inline lg:hidden" /> and I'm very
              passionate and dedicated to my work.
            </p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="assets/svg/Business_SVG.svg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeaderSection;
