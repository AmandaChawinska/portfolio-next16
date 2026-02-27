"use client";
import SectionHeading from "@/components/Helper/SectionHeading";
import { projects } from "@/data";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const Project = () => {
  const [tag, setTag] = useState("Wszystkie");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(tag),
  );

  return (
    <div id="projects" className="py-16 bg-gray-100 dark:bg-gray-900">
      <SectionHeading
        title_1="Wybrane"
        title_2="Projekty"
        description="Przegląd moich najnowszych realizacji i projektów pobocznych"
      />
      <div className="flex gap-6 justify-center items-center pb-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Wszystkie"
          isSelected={tag === "Wszystkie"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Vanilla JS / Frontend"
          isSelected={tag === "Vanilla JS / Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React/Next"
          isSelected={tag === "React/Next"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="WordPress"
          isSelected={tag === "WordPress"}
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {filteredProjects.map((project, index) => {
          return (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 50}
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
