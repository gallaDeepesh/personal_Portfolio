import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaJava,
  FaReact,
  FaDocker,
  FaAws,    
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

import "./Hero.css";

function Hero() {

  return (

    <section className="hero">

      <div className="hero-left">

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          HI THERE 👋
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm <span>Galla Deepesh</span>
        </motion.h1>

        <motion.h2
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Passionate about building scalable web applications,
          backend systems, REST APIs, and cloud-powered
          software solutions using modern technologies.
        </motion.p>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >

          <a
            href="https://github.com/"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/deepesh-galla-250678293"
            target="_blank"
          >
            <FaLinkedin />
          </a>

        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >

          <a
            href="https://drive.google.com/file/d/1-dVL4He1s-piEZqT8mZ7muC2KCba7NKs/view"
            target="_blank"
          >
            <button className="btn primary-btn">
              Download Resume
            </button>
          </a>

          <a href="#contact">
            <button className="btn secondary-btn">
              Contact Me
            </button>
          </a>

        </motion.div>

      </div>

      {/* RIGHT SIDE */}

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="floating-icons">

          <FaReact className="icon react" />
          <FaJava className="icon java" />
          <SiSpringboot className="icon spring" />
          <SiMysql className="icon mysql" />
          <FaDocker className="icon docker" />
          <FaAws className="icon aws" />
        </div>

        <div className="developer-card">

          <div className="code-window">

            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Deepesh",
  role: "Full Stack Developer",
  skills: [
    "React",
    "Spring Boot",
    "Java",
    "AWS"
  ],
  passionate: true
}`}
            </pre>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;