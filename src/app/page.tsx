// import Link from 'next/link';
import ProjectCard from './components/ProjectCard';
import HeroSection from './components/HeroSection';
import Layout from './components/Layout';
import About from './components/About';

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
    title: 'Virtualized and Containerized Secure Homelab',
    description: 'FreeBSD vm Router protecting an Ubunter server vm ',
    link: `${githubAddr}prowl`,
    imageUrl: "images/wazuh_portal.png"
  },
  {
    title: 'Aws CI/CD',
    description: 'Brief description here.',
    link: `${githubAddr}aws_ci_cd`,
    imageUrl: "images/sample.png"
  },
  {
    title: 'MTG momir format card printer',
    description: 'Physical gadget that uses scryfall.com\'s api to generate a low resolution black and white MTG card, connect with a thermal printer via bluetooth credential spoofing and print it on a label',
    link: `${githubAddr}momir`,
    imageUrl: "images/momir_gui.png"
  },
  {
    title: 'BlockWright',
    description: 'An exercise in application planning and thoughful development through a gamedev lens, a small app with a target audience and development timeline',
    link: `${githubAddr}blockWright`,
    imageUrl: "images/blockwright_alpha.png"
  },
  {
    title: 'Prowl',
    description: 'Brief description here.',
    link: `${githubAddr}prowl`,
    imageUrl: "images/sample.png"
  },
];
const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <section id="projects" className="projects-section">
        <h2 className='sectionHeader'>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <About/>
    </Layout>
  );
};

export default Home;
