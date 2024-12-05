import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const y = useTransform(scrollY, [0, window.innerHeight], [0, -200]);

  return (
    <header className="grid-container bg-[#222] z-[999]" ref={ref}>
      <h1 className="hero-title">
        {'FRONT-END DEVELOPER DRIVEN BY DESIGN'
          .split('')
          .map((letter, index) => (
            <span key={index} className="cursor-hover">
              {letter}
            </span>
          ))}
      </h1>

      <motion.div
        style={{ y }}
        className="hero-image-outercontainer hidden lg:flex mt-5"
      >
        <div className="hero-image-innercontainer ">
          <img className="hero-image" src="./miguel.png" />
        </div>
      </motion.div>

      <div className="hero-image-container">
        <div className="hero-image-outercontainer mt-5 lg:hidden">
          <div className="hero-image-innercontainer ">
            <img
              src="./miguel.png"
              className="flex hero-image relative text-pretty object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
