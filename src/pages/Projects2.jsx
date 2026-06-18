import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ScrollControls, useScroll, Image, Environment, Text, Float } from '@react-three/drei'
import * as THREE from 'three'
import { easing } from 'maath'
import { motion } from "framer-motion"

const Projects2 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Ultra Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        {/* Animated gradient overlays */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2), rgba(236,72,153,0.2))",
              "linear-gradient(90deg, rgba(147,51,234,0.2), rgba(236,72,153,0.2), rgba(59,130,246,0.2))",
              "linear-gradient(135deg, rgba(236,72,153,0.2), rgba(59,130,246,0.2), rgba(147,51,234,0.2))",
              "linear-gradient(45deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2), rgba(236,72,153,0.2))"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.2),transparent_50%)]" />
        
        {/* Moving mesh gradients */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(600px circle at 20% 30%, rgba(120,119,198,0.4), transparent)",
              "radial-gradient(600px circle at 80% 70%, rgba(255,119,198,0.4), transparent)",
              "radial-gradient(600px circle at 40% 60%, rgba(59,130,246,0.4), transparent)",
              "radial-gradient(600px circle at 20% 30%, rgba(120,119,198,0.4), transparent)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Enhanced floating particles with different sizes and colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-2 h-2 bg-blue-400/40' :
              i % 4 === 1 ? 'w-1 h-1 bg-purple-400/50' :
              i % 4 === 2 ? 'w-3 h-3 bg-pink-400/20' :
              'w-1.5 h-1.5 bg-cyan-400/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30 - Math.random() * 20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={`w-20 h-20 border border-blue-400/20 ${
              i % 2 === 0 ? 'rounded-full' : 'rotate-45'
            }`} />
          </motion.div>
        ))}
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced heading with better animations */}
      <motion.div 
        initial={{ opacity: 0, y: -50, scale: 0.8 }} 
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          delay: 0.2 
        }}
        className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
          GLIMPSES OF MY PROJECTS
        </h1>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 1.5 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-purple-400 mt-4 rounded-full"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-center"
      >
        <p className="text-blue-300/80 text-sm mb-2">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 16 }} 
        className="w-full h-full"
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ScrollControls pages={3} infinite>
          <Rig rotation={[0, 0, 0.1]}>
            <Carousel />
          </Rig>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F46E5" />
        </ScrollControls>
        <Environment preset="city" background={false} />
      </Canvas>
    </div>
  )
}

function Rig({ children }) {
  const ref = useRef()
  const scroll = useScroll()

  useFrame((state, delta) => {
    // Simple continuous rotation based on scroll - no direction detection needed
    // This creates true infinite scrolling in both directions
    ref.current.rotation.y = scroll.offset * (Math.PI * 2)
    
    // Enhanced camera movement with smoother easing
    easing.damp3(
      state.camera.position, 
      [-state.pointer.x * 1.5, state.pointer.y * 0.8 + 1.5, 10], 
      0.25, 
      delta
    )
    state.camera.lookAt(0, 0, 0)
  })

  return <group ref={ref}>{children}</group>
}

function Carousel({ radius = 1.5, count = 6 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={`/img${(i % 6) + 1}.png`}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ))
}

function Card({ url, ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const pointerOver = (e) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)

  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? [1.5, 1.4, 1] : [1.2, 1.2, 1], 0.15, delta)
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
  })

  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      rotation={[0, Math.PI, 0]}
      {...props}
    />
  )
}

export default Projects2;