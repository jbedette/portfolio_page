// import Link from 'next/link';
import { FC } from 'react';
import ProjectCard from './components/ProjectCard';

interface Project {
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}
const githubAddr: string = "https://github.com/jbedette/";

const projects: Project[] = [
  {
    title: 'Property Walkability Analysis',
    description: 'Brief description here.',
    link: `${githubAddr}property_location_analysis`,
    imageUrl: "images/sample.png"
  },
  {
    title: 'BlockWright',
    description: 'Brief description here.',
    link: `${githubAddr}blockWright`,
    imageUrl: "images/sample.png"
  },
  {
    title: 'Aws CI/CD',
    description: 'Brief description here.',
    link: `${githubAddr}aws_ci_cd`,
    imageUrl: "images/sample.png"
  },
  {
    title: 'Prowl',
    description: 'Brief description here.',
    link: `${githubAddr}prowl`,
    imageUrl: "images/sample.png"
  },
];

const Home: FC = () => {
  return (
    <main>
      <h1>Welcome to My Portfolio</h1>
      <p>I am a developer. Here are my projects:</p>
      
      <section className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </main>
  );
};

export default Home;
