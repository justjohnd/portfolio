import { Routes, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Navbar from "./Modules/Navbar";
import HomePage from "./Pages/HomePage";
import WorkPage from "./Pages/WorkPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  const [appearHome, setAppearHome] = useState(true);

  return (
    <div>
      <CSSTransition
        in={appearHome}
        appear={true}
        timeout={1000}
        classNames="fade"
      >
        <Navbar />
      </CSSTransition>
      <div className="page-wrapper">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<HomePage to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
