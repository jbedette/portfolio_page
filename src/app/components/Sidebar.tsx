// import Link from 'next/link';
// import { FC } from 'react';

// const Sidebar: FC = () => {
//   return (
//     <aside className="sidebar">
//       <nav>
//         <Link href="#hero">Home</Link>
//         <Link href="#projects">Projects</Link>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;
import Link from 'next/link';
import { FC } from 'react';

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <Link href="#hero">
          <span>Home</span>
        </Link>
        <Link href="#projects">
          <span>Projects</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
