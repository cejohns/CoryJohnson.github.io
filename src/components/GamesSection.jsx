import React from 'react';
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

// Temporary button component
const Button = ({ children, className, ...props }) => (
  <button className={`px-6 py-3 rounded-lg font-medium ${className}`} {...props}>
    {children}
  </button>
);

export default function GamesSection() {
  return (
    <motion.section
      id="games"
      className="flex flex-col md:flex-row-reverse items-center justify-center min-h-screen px-6 py-16 bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="w-full md:w-1/2">
      <motion.img
  src={`${process.env.PUBLIC_URL}/images/1-game-developer-2.webp`}
  alt="Published Games"
  className="w-full h-auto rounded-xl shadow-2xl"
  whileHover={{ scale: 1.02 }}
/>

      </motion.div>

      <div className="w-full md:w-1/2 md:pl-12 mt-12 md:mt-0">
        <h2 className="text-4xl font-bold mb-6">Published Games</h2>
        <p className="text-lg text-gray-300 mb-8">
          Browse through games and applications I've published to itch.io under SouthStar Game Studios.
        </p>
        <a href="https://southstargamesstudios.itch.io/" target="_blank" rel="noopener noreferrer">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Gamepad2 className="inline mr-2" />
            Go to Site
          </Button>
        </a>
      </div>
    </motion.section>
  );
}