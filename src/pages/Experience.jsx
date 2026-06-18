import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useRef } from "react";
import { timelineData } from "../jsfiles/experience";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gray-900 text-white py-16 px-6 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full"
          style={{ top: "10%", left: "5%" }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/40 to-pink-500/40 blur-3xl rounded-full"
          style={{ bottom: "10%", right: "10%" }}
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Enhanced Title */}
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          type: "spring",
          stiffness: 80,
        }}
        className="text-center mb-20 relative z-10"
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          My Journey
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
          Education & Professional Experience
        </motion.p>
      </motion.div>

      {/* Timeline Container */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative flex flex-col items-center space-y-16 max-w-6xl mx-auto"
      >
        {/* Animated Timeline Line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400 z-0"
          variants={lineVariants}
          style={{ top: "60px" }}
        />

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-center w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Node - HIDDEN ON MOBILE */}
              <motion.div
                className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-2xl border-4 border-gray-900 relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div className="relative z-10">
                    {item.type === "education" ? (
                      <FaGraduationCap size={24} className="text-white" />
                    ) : (
                      <FaBriefcase size={24} className="text-white" />
                    )}
                  </motion.div>
                </div>
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`relative w-full max-w-md ${
                  isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="group relative p-6 md:p-8 bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ scale: 1.5, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${item.color
                        .split(" ")[1]
                        .replace("to-", "")}, transparent)`,
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-sm font-semibold text-white mb-4 shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.year}
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-blue-300 font-medium mb-4"
                      whileHover={{ scale: 1.01 }}
                    >
                      {item.institution}
                    </motion.p>
                    <motion.p
                      className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                      whileHover={{ scale: 1.005 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="text-center mt-20 relative z-10"
      >
        <motion.div
          className="flex justify-center space-x-3"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
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
          The journey continues...
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Experience;
