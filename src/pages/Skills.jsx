import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import git from "../assets/tech/git.png";
import javascript from "../assets/tech/javascript.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.svg";
import docker from "../assets/tech/docker.png";
import flask from "../assets/tech/flask.png";
import c from "../assets/tech/c.png";
import c2 from "../assets/tech/c2.png";
import github from "../assets/tech/github.png";
import express from "../assets/tech/express.webp";

const skills = [
  { name: "C", img: c, color: "from-blue-500 to-purple-600" },
  { name: "C++", img: c2, color: "from-purple-500 to-pink-600" },
  { name: "HTML", img: html, color: "from-orange-500 to-red-600" },
  { name: "CSS", img: css, color: "from-blue-500 to-cyan-600" },
  { name: "JavaScript", img: javascript, color: "from-yellow-500 to-orange-600" },
  { name: "React", img: reactjs, color: "from-cyan-500 to-blue-600" },
  { name: "Flask", img: flask, color: "from-green-500 to-emerald-600" },
  { name: "Docker", img: docker, color: "from-blue-400 to-cyan-500" },
  { name: "Three.js", img: threejs, color: "from-gray-500 to-gray-700" },
  { name: "Node.js", img: nodejs, color: "from-green-500 to-lime-600" },
  { name: "MongoDB", img: mongodb, color: "from-green-600 to-emerald-700" },
  { name: "Express", img: express, color: "from-gray-600 to-gray-800" },
  { name: "Tailwind", img: tailwind, color: "from-teal-500 to-cyan-600" },
  { name: "Git", img: git, color: "from-orange-600 to-red-700" },
  { name: "Github", img: github, color: "from-gray-700 to-black" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-16 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Title with Enhanced Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.2,
          type: "spring",
          stiffness: 80
        }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2 
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
          animate={floatingAnimation}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-300 mt-4 text-lg"
        >
          Technologies I work with
        </motion.p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 px-8 max-w-6xl relative z-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
          >
            {/* Skill Card */}
            <div className="relative flex flex-col items-center justify-center w-40 h-40 md:w-36 md:h-36 rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 overflow-hidden">
              
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                initial={{ scale: 0, rotate: 45 }}
                whileHover={{ scale: 1.5, rotate: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Glowing Border Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, transparent, ${skill.color.split(' ')[1]}, transparent)`,
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Icon */}
              <motion.div
                className="relative z-10 mb-3"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 0.3 }}
              >
                <img src={skill.img} alt={skill.name} className="w-16 h-16 object-contain" />
              </motion.div>
              
              {/* Skill Name */}
              <motion.p
                className="text-sm md:text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.p>
              
              {/* Hover Particles */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${20 + (i % 2) * 30}%`,
                    }}
                    animate={{
                      y: [-5, -15, -5],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>
            </div>
            
            {/* Skill Level Indicator */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1, delay: index * 0.1 + 1 }}
            >
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${70 + Math.random() * 30}%` }}
                transition={{ duration: 1.5, delay: index * 0.1 + 1.5 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="mt-16 text-center relative z-10"
      >
        <motion.div
          className="flex justify-center space-x-2"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
        <motion.p
          className="text-gray-400 mt-4 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Always learning, always growing
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Skills;