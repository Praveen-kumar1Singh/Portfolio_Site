"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI-based Logo Generator",
    description: "Built an AI-based logo generator using Clerk for authentication, Firebase for backend, Gemini API for AI, Flux model for optimization, Razorpay for payment, and Next.js for the frontend.",
    image: "/images/project_ailogo_preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Praveen-kumar1Singh/AI-Logo-Image-generator",
    previewUrl: "https://ai-based-logo-generator.vercel.app/",
  },
  {
    id: 2,
    title: "Real-time Chat App",
    description: "A full-fledged real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) allowing users to chat in real-time with message notifications.",
    image: "/images/project_preview_chatapp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Praveen-kumar1Singh/MERN-chatApp",
    previewUrl: "https://talkapp-3y1z.onrender.com/",
  },
  {
    id: 3,
    title: "E-Course Platform",
    description: "A comprehensive e-learning platform developed using the MERN stack, featuring courses, quizzes, and payment integration for a seamless user experience.",
    image: "/images/project_ebook_preview.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Praveen-kumar1Singh/Egyan-Course",
    previewUrl: "https://ebook-6rud.onrender.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
