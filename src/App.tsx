import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Index from "./pages/Index";
import Maintenance from "./components/maintenance";
import About from "./pages/About";
import Weekly from "./pages/Weekly";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/semanal" element={<Weekly />} />
        <Route path="/sobre nosotros" element={<About />} />
        {/* <Route path="/contactanos" element={<Contactanos />} /> */}
      </Routes>
      <Maintenance />
      <Footer />
    </Router>
  );
}

export default App;
