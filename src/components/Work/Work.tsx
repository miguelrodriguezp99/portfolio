import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./work.css";
import MobileWorks from "./components/MobileWorks";

const Work = () => {
  const ref = useRef(null);
  const { scrollYProgress: WorkTitle } = useScroll({
    target: ref,
    offset: ["-100vh start", "700vh end"],
  });

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);

      window.addEventListener("resize", handleResize);
    };
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ------------------------------- */
  const [scrollTrigger1, setScrollTrigger1] = useState(0);
  const [scrollTrigger2, setScrollTrigger2] = useState(0);
  const imgRef1 = useRef<HTMLImageElement>(null);
  const imgRef2 = useRef<HTMLImageElement>(null);
  const imgRef3 = useRef<HTMLImageElement>(null);
  /* ------------------------------- */

  const [currentImage, setCurrentImage] = useState(0);

  /* RANDOM IMAGE SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 750);

    return () => clearInterval(interval);
  }, []);

  /* ANIMATIONS */
  const scale = useTransform(WorkTitle, [0.05, 0.2], [1.5, 1]);
  const translateY = useTransform(WorkTitle, [0.165, 0.3], ["100vh", "0vh"]);
  // const translateYMobile = useTransform(
  //   WorkTitle,
  //   [0.123, 0.3],
  //   ["100vh", "0vh"]
  // );

  const translateTitles = useTransform(WorkTitle, [0.5, 0.55], ["0vh", "0vh"]);

  const opacity = useTransform(WorkTitle, [0.2, 0.3], [1, 0.4]);
  const filter = useTransform(WorkTitle, (v) => {
    if (v < 0.225) return `blur(0px)`;
    const blurValue = (v - 0.225) * (25 / 0.25);
    return `blur(${blurValue}px)`;
  });

  const randomImageOpacity = useTransform(WorkTitle, [0.4, 0.45], [1, 0]);
  const rotateX1 = useTransform(WorkTitle, [0.2, 0.435], ["50deg", "-50deg"]);
  const rotateX2 = useTransform(WorkTitle, [0.3, 0.55], ["50deg", "-50deg"]);
  const rotateX3 = useTransform(WorkTitle, [0.4, 0.64], ["50deg", "-40deg"]);
  // const y = useTransform(WorkTitle, [0.285, 0.861], [0, -viewportHeight * 3.5]);
  const y = useTransform(WorkTitle, [0.285, 0.57], [0, -viewportHeight * 1.8]);

  const controls = useAnimation();
  const { scrollY } = useScroll();

  /* ------------- TITLE CHANGE TRIGGER ------------- */
  useEffect(() => {
    const updateScrollTriggers = () => {
      if (imgRef1.current && imgRef2.current) {
        const img1Rect = imgRef1.current.getBoundingClientRect();
        const img2Rect = imgRef2.current.getBoundingClientRect();
        setScrollTrigger1(img1Rect.top + window.scrollY - 100);
        setScrollTrigger2(img2Rect.top + window.scrollY - 100);
      }
    };

    updateScrollTriggers();
    window.addEventListener("resize", updateScrollTriggers);
    return () => {
      window.removeEventListener("resize", updateScrollTriggers);
    };
  }, [viewportHeight]);
  /* ------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollY.get();

      if (scrollTop >= scrollTrigger1 && scrollTop < scrollTrigger2) {
        controls.start({
          translateY: "-33%",
          transition: { duration: 0.25 },
        });
      } else if (scrollTop >= scrollTrigger2) {
        controls.start({
          translateY: "-66%",
          transition: { duration: 0.25 },
        });
      } else {
        controls.start({
          translateY: "0%",
          transition: { duration: 0.25 },
        });
      }
    };

    handleScroll();
    return scrollY.onChange(handleScroll);
  }, [scrollY, controls, scrollTrigger1, scrollTrigger2]);

  return (
    <>
      <div
        ref={ref}
        // style={{ translateY: translateWork }}
        className={`min-h-[100vh] max-h-min sm:max-h-none sm:min-h-none sm:h-[400dvh] relative z-[9999] bg-[#f9f9f9] cursor-black-color`}
      >
        <section className="work-section-container ">
          <h2>Work</h2>
          <div className="work-svg-container">
            <motion.svg
              style={{
                scale,
                filter,
                opacity,
              }}
              viewBox="0 0 747.7 184.56"
            >
              <path d="M614.5 181.68V2.88h19.2v104.4l-4.32-2.16 90-102.24h24l-72.24 82.08.96-13.68 75.6 110.4h-23.04L663.7 93.6l-30 34.08v54h-19.2ZM460.75 181.68V2.88h61.44c11.68 0 21.92 2.32 30.72 6.96 8.8 4.48 15.6 10.88 20.4 19.2 4.96 8.16 7.44 17.68 7.44 28.56 0 12.64-3.36 23.44-10.08 32.4-6.56 8.96-15.52 15.28-26.88 18.96l41.76 72.72h-22.56l-43.68-77.04 12.96 7.44h-52.32v69.6h-19.2Zm19.2-87.6h43.2c7.68 0 14.4-1.44 20.16-4.32 5.76-3.04 10.24-7.28 13.44-12.72 3.2-5.6 4.8-12.16 4.8-19.68s-1.6-14-4.8-19.44-7.68-9.6-13.44-12.48c-5.76-3.04-12.48-4.56-20.16-4.56h-43.2v73.2ZM334.28 184.56c-12.48 0-24.16-2.24-35.04-6.72-10.72-4.64-20.16-11.04-28.32-19.2-8.16-8.32-14.56-18.08-19.2-29.28-4.64-11.36-6.96-23.76-6.96-37.2s2.32-25.76 6.96-36.96c4.64-11.36 11.04-21.12 19.2-29.28 8.16-8.32 17.6-14.72 28.32-19.2C310.12 2.24 321.8 0 334.28 0s24.08 2.32 34.8 6.96c10.88 4.48 20.4 10.88 28.56 19.2 8.16 8.16 14.56 17.84 19.2 29.04 4.64 11.2 6.96 23.52 6.96 36.96s-2.32 25.84-6.96 37.2c-4.64 11.2-11.04 20.96-19.2 29.28-8.16 8.16-17.68 14.56-28.56 19.2-10.72 4.48-22.32 6.72-34.8 6.72Zm0-18c10.4 0 19.84-1.92 28.32-5.76 8.64-3.84 16.08-9.2 22.32-16.08 6.24-6.88 11.04-14.8 14.4-23.76 3.52-8.96 5.28-18.56 5.28-28.8s-1.76-19.6-5.28-28.56c-3.36-8.96-8.16-16.88-14.4-23.76-6.24-6.88-13.68-12.24-22.32-16.08-8.48-3.84-17.92-5.76-28.32-5.76s-19.92 1.92-28.56 5.76c-8.48 3.84-15.84 9.2-22.08 16.08-6.24 6.88-11.12 14.8-14.64 23.76-3.36 8.96-5.04 18.48-5.04 28.56s1.68 19.84 5.04 28.8c3.52 8.96 8.4 16.88 14.64 23.76 6.24 6.88 13.68 12.24 22.32 16.08 8.64 3.84 18.08 5.76 28.32 5.76ZM51.36 181.68 0 2.88h19.44l44.4 160.08h-4.08l45.6-160.08h20.4l45.36 160.08h-4.32L211.44 2.88h19.44l-51.36 178.8h-20.4l-45.84-160.8h4.32l-45.84 160.8h-20.4Z"></path>
            </motion.svg>
          </div>
          <motion.div
            className="work-image-container"
            style={{
              opacity: randomImageOpacity,
            }}
          >
            <img
              src="miracle.jpeg"
              alt="miracle ui"
              className={`absolute rounded-[24px] aspect-1.5/1  w-full object-cover ${
                currentImage === 0 ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="keyboard.jpeg"
              alt="typing monkey"
              className={`absolute rounded-[24px] aspect-1.5/1  w-full object-cover  ${
                currentImage === 1 ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="bentoed.jpeg"
              alt="Image 3"
              className={`absolute rounded-[24px] aspect-1.5/1  w-full object-cover ${
                currentImage === 2 ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>

          <motion.div
            style={{ translateY }}
            className="hidden sm:flex absolute top-0 w-full min-h-[100vh] bg-[#222] gray-background"
          ></motion.div>
          {/* <motion.div
            style={{ translateY: translateYMobile }}
            className="sm:hidden absolute top-0 w-full min-h-[100vh] bg-[#222] gray-background"
          ></motion.div> */}
        </section>
        <MobileWorks />

        {/* WORKS PC CONTAINER */}
        <section className="hidden sm:flex works-container sticky top-0 text-[#f9f9f9] max-h-[100dvh]">
          <motion.div style={{ y }} className="hidden sm:flex works-container ">
            <a
              href="https://miracle-ui.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="work-item-link"
            >
              <div className="persp relative">
                <motion.img
                  ref={imgRef1}
                  style={{
                    rotateX: rotateX1,
                  }}
                  src="miracle.jpeg"
                  alt="Miracle UI"
                  className="work-item-image object-cover cursor-hover-project"
                />
              </div>
            </a>
            <a
              href="https://typing-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="work-item-link"
            >
              <div className="persp">
                <motion.img
                  ref={imgRef2}
                  id="keyboardimg"
                  style={{
                    rotateX: rotateX2,
                  }}
                  src="keyboard.jpeg"
                  alt="Miracle UI"
                  className="work-item-image object-cover cursor-hover-project"
                />
              </div>
            </a>
            <a
              href="https://bentoed.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="work-item-link"
            >
              <div className="persp">
                <motion.img
                  ref={imgRef3}
                  style={{
                    rotateX: rotateX3,
                  }}
                  src="bentoed.jpeg"
                  alt="Miracle UI"
                  className="work-item-image object-cover cursor-hover-project"
                />
              </div>
            </a>
          </motion.div>

          <motion.div
            style={{
              translateY: translateTitles,
            }}
            className="hidden sm:flex work-titles-outercontainer"
          >
            <div className="work-titles-innercontainer">
              <div className="work-titles-container">
                <motion.h2 animate={controls} className="flex flex-col">
                  <span>MIRACLE</span>
                  <span>RTP/99</span>
                  <span>BENTOED</span>
                </motion.h2>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Work;
