import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './work.css';
import MobileWorks from './components/MobileWorks';
import useMedia from 'use-media';
import WorkSvgPath from './WorkSvgPath';

const Work = () => {
  const ref = useRef(null);
  const { scrollYProgress: WorkTitle } = useScroll({
    target: ref,
    offset: ['-100vh start', '700vh end'],
  });

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const isDesktop = useMedia({ minWidth: '640px' });
  const is2kResolution = useMedia({ minWidth: '1440px' });
  const is4kResolution = useMedia({ minWidth: '2560px' });

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);

      window.addEventListener('resize', handleResize);
    };
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [scrollTrigger1, setScrollTrigger1] = useState(0);
  const [scrollTrigger2, setScrollTrigger2] = useState(0);
  const imgRef1 = useRef<HTMLImageElement>(null);
  const imgRef2 = useRef<HTMLImageElement>(null);
  const imgRef3 = useRef<HTMLImageElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 750);

    return () => clearInterval(interval);
  }, []);

  /* ANIMATIONS */
  const scale = useTransform(WorkTitle, [0.05, 0.2], [1.5, 1]);
  const translateY = useTransform(WorkTitle, [0.165, 0.3], ['100vh', '0vh']);

  const translateTitles = useTransform(WorkTitle, [0.5, 0.55], ['0vh', '0vh']);

  const opacity = useTransform(WorkTitle, [0.2, 0.3], [1, 0.4]);
  const filter = useTransform(WorkTitle, (v) => {
    if (v < 0.225) return `blur(0px)`;
    const blurValue = (v - 0.225) * (25 / 0.25);
    return `blur(${blurValue}px)`;
  });

  const randomImageOpacity = useTransform(WorkTitle, [0.4, 0.45], [1, 0]);

  //* CARDS -- ADJUTSMENTS TO 2K AND 4K RESOLUTIONS WITH QUERIES
  const degrees1 = '50deg';
  const degrees2 = '-50deg';
  const degrees3 = '-40deg';

  let rotateX1_1 = 0.2;
  let rotateX1_2 = 0.435;
  let rotateX2_1 = 0.3;
  let rotateX2_2 = 0.55;
  let rotateX3_1 = 0.4;
  let rotateX3_2 = 0.64;

  if (is2kResolution) {
    rotateX1_1 = 0.2;
    rotateX1_2 = 0.435;
    rotateX2_1 = 0.3;
    rotateX2_2 = 0.48;
    rotateX3_1 = 0.35;
    rotateX3_2 = 0.55;
  }

  if (is4kResolution) {
    rotateX1_1 = 0.2;
    rotateX1_2 = 0.435;
    rotateX2_1 = 0.28;
    rotateX2_2 = 0.45;
    rotateX3_1 = 0.3;
    rotateX3_2 = 0.55;
  }

  const rotateX1 = useTransform(
    WorkTitle,
    [rotateX1_1, rotateX1_2],
    [degrees1, degrees2]
  );
  const rotateX2 = useTransform(
    WorkTitle,
    [rotateX2_1, rotateX2_2],
    [degrees1, degrees2]
  );
  const rotateX3 = useTransform(
    WorkTitle,
    [rotateX3_1, rotateX3_2],
    [degrees1, degrees3]
  );
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
    window.addEventListener('resize', updateScrollTriggers);
    return () => {
      window.removeEventListener('resize', updateScrollTriggers);
    };
  }, [viewportHeight]);
  /* ------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollY.get();

      if (scrollTop >= scrollTrigger1 && scrollTop < scrollTrigger2) {
        controls.start({
          translateY: '-33%',
          transition: { duration: 0.25 },
        });
      } else if (scrollTop >= scrollTrigger2) {
        controls.start({
          translateY: '-66%',
          transition: { duration: 0.25 },
        });
      } else {
        controls.start({
          translateY: '0%',
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
              <WorkSvgPath />
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
                currentImage === 0 ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <img
              src="keyboard.jpeg"
              alt="typing monkey"
              className={`absolute rounded-[24px] aspect-1.5/1  w-full object-cover  ${
                currentImage === 1 ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <img
              src="bentoed.jpeg"
              alt="Image 3"
              className={`absolute rounded-[24px] aspect-1.5/1  w-full object-cover ${
                currentImage === 2 ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </motion.div>

          <motion.div
            style={{ translateY }}
            className="hidden sm:flex absolute top-0 w-full min-h-[100vh] bg-[#222] gray-background"
          ></motion.div>
        </section>

        {isDesktop ? (
          <section className="hidden sm:flex works-container sticky top-0 text-[#f9f9f9] max-h-[100dvh]">
            <motion.div
              style={{ y }}
              className="hidden sm:flex works-container "
            >
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
        ) : (
          <MobileWorks />
        )}
      </div>
    </>
  );
};

export default Work;
