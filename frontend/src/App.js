import "@/App.css";
import { ReactLenis } from "lenis/react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Ribbon } from "./components/Ribbon";
import { Manifesto } from "./components/Manifesto";
import { MenuSection } from "./components/MenuSection";
import { Reviews } from "./components/Reviews";
import { Visit } from "./components/Visit";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
      <div className="App bg-[#F4F1EB] min-h-screen">
        <div className="noise-overlay" aria-hidden="true" />
        <Nav />
        <main>
          <Hero />
          <div className="mt-20 md:mt-28">
            <Ribbon />
          </div>
          <Manifesto />
          <MenuSection />
          <Reviews />
          <Visit />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
