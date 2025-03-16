import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Index from "./pages/Index";
import Maintenance from "./components/maintenance";
import About from "./pages/About";
import Weekly from "./pages/Weekly";
import ContactUs from "./pages/Contact us";
import ScrollToTop from './components/ScrollTop';
import { ThemeProvider } from "./context/Themecontext";




function App() {
  return (
    <Router>
      <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/semanal" element={<Weekly />} />
        <Route path="/sobre nosotros" element={<About />} />
        <Route path="/contactanos" element={<ContactUs />} /> 
      </Routes>
      <ScrollToTop />
      <Maintenance />
      <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
