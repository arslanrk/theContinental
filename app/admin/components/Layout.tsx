import React from 'react'
import Sidebar from './SideBar';
import TopBar from './TopBar';

interface LayoutProps {
    children: React.ReactNode; 
  }

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <main className='flex-1 flex flex-col'>
        <div className="sticky top-0 z-10">
          <TopBar />
        </div>
        <div className='p-5 overflow-auto h-[calc(100vh-70px)]'>
            {children}
        </div>
      </main>
    </div>
  )
}

export default Layout