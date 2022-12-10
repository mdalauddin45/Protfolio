import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Work from "./Work";

function Works() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  // console.log(projects);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-green-400 font-serif">My Amazing Works</h1>
        <p className="text-lg py-5 px-5 text-gray-600">
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design
        </p>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Work project={project} key={project.id}></Work>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
