import React from 'react';

const About = () => {
    return (
      <div id="about" className="grid grid-cols-1 lg:grid-cols-2 px-20 py-32">
        <div>
          <img
            src="https://img.freepik.com/free-vector/reading-book-illustration_114360-8534.jpg?w=2000"
            alt="" className='h-96 mx-auto'
          />
        </div>
        <div>
          <h1 className="font-bold text-5xl my-5">
            I am Frontend Web Developer
          </h1>
          <p className="pr-32">
            Looking forward to get opportunities to work on professional level
            projects. I like to work with new technologies. I like to implement
            new technologies in projects which upgrades my skills at the same
            time.
          </p>
          <button className="btn bg-yellow-500 border-0 rounded-none my-5 mr-10 px-14">
            Contact
          </button>
          <button className="btn bg-yellow-500 border-0 rounded-none my-5 px-14">
            Projects
          </button>
        </div>
      </div>
    );
};

export default About;