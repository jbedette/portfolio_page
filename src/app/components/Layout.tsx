import Sidebar from './Sidebar';
import { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
