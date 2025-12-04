import React from 'react';
import { BsGithub } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Virtual Setu",
    subtitle: "Full Stack Web Application",
    description: "A digital platform that connects citizens with government services such as Aadhaar, PAN Card, and Passport. Features smart digital card and PIN-based document access for secure and easy retrieval of documents. Built with React.js frontend and Supabase for authentication and data storage.",
    technologies: ["React.js", "Node.js", "Supabase", "REST API"],
    image: "/assets/projects/digital-setu.png",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "https://github.com/kunalkolhe/series-tracker-hub"
  },
  {
    id: 2,
    title: "SaralDocs",
    subtitle: "Government Document Simplifier",
    description: "A web application that helps citizens understand their government, legal, or official documents in simple language. Upload any document and it converts it into easy-to-understand language in your preferred Indian language. Features support for 12 languages, 100% secure processing, and free to use for all citizens.",
    technologies: ["React.js", "Node.js", "AI/NLP", "Multi-language Support"],
    image: "/assets/projects/saraldocs.png",
    status: "Completed",
    liveUrl: "#",
    githubUrl: "https://github.com/kunalkolhe/saraldocs"
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-start flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:w-[500px] w-full rounded-2xl overflow-hidden relative group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
                  <BsGithub size={18} />
                  View on GitHub
                </span>
              </div>
              <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium bg-green-500/90 text-white">
                {project.status}
              </span>
            </a>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>
              <p className="text-[#A1A1AA] text-sm font-medium">{project.subtitle}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-4">
                <a 
                  href={project.githubUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm"
                >
                  <BsGithub size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
