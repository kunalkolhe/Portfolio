import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  const socialLinks = [
    { Icon: BiLogoGmail, href: "mailto:kolhe1644@gmail.com" },
    { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/kunal-kolhe-852766342" },
    { Icon: BsGithub, href: "https://github.com/kunalkolhe" },
    { Icon: BsTwitterX, href: "https://x.com/kunal16888" },
  ];

  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <div className="mb-6 lg:mb-8">
            <h1 
              className={`text-4xl lg:text-6xl handwriting-animation ${animationComplete ? 'complete' : ''}`}
            >
              Kunal Kolhe
            </h1>
          </div>

          <motion.div
            className="text-xl lg:text-4xl flex flex-col gap-2 lg:gap-4 text-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
          >
            <h2>
              <span className="font-extrabold">Full Stack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </h2>
            <h2>
              Based In <span className="font-extrabold">India.</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            I'm a B.Tech Computer Science student who loves turning ideas into reality through code. 
            I specialize in building modern web applications using React, Node.js, and cutting-edge technologies. 
            When I'm not coding, you'll find me exploring new tech trends or participating in hackathons.
          </motion.p>

          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <social.Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
