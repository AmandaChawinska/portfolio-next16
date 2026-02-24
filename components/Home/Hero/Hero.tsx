"use client";
import { Button } from "@/components/ui/button";
import { Download, FolderOpen } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_farthest-corner_at_10%_20%,#F8B4F4_0%,#A9DBED_90%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_10%_20%,#FD73C8_0%,#005C8D_90.5%)]">
      {/* content */}
      <div className="relative z-10 text-center max-lg:mt-5">
        <div data-aos="fade-up" className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>
        {/* title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-purple-800 dark:text-yellow-300">
            Amanda Chawińska
          </span>
        </h1>
        {/* typewrite effects */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12"
        >
          <TypeAnimation
            sequence={[
              "Web developer",
              2000,
              "Frontend developer",
              2000,
              "Wordpress developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-mono"
          />
        </div>
        {/* description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10 px-4"
        >
          Crafting exceptional digital experiences with modern technologies.
          Passionate about building scalable applications and teaching others.
        </p>
        {/* buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-0">
            <a href="#">
              <FolderOpen className="w-5 h-5 mr-2" />
              View Projects
            </a>
          </Button>
          <Button size={"lg"} asChild className="w-fit mx-auto sm:mx-0">
            <a href="#">
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
