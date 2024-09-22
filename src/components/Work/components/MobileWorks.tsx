import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MobileWorks() {
  // Referencias para cada imagen
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // Hook para el primer item
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["start end", "end start"], // Cambiar el offset aquí afectará cuándo se activa
  });

  // Hook para el segundo item
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start end", "end start"], // Ajustar para el segundo
  });

  // Hook para el tercer item
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: ref3,
    offset: ["start end", "end start"], // Ajustar para el tercero
  });

  // Transformaciones para el primer item
  const scale1 = useTransform(scrollYProgress1, [0, 0.3], [0.8, 1]);
  const opacity1 = useTransform(scrollYProgress1, [0, 0.3], [0, 1]);

  // Transformaciones para el segundo item (ajustamos el rango de scroll)
  const scale2 = useTransform(scrollYProgress2, [0, 0.3], [0.8, 1]);
  const opacity2 = useTransform(scrollYProgress2, [0, 0.3], [0, 1]);

  // Transformaciones para el tercer item (ajustamos el rango de scroll)
  const scale3 = useTransform(scrollYProgress3, [0, 0.3], [0.8, 1]);
  const opacity3 = useTransform(scrollYProgress3, [0, 0.3], [0, 1]);

  return (
    <div className="sm:hidden mobile-works bg-[#222] relative z-50">
      {/* Primer item */}
      <motion.div
        className="mobile-workitem-container"
        ref={ref1}
        style={{ scale: scale1, opacity: opacity1 }}
      >
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
      </motion.div>

      {/* Segundo item */}
      <motion.div
        className="mobile-workitem-container"
        ref={ref2}
        style={{ scale: scale2, opacity: opacity2 }}
      >
        <a>
          <img
            src="keyboard.jpeg"
            alt="Keyboard UI"
            className="mobile-workitem-image"
          />
          <div className="mobile-worktext-container">
            <div className="mobile-worktext-title">RTP/99</div>
            <div className="mobile-worktext-button">button</div>
          </div>
        </a>
        <div className="mobile-work-gradient"></div>
      </motion.div>

      {/* Tercer item */}
      <motion.div
        className="mobile-workitem-container"
        ref={ref3}
        style={{ scale: scale3, opacity: opacity3 }}
      >
        <a>
          <img
            src="bentoed.jpeg"
            alt="Bento UI"
            className="mobile-workitem-image"
          />
          <div className="mobile-worktext-container">
            <div className="mobile-worktext-title">BENTOED</div>
            <div className="mobile-worktext-button">button</div>
          </div>
        </a>
        <div className="mobile-work-gradient"></div>
      </motion.div>
    </div>
  );
}
