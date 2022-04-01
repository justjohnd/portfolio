import { Routes, Route } from "react-router-dom";
import Navbar from "./Modules/Navbar";
import Footer from "./Modules/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import FadeWrapper from "./Utilities/FadeWrapper";

function App() {
  return (
    <div>
      {FadeWrapper(<Navbar />)}
      <div className="page-wrapper">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      {FadeWrapper(<Footer />)}
    </div>
  );
}

export default App;
