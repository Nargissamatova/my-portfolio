import { useEffect } from "react";
import "./index.scss";
import { Main, Expertise } from "./components";
import FadeIn from "./components/FadeIn";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <FadeIn>
        <Main />
        <Expertise />
      </FadeIn>
    </div>
  );
}

export default App;
