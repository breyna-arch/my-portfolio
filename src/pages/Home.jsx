import { FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my projects and learn more about my work.</p>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/brian-reyna-0b8663220" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          <FaLinkedin className="linkedin-icon" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}