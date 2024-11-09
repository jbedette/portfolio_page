import { FC } from 'react';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
  };
}

const ProjectCard: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={`${project.title} preview`} className="project-image" />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
