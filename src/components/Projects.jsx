import { motion } from "framer-motion";
import project1 from "../assets/project1.jpeg";
import bustracking from "../assets/bustracking.png";
import shoppingmall from "../assets/shoppingmall.jpg";
import portfolioimage  from "../assets/portfolioimage.png";

const projectsData = [
  {
    title: "Burglar Detection System",
    description:
      "An AI-powered surveillance system that detects unauthorized intrusions using real-time image processing and motion detection algorithms.",
    image: project1,
  },
  {
    title: "Bus Tracking System",
    description:
      "A GPS-based bus tracking system that allows users to track buses in real time, ensuring efficient and timely commuting.",
    image: bustracking,
  },
  {
    title: "Personal Portfolio",
    description:
      "A sleek and modern personal portfolio showcasing my skills, projects, and experience as a Full Stack Developer.",
    image: portfolioimage,
},

  {
    title: "Shopping Mall Management System",
    description:
      "A comprehensive system designed to manage shopping malls efficiently, including store management, billing, and analytics.",
    image: shoppingmall,
  },
];

const Projects = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl text-white font-bold">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="w-full md:w-1/2 lg:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-40 h-40 object-cover rounded-md"
              />
            )}
            <h3 className="text-xl text-white font-bold mt-4">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
