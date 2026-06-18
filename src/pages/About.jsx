import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);
  const socialRef = useRef(null);
  const imageRef = useRef(null);

  const isHeadingInView = useInView(headingRef, {
    once: true,
    margin: "-100px",
  });
  const isParagraph1InView = useInView(paragraph1Ref, {
    once: true,
    margin: "-50px",
  });
  const isParagraph2InView = useInView(paragraph2Ref, {
    once: true,
    margin: "-50px",
  });
  const isParagraph3InView = useInView(paragraph3Ref, {
    once: true,
    margin: "-50px",
  });
  const isSocialInView = useInView(socialRef, { once: true, margin: "-50px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const socialIcon = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (typeof Shery !== "undefined") {
      Shery.makeMagnet(".b1");
    }
  }, []);

  const avatarUrl = "https://avatars.githubusercontent.com/u/236081269?v=4";

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden px-6 py-12">
      {/* Animated background elements */}
      <motion.div
        className="absolute w-52 h-52 bg-blue-500 opacity-25 blur-[80px] rounded-full top-16 left-10"
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-36 h-36 bg-purple-500 opacity-25 blur-[80px] rounded-full bottom-10 right-10"
        animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Profile Image with scroll animation */}
      <motion.div
        ref={imageRef}
        variants={fadeInScale}
        initial="hidden"
        animate={isImageInView ? "visible" : "hidden"}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl relative group"
      >
        <img
          src={avatarUrl}
          alt="Krish Prasad"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </motion.div>

      {/* Content Section */}
      <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left z-10">
        {/* Heading with scroll animation */}
        <motion.h2
          ref={headingRef}
          variants={fadeInLeft}
          initial="hidden"
          animate={isHeadingInView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-extrabold text-blue-400"
        >
          About Me
        </motion.h2>

        {/* First paragraph */}
        <motion.div
          ref={paragraph1Ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isParagraph1InView ? "visible" : "hidden"}
          style={{ fontFamily: "fh2" }}
          className="mt-4 text-lg md:text-xl max-w-2xl leading-relaxed text-gray-300"
        >
          <p>
            Hi, I'm{" "}
            <span className="font-bold text-blue-400">Krish Prasad</span>, a{" "}
            <span className="text-blue-300 font-semibold">B.Tech student in Electrical Engineering</span> at
            <span className="font-bold text-blue-400"> IIT Indore</span>. I have a strong passion for software development, full-stack engineering, and AI models, actively building tools that bridge intelligent AI backends with interactive web applications.
          </p>
        </motion.div>

        {/* Second paragraph */}
        <motion.div
          ref={paragraph2Ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isParagraph2InView ? "visible" : "hidden"}
          style={{ fontFamily: "fh2" }}
          className="mt-4 text-lg md:text-xl max-w-2xl leading-relaxed text-gray-300"
        >
          <p>
            I am highly active in{" "}
            <span className="text-[#14B8A6] font-semibold">
              Competitive Programming 💻
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-300">
              Data Structures & Algorithms (DSA)
            </span>. Solving complex logical puzzles on platforms like Leetcode, CodeChef, and GeeksforGeeks is one of my favorite pursuits, and I constantly aim to optimize execution speed and resource efficiency.
          </p>
        </motion.div>

        {/* Third paragraph */}
        <motion.div
          ref={paragraph3Ref}
          variants={fadeInUp}
          initial="hidden"
          animate={isParagraph3InView ? "visible" : "hidden"}
          style={{ fontFamily: "fh2" }}
          className="mt-4 text-lg md:text-xl max-w-2xl leading-relaxed text-gray-300"
        >
          <p>
            Specializing in modern web stacks like{" "}
            <span className="font-semibold text-blue-400">React</span>,{" "}
            <span className="font-semibold text-blue-400">TypeScript</span>, and{" "}
            <span className="text-[#14B8A6] font-semibold">Flask</span>, I am highly interested in exploring{" "}
            <span className="font-semibold text-purple-400">Generative AI</span>,{" "}
            <span className="text-[#14B8A6] font-semibold">Large Language Models (LLMs)</span>, and deep learning architectures, building intelligent applications that integrate seamlessly with clean, interactive user interfaces.
          </p>
        </motion.div>

        {/* Social Media Links with staggered animation */}
        <motion.div
          ref={socialRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isSocialInView ? "visible" : "hidden"}
          className="mt-6 flex flex-wrap justify-center md:justify-start gap-6"
        >
          <motion.a
            variants={socialIcon}
            href="https://github.com/Krish-Prasad09"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub className="b1 text-3xl text-gray-400 hover:text-white transition-all duration-300" />
          </motion.a>
          
          <motion.a
            variants={socialIcon}
            href="https://www.linkedin.com/in/krish-prasad-29469633b/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin className="b1 text-3xl relative z-10 text-blue-500 hover:text-white transition-all duration-300" />
          </motion.a>
          
          <motion.a
            variants={socialIcon}
            href="https://leetcode.com/u/krish_ji/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
          >
            <SiLeetcode className="b1 text-3xl relative z-10 text-yellow-500 hover:text-white transition-all duration-300" />
          </motion.a>

          <motion.a
            variants={socialIcon}
            href="https://www.codechef.com/users/krizzh"
            target="_blank"
            rel="noopener noreferrer"
            title="CodeChef"
          >
            <SiCodechef className="b1 text-3xl relative z-10 text-orange-400 hover:text-white transition-all duration-300" />
          </motion.a>

          <motion.a
            variants={socialIcon}
            href="https://www.geeksforgeeks.org/profile/kpji?tab=activity"
            target="_blank"
            rel="noopener noreferrer"
            title="GeeksforGeeks"
          >
            <SiGeeksforgeeks className="b1 text-3xl relative z-10 text-green-500 hover:text-white transition-all duration-300" />
          </motion.a>

          <motion.a
            variants={socialIcon}
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/contact');
            }}
            className="cursor-pointer"
            title="Email Me"
          >
            <MdEmail className="b1 text-3xl text-red-400 hover:text-white transition-all duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
