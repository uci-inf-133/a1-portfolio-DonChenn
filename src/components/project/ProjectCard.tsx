import { Link } from "react-router-dom";
import { projects, type Project} from "../../data/project"

function ProjectCardItem({ title, description, thumbnail, link }: Project) {
  return (
    <article className="card">
      <img src={thumbnail} alt={`${title} thumbnail`} width="100" />
      <div className="p">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="button">
          <Link to={link}>Details</Link>
        </button>
      </div>
    </article>
  );
}

function ProjectCard() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectCardItem
          key={project.title}
          title={project.title}
          description={project.description}
          thumbnail={project.thumbnail}
          link={project.link}
        />
      ))}
    </section>
  );
}

export default ProjectCard;
