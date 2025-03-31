import profilepic from "../assets/sanjaiprofile.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5, // Fixed Typo
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black px-4">
      {/* Left Side - Text */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-5xl lg:text-5xl text-white font-bold tracking-tighter" variants={childVariants}>
          SANJAI
        </motion.h2>
        <motion.span
          className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
          variants={childVariants}
        >
          Fullstack Developer
        </motion.span>
        <motion.p
          className="my-4 max-w-lg py-6 text-lg leading-relaxed text-gray-300"
          variants={childVariants}
        >
          I am Sanjai, a passionate Full-Stack Developer with expertise in
          <b> React.js, Spring Boot, and UI/UX design</b>. I enjoy building modern,
          scalable, and user-friendly applications that enhance user experience.
          Proficient in <b>Java, PostgreSQL, and Flutter (beginner level)</b>, I have worked
          on projects ranging from <b>job portals with AI-powered resume matching</b>
          to <b>digital marketplaces for farmers</b>. Currently, I am exploring
          <b> AI-driven solutions for code execution visualization</b> to simplify
          complex programming concepts. Always eager to learn and improve, I strive
          to create efficient and impactful software solutions.
        </motion.p>
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="bg-white rounded-full px-6 py-3 text-sm text-stone-800 font-semibold shadow-lg hover:bg-stone-200 transition"
          variants={childVariants}
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <img
          src={profilepic}
          alt="SanjaiProfile"
          className="border border-stone-900 rounded-3xl shadow-lg w-80 h-80 object-cover"
          width={650}
          height={650}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
