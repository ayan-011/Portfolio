import './App.css';
import LeftSidebar from './leftSidebar';
import Home from './Middle/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './Middle/About';
import Contact from './Middle/Contact';
import Projects from './Middle/Projects';
import Certificates from './Middle/Certificates';
import Navbar from './Middle/nav';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [mobileFullscreen, setMobileFullscreen] = useState(false);
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname.replace('/', '') || 'Home';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  // Reset fullscreen when leaving the projects page
  useEffect(() => {
    if (location.pathname !== '/projects') {
      setMobileFullscreen(false);
    }
  }, [location.pathname]);

  return (
    <div className="w-full h-screen bg-black relative">
      
      {/* Left Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-1/5 p-1 z-10
          ${mobileFullscreen ? 'hidden' : 'block'} lg:block`}
      >
        <LeftSidebar />
      </div>

      {/* Middle Content */}
      <div
        className={`absolute top-0 h-screen overflow-y-scroll  lg:border-r-[1px] border-l-[1px] border-[#3e4144] scrollbar-hidden
          ${mobileFullscreen ? 'left-0 right-0 border-none  ' : 'left-[20%] right-[0%] md:right-[20%] md:left-[20%]'} 
          lg:left-[20%] lg:right-[20%]`}
      >
        <div className= "h-fit text-white w-full">
          {/* Hide Navbar in fullscreen mode */}
          {!mobileFullscreen && <Navbar title={getTitle()} />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/projects"
              element={<Projects mobileFullscreen={mobileFullscreen} setMobileFullscreen={setMobileFullscreen} />}
            />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="fixed top-0 right-0 h-screen w-1/5 z-10 md:flex hidden"></div>
    </div>
  );
}

export default Dashboard;
