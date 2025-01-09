import { useEffect } from "react";
import "./index.scss";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
