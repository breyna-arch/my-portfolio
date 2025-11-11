export default function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <img src={project.image} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p className="tech">{project.tech.join(", ")}</p>
        <a href={project.github} target="_blank" rel="noreferrer">View on GitHub</a>
      </div>
    );
  }  