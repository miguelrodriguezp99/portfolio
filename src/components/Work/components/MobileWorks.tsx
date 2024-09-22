import { useRef } from "react";
import "../work.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MobileWorks() {
  // const ref = useRef(null);

  // const { scrollYProgress: Background } = useScroll({
  //   target: ref,
  //   offset: ["-20vh start", "end end"],
  // });
  // const translateY = useTransform(Background, [0, 1], ["0vh", "-360px"]);
  return (
    <>
      <div
        // style={{ translateY }}
        // ref={ref}
        className="sm:hidden mobile-works bg-[#222] relative z-50"
      >
        <div className="mobile-workitem-container">
          <a>
            <img
              src="miracle.jpeg"
              alt="Miracle UI"
              className="mobile-workitem-image"
            />
            <div className="mobile-worktext-container">
              <div className="mobile-worktext-title">MIRACLE</div>
              <div className="mobile-worktext-button">button</div>
            </div>
          </a>
          <div className="mobile-work-gradient"></div>
        </div>
        <div className="mobile-workitem-container">
          <a>
            <img
              src="keyboard.jpeg"
              alt="Miracle UI"
              className="mobile-workitem-image"
            />
            <div className="mobile-worktext-container">
              <div className="mobile-worktext-title">RTP/99</div>
              <div className="mobile-worktext-button">button</div>
            </div>
          </a>
          <div className="mobile-work-gradient"></div>
        </div>
        <div className="mobile-workitem-container">
          <a>
            <img
              src="bentoed.jpeg"
              alt="Miracle UI"
              className="mobile-workitem-image"
            />
            <div className="mobile-worktext-container">
              <div className="mobile-worktext-title">BENTOED</div>
              <div className="mobile-worktext-button">button</div>
            </div>
          </a>
          <div className="mobile-work-gradient"></div>
        </div>
      </div>
    </>
  );
}
