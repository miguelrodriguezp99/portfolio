import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import "./about.css";
import galaxy from "../../assets/galaxy.jpg";
import keyboard from "../../assets/keyboard.jpeg";

export default function AboutContent() {
  const dividerRef = useRef(null);
  const firstDividerRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  // const [img, setImg] = useState({
  //   src: "",
  //   alt: "",
  //   opacity: 0,
  //   backgroundPosition: "0 0",
  // });

  // const bgPosition = {
  //   p1: "0 0",
  //   p2: "0 33%",
  //   p3: "0 66%",
  //   p4: "0 100%",
  // };

  const list = [
    {
      img: galaxy,
      title: "Frontent development internship at Inditex",
      date: "2024 - now",
      // backgroundPosition: bgPosition.p1,
    },
    {
      img: keyboard,
      title: "Computer engineering at the University of Coruña",
      date: "2019 - 2025",
      // backgroundPosition: bgPosition.p2,
    },
    {
      img: galaxy,
      title: "Backend development internship at Oesia",
      date: "2019 -2019",
      // backgroundPosition: bgPosition.p3,
    },
    {
      img: keyboard,
      title: "Multi-Platform Application development",
      date: "2017 - 2019",
      // backgroundPosition: bgPosition.p4,
    },
  ];

  // const spring = {
  //   stiffness: 150,
  //   damping: 15,
  //   mass: 0.1,
  // };
  // const imagePos = {
  //   x: useSpring(0, spring),
  //   y: useSpring(0, spring),
  // };

  // const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const { clientX, clientY } = e;
  //   imagePos.x.set(clientX);
  //   imagePos.y.set(clientY);
  // };

  const dividerAnimation = useInView(dividerRef, {
    margin: "-300px 0px 0px 0px",
    once: true,
  });

  const isFirstDividerInView = useInView(firstDividerRef, {
    margin: "-300px 0px 0px 0px",
    once: true,
  });

  useEffect(() => {
    if (isFirstDividerInView) {
      setShouldAnimate(true);
    }
  }, [isFirstDividerInView]);

  return (
    <main className="about-section col-start-1 col-end-13 pt-48 text-[#d3d2d2] pb-24 px-6">
      <div
        ref={dividerRef}
        className={`min-h-[1px] bg-[#f9f9f993] md:col-start-2 md:col-end-12 col-start-1 col-end-13 divider ${
          dividerAnimation ? "animate-divider delay-0" : ""
        }`}
      ></div>
      <div className="md:col-start-2 md:col-end-12 col-start-1 col-end-13 flex flex-col lg:flex-row lg:leading-[50px] py-[80px] about-animation">
        <div className="lg:w-[30%]">
          <h1 className="title-font w-fit cursor-hover mb-4">ABOUT ME</h1>
        </div>
        <p className="content-font lg:w-[70%] indent-[60px] lg:indent-[200px] text-balance">
          As a frontend developer, I value creativity and clean, organized code.
          I’m always looking to improve my design skills and have gained
          experience with tools like React, Astro and more to build better user
          experiences.
        </p>
      </div>

      {/* Lista con los dividers */}
      <div className="md:col-start-2 md:col-end-12 col-start-1 col-end-13 flex flex-col lg:flex-row lg:leading-[50px] py-[80px] about-animation">
        <div className="lg:w-[30%]">
          <h1 className="list-title w-fit  cursor-hover mb-4">MY JOURNEY</h1>
        </div>
        <div className="preview">
          <div className="preview-img"></div>
        </div>
        <div className="lg:w-[70%] image_reveal">
          <ul className="cursor-hover">
            {list.map((item) => {
              return (
                <>
                  <div
                    key={item.title}
                    // onMouseEnter={() => {
                    //   setImg({
                    //     backgroundPosition: item.backgroundPosition,
                    //     src: item.img,
                    //     alt: item.title,
                    //     opacity: 1,
                    //   });
                    // }}
                    // onMouseLeave={() => {
                    //   setImg({
                    //     backgroundPosition: item.backgroundPosition,
                    //     src: item.img,
                    //     alt: item.title,
                    //     opacity: 0,
                    //   });
                    // }}
                  >
                    <div
                      ref={firstDividerRef}
                      className={`min-h-[1px] bg-[#f9f9f993] md:col-start-2 md:col-end-12 col-start-1 col-end-13 divider  ${
                        shouldAnimate ? "animate-divider delay-0" : ""
                      }`}
                    ></div>
                    <li className="py-3 flex flex-col">
                      <h3 className="list-title-font">{item.title}</h3>
                      <p className="text-end md:text-[16px] h-fit leading-[21px]">
                        {item.date}
                      </p>
                    </li>
                  </div>
                </>
              );
            })}
          </ul>
          {/* <motion.div
            className="hovered_img"
            style={
              {
                // // backgroundPosition: img.backgroundPosition,
                // y: imagePos.y,
                // x: imagePos.x,
                // opacity: img.opacity,
              }
            }
          /> */}
        </div>
      </div>
    </main>
  );
}

/* 

const projects = document.querySelector("projects");
const prewiew = document.querySelector("preview");
const previewImg = document.querySelector("preview-img");

let isInside = false;

const bgPosition = {
    p1 : "0 0",
    p2 : "0 33%",
    p3 : "0 66%",
    p4 : "0 100%"
};

const moveStuff = (e) => {
    const mouseInside isMouseInsideContainer(e);

    if (mouseInside !== isInside) {
        isInside = mouseInside;
        if (isInside) {
            gsap.to(preview, 0.3, {
            scale: 1,
            });
        } else {
        gsap.to(preview, 0.3, {
            scale: 0,
            });
        }
    }
};

const moveProject = (e) => {
    const preview = preview.getBoundingClientRect();
    const offsetX = previewRect.width  / 2;
    const offsetY = previewRect.height / 2;

    preview.style.left = e.pageX - offsetX + "px";
    preview.style.top = e.pageY - offsetY + "px";
}

const moveProjectImg = (project) => {
    const projectId = project.id;
    gsap.to(previewImg, 0.4, {
        backgroundPosition: bgPosition[projectId] || "0 0",
    });
}

const isMouseInsideContainer = (e) => {
    const previewRect = preview.getBoundingClientRect();
    return (
        e.pageX >= previewRect.left && 
        e.pageX <= previewRect.right && 
        e.pageY >= previewRect.top && 
        e.pageY <= previewRect.bottom
    );
}

window.addEventListener("mousemove", moveStuff);

Array.from(projects.children).forEach((project) => {
    project.addEventListener("mousemove", moveProject);
    project.addEventListener("mousemove", moveProjectImg.bind(null, project));
}

*/
