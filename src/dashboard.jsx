import './App.css'
import LeftSidebar from './leftSidebar'
import Home from './Middle/Home'

function Dashboard() {
  return (
    <div className="w-full h-screen bg-black relative">
      
      {/* Left Sidebar (Fixed) */}
      <div className="fixed top-0 left-0 h-screen w-1/5 bg-red-80  p-1 z-10">
        <LeftSidebar />
      </div>


      {/* Middle Content (Scrollable) */}
      <div className="absolute top-0 md:left-[20%] md:right-[20%] left-[20%] right-[0%]  h-screen overflow-y-scroll border border-l-[1px] md:border-r-[1px] border-r-0 border-t-0 border-b-0 border-zinc-900 scrollbar-hidden">
        <div className="h-[200vh]  text-white w-full">
          <Home />
          
        </div>
      </div>

      {/* Right Sidebar (Fixed) */}
      <div className=" fixed top-0 right-0 h-screen w-1/5 bg-green-90 z-10 md:flex hidden   ">
      </div>


    </div>
  )
}

export default Dashboard
