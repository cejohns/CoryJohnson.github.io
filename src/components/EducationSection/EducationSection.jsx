import React from 'react';
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-br from-purple-800 to-purple-900 text-white overflow-hidden"
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
          src={`${process.env.PUBLIC_URL}/images/education-hero.jpg`}
          alt="Educational Background"
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
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Educational Background
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Dive into my academic journey, certifications, and immersive bootcamp experience that built my foundation in software development, game design, and applied computer science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="primary" className="group">
            <Link to="/educationhistory" className="flex items-center">
              View Full Education 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
