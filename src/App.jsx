import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import FoodBlog from "./pages/FoodBlog";
import Frontend from "./pages/frontendFinal"; 
import Loading from "./pages/loadingPage";
import MermaidDiagram from "./pages/flowchartPage";


function AppContent() {
  return (
    <Router>
      <Navbar />
      <ThemeToggle className="theme-toggle-container" />
      <Routes>
        <Route path="/" element={<Navigate to="/projects" replace />} />
        <Route path="/my-portfolio" element={<Navigate to="/projects" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/foodblog" element={<FoodBlog />} />

        {/* Internal demo route */}
        <Route path="/frontendFinal" element={<Frontend />} />
        <Route path="/loadingPage" element={<Loading />} />
        <Route path="/flowchartPage" element={<MermaidDiagram />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

