import React from 'react';
import Typewriter from "typewriter-effect";
import './Banner.css';

const Banner = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-image">
        <div className="px-14 lg:pl-32 py-auto my-auto">
          <h4 className="font-semibold">My Name Is Iffat Nur Shad</h4>
          <div>
            <h1 className=" text-5xl text-yellow-500 font-bold my-5">
              <span className="mr-4 text-black">I'm</span>{" "}
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Frontend Developer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h4 className="font-semibold">From Bangladesh</h4>
            <button className="btn bg-yellow-500 border-0 rounded-none my-5 px-14">
              Contact
            </button>
          </div>
        </div>
        <div>
          <p className="w-72 h-64 bg-yellow-500 absolute top-64 right-72"></p>
          <img
            src="https://mediablog.cdnpk.net/sites/9/2021/12/PIN-BLOG-1270x720-What-is-the-difference-between-an-illustrator-and-a-graphic-designer-1.jpg"
            alt=""
            className="w-72 h-64 absolute top-52 right-[370px] border-8 border-yellow-600"
          />
        </div>
      </div>
    );
};

export default Banner;