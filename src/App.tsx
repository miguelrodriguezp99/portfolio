import { ReactLenis } from "lenis/react";
import Home from "./pages/Home";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./hooks/useScrollToTop";

function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        touchMultiplier: 0,
        syncTouch: false,
      }}
    >
      <ScrollToTop />
      <div className="font-jakarta min-w-full relative z-[-2]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
