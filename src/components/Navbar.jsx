import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Brian Reyna</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
