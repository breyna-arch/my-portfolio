import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";

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

