import { RiReactjsLine } from "react-icons/ri";
import { DiMysql, DiJava, DiPython } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

const techVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
};

const Technologies = () => {
  const techs = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React.js" },
    { icon: <DiMysql className="text-7xl text-blue-500" />, name: "MySQL" },
    { icon: <DiJava className="text-7xl text-red-600" />, name: "Java" },
    { icon: <SiSpringboot className="text-7xl text-green-500" />, name: "Spring Boot" },
    { icon: <DiPython className="text-7xl text-yellow-400" />, name: "Python" },
  ];

  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl text-white font-bold">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={techVariants}
          >
            {tech.icon}
            <span className="text-white mt-2 text-lg">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
