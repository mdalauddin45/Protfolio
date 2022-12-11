import React from "react";
import { useLoaderData } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const ProjectDetails = () => {
  const projects = useLoaderData();
  console.log(projects.thumble);
  const { image, name, clientside, liveside, serverside, thumble } = projects;
  const { image1, image2, image3, image4, image5 } = thumble;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <section className="py-6  dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={image1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image4}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={image5}
          />
        </div>
      </section>
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className=" lg:w-1/2">
          <img
            src={image}
            alt=""
            className="object-cover w-full  h-80 lg:h-full"
          />
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              Full Stack Projects
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {name}
          </h5>

          <div className="flex items-center">
            <a href={liveside} target="-blank">
              <PrimaryButton
                type="submit"
                classes={
                  " h-12 px-6 mr-6 font-medium tracking-wide text-white rounded shadow-md "
                }
              >
                Live
              </PrimaryButton>
            </a>
            <a href={clientside} target="-blank">
              <PrimaryButton
                type="submit"
                classes={
                  " h-12 px-6 mr-6 font-medium tracking-wide text-white rounded shadow-md "
                }
              >
                Client
              </PrimaryButton>
            </a>
            <a href={serverside} target="-blank">
              <PrimaryButton
                type="submit"
                classes={
                  " h-12 px-6 mr-6 font-medium tracking-wide text-white rounded shadow-md "
                }
              >
                Server
              </PrimaryButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
