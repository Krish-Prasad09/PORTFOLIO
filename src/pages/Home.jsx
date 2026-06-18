import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from '../pages/Projects/Projects'
import Experience from './Experience'
import Contact from './Contact'
import Footer from '../components/Footer'

const Home = () => {
     useEffect(() => {
          if (typeof Shery !== "undefined" && typeof Shery.mouseFollower === "function") {
               try {
                    Shery.mouseFollower();
               } catch (e) {
                    console.warn("Shery.mouseFollower failed to initialize:", e);
               }
          }
     }, []);
     
  return (
    <>
      <Navbar />
      <Hero />
      <div className = 'w-full min-h-screen'><About /></div>
      <Experience />
      <Skills />
      <Projects />
      <div className='w-full min-h-screen'><Contact/></div>
      <Footer />
    </>
  )
}

export default Home
