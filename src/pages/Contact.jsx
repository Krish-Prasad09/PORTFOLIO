import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "./Earth";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const subject = `Portfolio Message from ${form.name}`;
    const body = `Hi Krish,\n\nYou have received a message from your portfolio website:\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    
    // Open mail client
    window.location.href = `mailto:prasadkrish9306@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="relative flex flex-col-reverse md:flex-row min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-12 px-6 overflow-hidden items-center justify-center gap-10">
      {/* Floating background blobs */}
      <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-[0.75] bg-gray-800/40 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 w-full max-w-lg shadow-2xl relative z-10"
      >
        <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">Get in touch</p>
        <h3 className="text-4xl md:text-5xl font-extrabold text-blue-400 mt-2">Contact.</h3>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 p-6 bg-green-500/20 border border-green-500/30 rounded-2xl text-center"
          >
            <h4 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h4>
            <p className="text-gray-300">Your message has been sent successfully. I will get back to you soon!</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 active:scale-95"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                required
                className="bg-gray-900/60 py-4 px-6 placeholder:text-gray-500 text-white rounded-xl outline-none border border-gray-700 focus:border-blue-400 transition-all duration-300"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                required
                className="bg-gray-900/60 py-4 px-6 placeholder:text-gray-500 text-white rounded-xl outline-none border border-gray-700 focus:border-blue-400 transition-all duration-300"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                required
                className="bg-gray-900/60 py-4 px-6 placeholder:text-gray-500 text-white rounded-xl outline-none border border-gray-700 focus:border-blue-400 resize-none transition-all duration-300"
              />
            </label>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-200"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </motion.div>

      {/* 3D Rotating Earth Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 w-full h-[350px] md:h-[550px] xl:h-[650px] cursor-grab active:cursor-grabbing"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
