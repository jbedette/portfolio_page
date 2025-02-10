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
    description: 'A firefox extension to provide a more in-depth analysis of location, written in mostly python',
    link: `${githubAddr}property_location_analysis`,
    imageUrl: "images/property_analysis.png"
  },
  {
    title: 'Virtualized and Containerized Secure Homelab',
    description: 'FreeBSD vm Router protecting an Ubuntu server vm ',
    link: `${githubAddr}prowl`,
    imageUrl: "images/wazuh_portal.png"
  },
  {
    title: 'Haskell QuickCheck Analysis',
    description: 'A deep dive evaluating, comparing, and contrasting Haskell\'s QuickCheck library',
    link: `${githubAddr}haskell_quickcheck_examination`,
    imageUrl: "images/haskell_qc.jpg"
  },
  {
    title: 'AI/ML Financial Sentiment Analysis',
    description: 'Using 10-k reports taken from SEC-Edgar, analyze financial sentiment on S&P 500 companies',
    link: `${githubAddr}ai_10-k_analyzer`,
    imageUrl: "images/ai_fin_sent.jpg"
  },
  {
    title: 'Magic:The Gathering Momir Format Card Printer',
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
