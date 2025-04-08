import profilepic from "../assets/sanjaiprofile.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
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
        <motion.h2
          className="text-5xl lg:text-5xl text-white font-bold tracking-tighter"
          variants={childVariants}
        >
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
          👋 Hey there! I’m <b>Sanjai</b> — a passionate and driven <b>Full-Stack Developer</b> who loves building clean, responsive, and impactful web applications.
          <br /><br />
          Skilled in <b>React.js</b>, <b>Spring Boot</b>, and <b>PostgreSQL</b>, I specialize in turning complex ideas into functional, user-friendly digital experiences.
          <br /><br />
          Whether it’s crafting smooth user interfaces or developing powerful backend systems, I bring a blend of creativity and logic to every project I take on.
          <br /><br />
          I’m eager to contribute to real-world solutions, collaborate with great teams, and continuously grow as a developer.
          <br /><br />
          🚀 Let’s build the future with code!
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
