import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
        <h2>Your Name</h2>
        <p>Web Developer</p>
      </div>
      <nav>
        <Link href="#about">About</Link>
        <Link href="#skills">My Skills</Link>
        <Link href="#work">Work</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#blog">Blog</Link>
      </nav>
      <div className="social-links">
        {/* Add your social media icons here */}
      </div>
    </aside>
  );
};

export default Sidebar;
