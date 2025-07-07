import React from 'react';
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GamesSection() {
  return (
    <motion.section
      id="games"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-br from-blue-800 to-indigo-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10" />

      {/* Left image */}
      <motion.div
        className="w-full md:w-1/2 relative z-10"
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/games-hero.webp`}
          alt="Game Development Portfolio"
          className="w-full h-auto max-h-[80vh] object-cover rounded-xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>

      {/* Right text content */}
      <motion.div
        className="w-full md:w-1/2 md:pl-12 mt-12 md:mt-0 relative z-10"
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Game Development Portfolio
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore my work in game design and development—including Unreal Engine 5 projects, modding tools, and game store integrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="primary" className="group">
            <Link to="/gameportfolio" className="flex items-center">
              View Game Portfolio 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
