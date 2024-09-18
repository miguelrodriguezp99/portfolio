import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar/Navbar";
import Quote from "./components/Quote/Quote";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="bg-transparent font-jakarta">
      <ReactLenis
        root
        options={{
          lerp: 0.12,
          touchMultiplier: 0,
          syncTouch: false,
        }}
      >
        <Navbar />
        <Hero />
        <Quote />
        <Work />
        <Footer />

        <Cursor />
      </ReactLenis>
    </div>
  );
}

export default App;
