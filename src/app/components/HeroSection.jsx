"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-10 lg:py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-12 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 sm:col-span-7 lg:col-span-8 text-center sm:text-left"
        >
          <h1 className="text-white mb-6 text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Praveen Kumar Singh",
                1000,
                "Student",
                1000,
                "MERN Stack Developer",
                1000,
                "Full Stack Developer",
                1000,
                "Backend Developer",
                1000,
                "Frontend Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-left sm:text-lg mb-6 lg:text-xl">
            Dedicated <strong>B.Tech IT student</strong> with a strong interest in <strong>Artificial Intelligence</strong> and <strong>Full-Stack Development</strong>, specializing in <strong>Backend Engineering</strong> with <strong>Node.js</strong>, <strong>MongoDB</strong>, and <strong>Firebase</strong>. Experienced in building modern web applications using <strong>Next.js</strong> and <strong>React</strong>, with a passion for creating scalable, intelligent, and efficient digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-center hover:opacity-90 transition w-full sm:w-auto"
            >
              Hire Me
            </Link>
            <a
              href="/images/Praveen_CV.pdf"
              download
              className="px-1 py-1 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white hover:opacity-90 transition w-full sm:w-auto"
            >
              <span className="block bg-[#121212] rounded-full px-5 py-2 hover:bg-slate-800 transition">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 sm:col-span-5 lg:col-span-4 mt-10 sm:mt-0 flex justify-center"
        >
          <div className="relative rounded-full bg-[#181818] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/coder-image.svg"
              alt="Hero Image"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width={450}
              height={450}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
