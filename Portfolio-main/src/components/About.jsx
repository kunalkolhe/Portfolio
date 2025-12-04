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
          I'm a B.Tech Computer Science student who loves turning ideas into reality through code. From building platforms that simplify government services to creating AI-powered solutions, I enjoy solving everyday problems with technology. When I'm not coding, you'll find me exploring new tech trends or participating in hackathons.
        </p>
      </motion.div>
    </div>
  );
}
