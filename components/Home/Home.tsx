import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Experience from "./Experience/Experience";
import ClientReview from "./ClientReview/ClientReview";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <ClientReview />
    </div>
  );
};

export default Home;
