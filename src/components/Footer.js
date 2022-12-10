import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="text-center py-10 bg-yellow-600 text-white">
        <h1 className="text-xl font-bold">PORTFOLIO</h1>
        <div className="flex justify-center gap-5 my-3">
          <a href="https://github.com/IffatNur">
            <FaGithub className="text-3xl"></FaGithub>
          </a>
          <a href="www.linkedin.com/in/iffat-nur-shad">
            <FaLinkedin className="text-3xl"></FaLinkedin>
          </a>
        </div>
        <p className="text-lg font-semibold">CHATTOGRAM, BANGLADESH</p>
      </div>
    );
};

export default Footer;