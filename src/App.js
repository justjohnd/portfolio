import { Routes, Route } from "react-router-dom";
import Navbar from "./Modules/Navbar";
import Home from "./Pages/Work";
import Work from "./Pages/Work";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
