import { useEffect, useState } from "react";
import "./index.scss";
import {
  Main,
  Expertise,
  Timeline,
  Navigation,
  Footer,
  Contact,
  Project,
} from "./components";
import FadeIn from "./components/FadeIn";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  ("");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
        <Footer />
      </FadeIn>
    </div>
  );
}

export default App;
