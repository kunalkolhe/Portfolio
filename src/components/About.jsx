import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between items-center flex-col lg:flex-row gap-10" id="about">
      <motion.div
        className="lg:w-1/2 flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" className="max-w-full h-auto" />
      </motion.div>

      <motion.div
        className="lg:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          Hey there! I'm Kunal Kolhe, a B.Tech Computer Science Engineering student at Sanjivani University. I'm passionate about building web applications that make a real difference in people's lives and solve real-world problems.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My tech stack includes React.js, Node.js, Express, MongoDB, and Supabase for building complete full-stack solutions. I've also explored AI and machine learning, completing an NPTEL course on Large Language Models.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I've worked as a Software Development Trainee at HCL Technologies and participated in Smart India Hackathon 2025 with my team "Eco Innovator". I love collaborating with like-minded people and turning innovative ideas into working products!
        </p>
      </motion.div>
    </div>
  );
}
