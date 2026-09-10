import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Courses from "@/components/Courses";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Courses />
      <Languages />
      <Contact />
    </>
  );
}
