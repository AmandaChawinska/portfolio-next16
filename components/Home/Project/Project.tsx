"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import { projects } from "@/data";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const Project = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag),
  );

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        title_1="Featured"
        title_2="Projects"
        description="A selection of my recent work and side projects"
      />
      <div className="flex gap-6 justify-center items-center pb-6">
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
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {filteredProjects.map((project, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-center"
              key={index}
            >
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
