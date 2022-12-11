import React, { useEffect, useState } from 'react';
import project1 from '../assets/tech_village.PNG'
import project2 from '../assets/aero.PNG'
import project3 from '../assets/edu.PNG'
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(()=>{
    fetch('projects.json')
    .then(res=> res.json())
    .then(data=>setProjects(data))
  },[])
  console.log(projects);
    return (
      <div id="projects" className="my-20">
        <h1 className="text-5xl font-bold text-center">My Latest Projects</h1>
        <div className="my-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 px-20 gap-10 my-20"
            >
              <div>
                <img src={project.img1} alt="" className="w-full h-72"></img>
              </div>
              <div>
                <div className="badge bg-yellow-300 border-none">
                  {project.title}
                </div>
                <h1 className="text-4xl font-semibold my-5">{project.title}</h1>
                <p>{project.short_details}</p>{" "}
                <button className="btn bg-yellow-500 border-0 rounded-none my-5 px-14">
                  <a href={project.live_site}>Live Site</a>
                </button>
                <Link to={`project/${project.id}`}>
                  <button className="btn bg-gray-500 border-0 rounded-none ml-5 px-14">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Projects;