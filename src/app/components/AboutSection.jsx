"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Firebase</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>C++</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bhagwan Parshuram Institute of Technology, Rohini, Delhi</li>
        <li>Information Technology (IT) || CGPA: 8.8/10</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <strong>Introduction to Cybersecurity</strong> – Cisco Networking Academy (Jan 30, 2023) <br />
          <span className="text-sm text-gray-300">
            • Explored basic cybersecurity concepts: network security, data protection, and cyber defense techniques.
          </span>
        </li>
        <li>
          <strong>Programming for Everyone (Getting Started with Python)</strong> – University of Michigan | Coursera (Sep 12, 2022) <br />
          <span className="text-sm text-gray-300">
            • Covered Python fundamentals: variables, loops, functions, and data structures.
          </span>
        </li>
        <li>
          <strong>CodSoft Web Development Internship</strong> <br />
          <span className="text-sm text-gray-300">
            • Practical experience in building frontend and backend components for web apps.
          </span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/background_image_praveen.jpeg"
          width={500}
          height={500}
          className="rounded-md"
          alt="About Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate <strong>Full Stack Web Developer</strong> with hands-on experience in building dynamic and responsive web applications. 
            My tech stack includes <strong>Tailwind CSS</strong>, <strong>React</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, <strong>Firebase</strong>, <strong>Node.js</strong>, <strong>JavaScript</strong>, <strong>Python</strong>, and <strong>C++</strong>. 
            I&apos;m a quick learner, curious by nature, and always eager to take on new challenges. I love collaborating on meaningful projects and continuously sharpening my skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
