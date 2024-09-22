import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./hero.css";

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });

  // Aquí limitamos el desplazamiento a los primeros 100vh (equivalente a la altura del viewport en píxeles)
  const y = useTransform(scrollY, [0, window.innerHeight], [0, -200]); // Moverá la imagen hasta -200px

  return (
    <header className="grid-container bg-[#222] z-[999]" ref={ref}>
      <h1 className="hero-title">
        {"FRONT-END DEVELOPER DRIVEN BY DESIGN"
          .split("")
          .map((letter, index) => (
            <span key={index} className="cursor-hover">
              {letter}
            </span>
          ))}
      </h1>
      {/* <div className="hero-img-container">
        <motion.img
          src="https://images.unsplash.com/photo-1687904364304-3fa792cdb55a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="hidden sm:flex hero-image"
          style={{ y }}
        />
        <img
          src="https://images.unsplash.com/photo-1687904364304-3fa792cdb55a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="flex sm:hidden hero-image relative mt-5 text-pretty"
        />
      </div> */}

      <motion.div
        style={{ y }}
        className="hero-image-outercontainer hidden lg:flex mt-5"
      >
        <div className="hero-image-innercontainer ">
          {/* <img
            className="hidden hero-image sm:flex hero-image rounded-[24px]"
            src="https://images.unsplash.com/photo-1687904364304-3fa792cdb55a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          /> */}
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
