import { Link } from "react-router-dom"

export default function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p className="tech">{project.tech.join(", ")}</p>
        <div style={{ display: "flex",flexDirection: "column", gap: "10px "}}>
          <a href={project.github} target="_blank" rel="noreferrer">View on GitHub</a>
          {project.demo && (
            <Link to={project.demo}>
              View Demo
            </Link>
          )}
        </div>
      </div>
    );
  }  