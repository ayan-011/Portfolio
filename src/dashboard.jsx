import './App.css'
import LeftSidebar from './leftSidebar'
import Home from './Middle/Home'
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './Middle/About'
import Contact from './Middle/Contact'
import Projects from './Middle/Projects'
import Certificates from './Middle/Certificates'
import Navbar from './Middle/nav'

function Dashboard() {

   const location = useLocation();
  const getTitle = () => {
    const path = location.pathname.replace('/', '') || 'Home';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };


  return (
    <div className="w-full h-screen bg-black relative">
      
      {/* Left Sidebar (Fixed) */}
      <div className="fixed top-0 left-0 h-screen w-1/5 bg-red-80  p-1 z-10">
        <LeftSidebar />
      </div>


      {/* Middle Content (Scrollable) */}
      <div className="absolute top-0 md:left-[20%] md:right-[20%] left-[20%] right-[0%]  h-screen overflow-y-scroll border border-l-[1px] md:border-r-[1px] border-r-0 border-t-0 border-b-0 border-[#3e4144] scrollbar-hidden">
        <div className="h-[200vh]  text-white w-full">

          <div className=''>
          <Navbar title={getTitle()} />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
          </Routes>

          
        </div>
      </div>

      {/* Right Sidebar (Fixed) */}
      <div className=" fixed top-0 right-0 h-screen w-1/5 bg-green-90 z-10 md:flex hidden   ">
      
      </div>


    </div>
  )
}

export default Dashboard
