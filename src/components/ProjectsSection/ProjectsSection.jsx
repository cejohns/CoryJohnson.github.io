import React from 'react';
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import Button from "../ui/Button";

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="relative flex flex-col md:flex-row-reverse items-center justify-center min-h-screen px-6 py-16 bg-gradient-to-br from-gray-900 to-amber-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[url('/images/dots.svg')] bg-center opacity-10" />

      <motion.div 
        className="w-full md:w-1/2 relative z-10"
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/download.webp`}
          alt="Code Projects"
          className="w-full h-auto max-h-[80vh] object-cover rounded-xl shadow-2xl"
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>

      <motion.div 
        className="w-full md:w-1/2 md:pr-12 mt-12 md:mt-0 relative z-10"
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Technical Projects
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Explore my open-source contributions, personal projects, and code samples.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <Button variant="secondary">
            <a
              href="https://github.com/cejohns?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Browse Repositories 
              <Code className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
