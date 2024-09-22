import { motion, useScroll, useTransform } from "framer-motion";
import AboutContent from "../components/About/About";
import "./about.css";
import { useRef } from "react";
import Cursor from "../components/Cursor/Cursor";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "200vh end"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.5], [1, 0.1]);
  const filter = useTransform(scrollYProgress, (v) => {
    if (v < 0.1) return `blur(0px)`;
    const blurValue = (v - 0.2) * (20 / 1);
    return `blur(${blurValue}px)`;
  });

  return (
    <>
      <Cursor />

      <div className="font-jakarta z-50 min-w-full">
        <div ref={ref} className="grid-container about-container relative">
          <header className="grid-container about-header py-0 px-0 ">
            <h1 className="about-title uppercase">
              {"Front-end engineer located in Spain"
                .split("")
                .map((letter, index) => (
                  <span key={index} className="cursor-hover">
                    {letter}
                  </span>
                ))}
            </h1>
          </header>
          <div className="about-image-container sticky top-24 lg:absolute mt-10 lg:mt-0 ">
            <div className="about-image-outercontainer ">
              <div className="about-image-innercontainer">
                <motion.img
                  style={{
                    opacity,
                    filter,
                  }}
                  className="hero-image hidden sm:flex object-cover"
                  src="./miguel.png"
                />
                <motion.img
                  style={{ opacity, filter }}
                  className="hero-image sm:hidden sticky top-0 left-0 object-cover"
                  src="./miguel.png"
                />
              </div>
            </div>
          </div>
          <AboutContent />
        </div>
      </div>
    </>
  );
}
