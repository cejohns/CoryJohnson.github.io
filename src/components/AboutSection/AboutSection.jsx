import React from "react";
import Button from "../ui/Button";  

export default function AboutSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">
        About Me
      </h2>
      <p className="text-gray-300 leading-relaxed mb-6">
        Hi, I'm Cory Evan Johnson — a passionate software developer based in Goldsboro, NC. I’ve been developing software for over eight years, working across a range of technologies including C#, Java, Python, and JavaScript. My experience spans everything from modern web frameworks and databases to game engines and desktop apps.
        <br />
        <br />
        I'm also the developer behind South Star Game Studios, where I combine my love for gaming and tech to build creative and engaging experiences. Whether I'm designing tools, building web applications, or working on a new game, I’m always driven by the challenge of solving problems and bringing ideas to life through code.
      </p>
      
      <Button
        variant="primary"
        onClick={() => window.location.href = '#contact'}
      >
        Get in Touch
      </Button>
    </section>
  );
}
