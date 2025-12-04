import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Smart India Hackathon 2025",
      image: "/assets/certificates/sih-2025.png"
    },
    {
      id: 2,
      title: "Introduction to Large Language Models (LLMs)",
      image: "/assets/certificates/nptel-llm.png"
    },
    {
      id: 3,
      title: "HCL Technologies Internship",
      image: "/assets/certificates/hcl-internship.png"
    },
    {
      id: 4,
      title: "Constitution Day Quiz Competition",
      image: "/assets/certificates/constitution-day.png"
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
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCert(cert)}
            className="bg-white border-2 border-black rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <IoClose size={32} />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
