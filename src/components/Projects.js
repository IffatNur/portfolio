import React from 'react';
import project1 from '../assets/tech_village.PNG'
import project2 from '../assets/aero.PNG'
import project3 from '../assets/edu.PNG'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
      <div className="my-20">
        <h1 className="text-5xl font-bold text-center">My Latest Projects</h1>
        <div className="my-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-10 my-20">
            <div>
              <img src={project1} alt="" className="w-full h-72"></img>
            </div>
            <div>
              <div className="badge bg-yellow-300 border-none">
                Full Stack Web Development
              </div>
              <h1 className="text-4xl font-semibold my-5">Tech Village</h1>
              <p>
                This project is based on product resale. It has three user
                roles- Admin, Buyer and Seller. Different dashboard view for
                different user. Buyers can purchase products by stripe payment
                gateway.
              </p>{" "}
              <button className="btn bg-yellow-500 border-0 rounded-none my-5 px-14">
                <a href="https://tech-village-7602d.web.app/">Live Site</a>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-10 my-20">
            <div>
              <div className="badge bg-yellow-300 border-none">
                Full Stack Web Development
              </div>
              <h1 className="text-4xl font-semibold my-5">
                Aero Visa Consultant
              </h1>
              <p>
                This project is based on visa and immigration consultant. User
                can add new services to it. User can leave review for a
                particular service.
              </p>
              <button className="btn bg-yellow-500 border-0 rounded-none my-5 px-14">
                <a href="https://aero-visa-client.web.app/">Live Site</a>
              </button>
            </div>
            <div>
              <img src={project2} alt="" className="w-full h-72"></img>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-10 my-20">
            <div>
              <img src={project3} alt="" className="w-full h-72"></img>
            </div>
            <div>
              <div className="badge bg-yellow-300 border-none">
                Web Development
              </div>
              <h1 className="text-4xl font-semibold my-5">eduTech</h1>
              <p>
                This project is based on IT courses. Sign in and registration
                authentication has been implemented. Only valid user can take
                premium access of courses. JWT has been implemented for
                authentication.
              </p>
              <button className="btn bg-yellow-500 border-0 rounded-none my-5 px-14">
                <a href="https://edutech-client.web.app/">Live Site</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Projects;