import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs } from "react-icons/fa";

const Skills = () => {
    return (
      <div id="skills">
        <h1 className="text-center my-20 text-5xl font-bold">My Skills</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 px-56">
          <div>
            <div className="flex items-center justify-center p-5 w-72 h-24 bg-orange-300 border-2 border-stone-800 mb-3">
              <FaHtml5 className="text-7xl"></FaHtml5>
              <p className="text-2xl font-bold">HTML</p>
            </div>
            <div className="flex items-center justify-center p-5 w-72 h-24 bg-purple-300 border-2 border-stone-800">
              <FaReact className="text-7xl"></FaReact>
              <p className="text-2xl font-bold">React JS</p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center p-5 w-72 h-24 bg-blue-300 border-2 border-stone-800 mb-3">
              <FaCss3Alt className="text-7xl"></FaCss3Alt>
              <p className="text-2xl font-bold">CSS</p>
            </div>
            <div className="flex items-center justify-center p-5 w-72 h-24 bg-green-300 border-2 border-stone-800">
              <FaNodeJs className="text-7xl"></FaNodeJs>
              <p className="text-2xl font-bold">Node JS</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-5 w-72 h-24 bg-yellow-300 border-2 border-stone-800">
            <FaJs className="text-7xl"></FaJs>
            <p className="text-2xl font-bold">JavaScript</p>
          </div>
        </div>
      </div>
    );
};

export default Skills;