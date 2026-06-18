import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import ProjectLayout from "./layouts/ProjectLayout";
import AboutLayout from "./layouts/AboutLayout";
import ContactLayout from "./layouts/ContactLayout";
import Loader from '../src/pages/Loader'
import Projects3 from "./pages/Projects3";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route path="/projects" element={<ProjectLayout />} />
        <Route path="/contact" element={<ContactLayout />} />
        {/* <Route path ='/projects2' element={<Projects3/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
