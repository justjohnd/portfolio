import { Routes, Route } from "react-router-dom";
import Navbar from "./Modules/Navbar";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <div className="page-wrapper">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
