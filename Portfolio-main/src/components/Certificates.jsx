import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

export default function Certificates() {
  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon 2025",
      issuer: "Sanjivani University",
      date: "13th & 14th September 2025",
      badge: "Participated",
      skills: ["AI", "Innovation", "Team Work", "Problem Solving"],
      description: "Certificate of Participation for Idea Presentation in Sanjivani University Internal Hackathon organized under Smart India Hackathon 2025. Team: Eco Innovator.",
      icon: "trophy"
    },
    {
      id: 2,
      title: "Introduction to Large Language Models (LLMs)",
      issuer: "NPTEL",
      date: "Jul-Oct 2025",
      badge: "Completed",
      skills: ["LLMs", "AI", "Machine Learning", "NLP"],
      description: "Successfully completed 12-week course on Introduction to Large Language Models. Scored 47% overall with 14/25 in assignments and 33/75 in proctored exam. Credits recommended: 3 or 4.",
      icon: "certificate"
    },
    {
      id: 3,
      title: "Software Development Training",
      issuer: "HCL Technologies",
      date: "May - July 2025",
      badge: "Certified",
      skills: ["Spring Boot", "Angular", "MySQL", "Web Development"],
      description: "Completed software development training program at HCL Technologies. Learned to design secure, scalable web applications using enterprise technologies.",
      icon: "certificate"
    },
    {
      id: 4,
      title: "Constitution Day Quiz Competition",
      issuer: "Sanjivani University",
      date: "26th November 2025",
      badge: "Participated",
      skills: ["Constitution", "General Knowledge", "Quiz"],
      description: "Successfully participated in the Constitution Day Quiz Competition held at Sanjivani University. Recognized for commitment, hard work, and cooperation.",
      icon: "trophy"
    },
  ];

  return (
    <div className="mt-10 lg:mt-20 px-5 lg:px-28" id="certificates">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl lg:text-4xl">
          Achievements & <span className="font-extrabold">Certificates</span>
        </h2>
        <p className="text-[#71717A] mt-2 text-sm lg:text-base">
          Professional certifications and achievements
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white border-2 border-black rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start gap-3">
                <div className={`p-3 rounded-full ${item.icon === "trophy" ? "bg-yellow-100" : "bg-blue-100"}`}>
                  {item.icon === "trophy" ? (
                    <FaTrophy className="text-2xl text-yellow-500" />
                  ) : (
                    <PiCertificateBold className="text-2xl text-blue-500" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base lg:text-lg leading-tight">
                      {item.title}
                    </h3>
                    <span className={`text-white text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap ${
                      item.badge === "Certified" ? "bg-green-600" : 
                      item.badge === "Completed" ? "bg-blue-600" : "bg-black"
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[#71717A] text-sm mt-1">{item.issuer}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                </div>
              </div>
              
              <p className="text-[#71717A] text-sm mt-4">{item.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
