import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  useEffect(() => {
    if (typeof Shery !== "undefined") {
      Shery.makeMagnet('.a1');
    }
  }, []);
  
  return (
    <footer 
      style={{fontFamily:'fh2'}} 
      className="relative w-full bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-300 py-16 px-6 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-10 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
        
        {/* Main Heading with Glow */}
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 relative">
            Let's Connect!
            <div className="absolute inset-0 text-blue-400 blur-sm opacity-30 -z-10">
              Let's Connect!
            </div>
          </h2>
          <p className="text-lg text-gray-400 mb-4">
            Ready to build something amazing together?
          </p>
        </div>

        {/* Contact Email */}
        <a 
          href="mailto:prasadkrish9306@gmail.com"
          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer"
        >
          <FaEnvelope className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
          <span className="text-lg">prasadkrish9306@gmail.com</span>
        </a>
        
        {/* Social Icons with Enhanced Styling */}
        <div className="flex flex-wrap justify-center gap-6 text-2xl">
          <a 
            href="https://github.com/Krish-Prasad09" 
            target="_blank" 
            rel="noopener noreferrer"
            title="GitHub"
            className="a1 group relative p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-600 hover:to-gray-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-gray-500/25"
          >
            <FaGithub className="text-gray-300 group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-gray-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>

          <a 
            href="https://www.linkedin.com/in/krish-prasad-29469633b/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="LinkedIn"
            className="a1 group relative p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-600/25"
          >
            <FaLinkedin className="text-gray-300 group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>

          <a 
            href="https://leetcode.com/u/krish_ji/" 
            target="_blank" 
            rel="noopener noreferrer"
            title="LeetCode"
            className="a1 group relative p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-yellow-500/25"
          >
            <SiLeetcode className="text-gray-300 group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>

          <a 
            href="https://www.codechef.com/users/krizzh" 
            target="_blank" 
            rel="noopener noreferrer"
            title="CodeChef"
            className="a1 group relative p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-orange-500/25"
          >
            <SiCodechef className="text-gray-300 group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>

          <a 
            href="https://www.geeksforgeeks.org/profile/kpji?tab=activity" 
            target="_blank" 
            rel="noopener noreferrer"
            title="GeeksforGeeks"
            className="a1 group relative p-4 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-green-500/25"
          >
            <SiGeeksforgeeks className="text-gray-300 group-hover:text-white transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-green-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-6"></div>

        {/* Copyright with Heart Animation */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-400 flex items-center gap-2">
            Made with 
            <FaHeart className="text-red-500 animate-pulse" /> 
            by Krish Prasad
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className="relative w-full max-w-xs">
          <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
            <div className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-50"></div>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-4 group relative p-3 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25"
          aria-label="Scroll to top"
        >
          <svg 
            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </button>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;