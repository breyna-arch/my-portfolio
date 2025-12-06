import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </div>
  );
}
