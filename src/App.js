import { Routes, Route } from "react-router-dom";
import Navbar from "./Modules/Navbar";
import HomePage from "./Pages/HomePage";
import WorkPage from "./Pages/WorkPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <div>
      <Navbar />
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
