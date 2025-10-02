import './App.css';
import LeftSidebar from './leftSidebar'; 
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Contact from './Middle/Contact';
import Projects from './Middle/Projects';
import Certificates from './Middle/Certificates';
import Navbar from './Middle/nav';
import { useState, useEffect } from 'react';
import About from './Middle/About';

function Dashboard() {
  const [mobileFullscreen, setMobileFullscreen] = useState(false);
  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname.replace('/', '') || 'Home';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };
0 
  // Reset fullscreen when leaving the projects page
  useEffect(() => {
    if (location.pathname !== '/projects') {
      setMobileFullscreen(false);
    }
  }, [location.pathname]);

  return (
    <div className="w-full h-screen bg-black flex flex-row  ">
      
      {/* Left Sidebar */}
      <div
        className={`flex top-0  h-screen xl:w-1/4 lg:w-1/3 lg:bg-black md:w-1/3 md:bg-red-9 sm:w-1/2   p-1   
          ${mobileFullscreen ? 'hidden' : 'block'} lg:block`}
      >
        <LeftSidebar />
      </div>

      {/* Middle Content */} 
 
      <div
        className={`flex top-0 h-screen overflow-y-scroll  border-l-[1px] border-[#3e4144] scrollbar-hidden  w-full left-0 right-0 justify-center
          ${mobileFullscreen ? 'left-0 right-0 border-none  ' : ' '} 
          lg:left-[20%] lg:right-[20%]`}
      >
        <div className= "h-fit text-white w-full">
          {/* Hide Navbar in fullscreen mode */}
          {!mobileFullscreen && <Navbar title={getTitle()} />}

          <Routes> 
            <Route path="/" element={<About />} />
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
      <div className=" top-0 right-0 h-screen w-1/4 lg:flex hidden  lg:border-l-[1px] border-[#3e4144] bg-black z-20"></div>
    </div>
  );
}

export default Dashboard;
